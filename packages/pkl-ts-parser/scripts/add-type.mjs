export default function transform(fileInfo, api) {
  if (!fileInfo.path.includes('PklTsParser.ts')) {
    return;
  }
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  let subclasses = find_subclasses(j, root);
  add_typed_to_superclass(j, root, subclasses);
  return root.toSource();
}

function find_subclasses(j, root) {
  let subclasses = {};
  root.find(j.ClassDeclaration).forEach((path) => {
    const className = path.value.id?.name;
    const superClass = path.value.superClass;
    if (superClass?.type === 'Identifier') {
      const superClassName = superClass.name;
      if (subclasses[superClassName]) {
        subclasses[superClassName].push(className);
      } else {
        subclasses[superClassName] = [className];
      }
    }
  });
  return subclasses;
}

function add_typed_to_superclass(j, root, subclasses) {
  for (const superClass in subclasses) {
    root
      .find(j.ClassDeclaration, {
        id: {
          name: superClass,
        },
      })
      .forEach((path) => {
        path.value.body.body.push(getTypedMethod(j, subclasses[superClass]));
      });

    for (const subclass of subclasses[superClass]) {
      root
        .find(j.ClassDeclaration, {
          id: {
            name: subclass,
          },
        })
        .forEach((path) => {
          path.value.body.body.unshift(getTypeProp(j, subclass));
        });
    }
  }
}

function getTypedMethod(j, subclasses) {
  // public get typed(): this is Type1 | Type2 { return this as any; }
  const method = j.methodDefinition(
    'get',
    j.identifier('typed'),
    j.functionExpression(
      null,
      [],
      j.blockStatement([
        j.returnStatement(
          j.tsAsExpression(j.thisExpression(), j.tsAnyKeyword()),
        ),
      ]),
    ),
  );
  method.value.returnType = j.tsTypeAnnotation(
    j.tsUnionType(
      subclasses.map((subclass) => j.tsTypeReference(j.identifier(subclass))),
    ),
  );
  method.access = 'public';
  return method;
}

function getTypeProp(j, t) {
  // public readonly type: "Type1" = "Type1"
  const prop = j.classProperty(
    j.identifier('_type'),
    j.stringLiteral(t),
    j.tsTypeAnnotation(j.tsLiteralType(j.stringLiteral(t))),
  );
  prop.access = 'public';
  prop.readonly = true;
  return prop;
}

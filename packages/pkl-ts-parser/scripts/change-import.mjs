// change imports from 'antlr4ng' to '../../antlr'

export default function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.ImportDeclaration, {
    source: {
      value: 'antlr4ng',
    },
  }).forEach((path) => {
    path.value.source.value = '../../antlr';
  });

  return root.toSource();
}
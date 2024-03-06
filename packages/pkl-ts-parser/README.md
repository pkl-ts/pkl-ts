# Plk Typescript Parser Project

This project is a `typescript` parser implementation for `Pkl`. It is designed to parse `Pkl` code using antl4ng and typescript.

## Installation

To install the parser, run the following command:

```bash
pnpm add @pkl-ts/parser
```

## Usage

The following example shows how to parse a string input to a parse tree:

```typescript
import { pklParser } from '@pkl-ts/parser';
import { CharStreams } from '@pkl-ts/parser/antlr';

const input = `
age = 22
name: String = "Steve Jobs"
job {
    title = "CEO"
    company = "Apple"
    yearsOfExperience = 1
}
`;

const tree = pklParser(CharStreams.fromString(input));
```

You can then use the generated parser to walk the parse tree, for example with a visitor to extract all classProperty of Pkl code in array format:

```typescript
import { ClassPropertyContext, PklTsParserVisitor } from '@pkl-ts/parser';

class Visitor extends PklTsParserVisitor<Array<string>> {
  visitClassProperty = (ctx: ClassPropertyContext) => {
    let name = ctx.Identifier().getText();
    return [name];
  };

  protected defaultResult(): Array<string> | null {
    return null;
  }

  protected aggregateResult(
    aggregate: Array<string> | null,
    nextResult: Array<string> | null,
  ): Array<string> | null {
    if (aggregate === null) {
      return nextResult;
    } else if (nextResult === null) {
      return aggregate;
    } else {
      return aggregate.concat(nextResult);
    }
  }
}

let ri = tree.replInput();
let visitor = new Visitor();
visitor.visit(ri);
let classProperties = visitor.visit(ri);
console.log(classProperties); // ['age', 'name', 'job']
```

Also, you can walk the parse tree with listener too:

```typescript
import { ClassPropertyContext, PklTsParserListener } from '@pkl-ts/parser';
import { ParseTreeWalker } from '@pkl-ts/parser/antlr';

class Listener extends PklTsParserListener {
  classProperties: string[] = [];
  enterClassProperty = (ctx: ClassPropertyContext) => {
    let name = ctx.Identifier().getText();
    this.classProperties.push(name);
  };
}

let ri = tree.replInput();
let listener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, ri);
console.log(listener.classProperties); // ['age', 'name', 'job']
```

Or get value from tree directly

```typescript
let ri = tree.replInput();

let classProperties: string[] = [];

ri.classProperty().forEach((ctx) => {
  let name = ctx.Identifier().getText();
  classProperties.push(name);
});

console.log(classProperties); // ['age', 'name', 'job']
```

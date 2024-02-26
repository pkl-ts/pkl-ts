# Plk Typescript Parser Project

This project is a `typescript` parser implementation for `Pkl`. It is designed to parse `Pkl` code using antl4ng and typescript and to process the result of parsing using `visitor` and `listener`.

## Installation

To install the parser, follow these steps:

1. Install the package: `pnpm install @pkl-ts-parser`

## Usage

The following example shows how to use the runtime to parse a simple string input stream of the `Pkl` to parse tree:

```typescript
import {
  pklParser,
  PklTsParserListener,
  PklTsParserVisitor,
} from '@pkl-ts-parser/pkl-parser';
import { CharStreams, ParseTreeWalker } from '@pkl-ts-parser/pkl-parser/antlr';

const input = `
    other = "Swallow"
    name: String = "Swallow"
    job {
    title = "Sr. Nest Maker"
    company = "Nests R Us"
    yearsOfExperience = 2
    }
    `;

const tree = pklParser(CharStreams.fromString(input));
```

You can then use the generated parser to walk the parse tree, for example with a visitor to logging all classProperty of Pkl code in array format:

```typescript
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

const tree = pklParser(CharStreams.fromString(input));
let ri = tree.replInput();
let visitor = new Visitor();
visitor.visit(ri);
let classProperties = visitor.visit(ri);
console.log(classProperties);
```

Also you can walk the parse tree with listener too:

```typescript
class Listener extends PklTsParserListener {
  classProperties: string[] = [];
  enterClassProperty = (ctx: ClassPropertyContext) => {
    let name = ctx.Identifier().getText();
    this.classProperties.push(name);
  };
}

const tree = pklParser(CharStreams.fromString(input));
let ri = tree.replInput();
let listener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, ri);
console.log(listener.classProperties);
```

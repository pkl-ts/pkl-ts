import { describe, expect, it } from 'vitest';
import { CharStreams, ParseTreeWalker } from './antlr';
import {
  ClassPropertyContext,
  pklParser,
  PklTsParserListener,
  PklTsParserVisitor,
} from './index';

describe('parsePkl', () => {
  it('use tree', () => {
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
    let ri = tree.replInput();
    let classProperties: string[] = [];

    ri.classProperty().forEach((ctx) => {
      let name = ctx.Identifier().getText();
      classProperties.push(name);
    });

    expect(classProperties).toEqual(['age', 'name', 'job']);
  });
  it('use visitor', () => {
    const input = `
age = 22
name: String = "Steve Jobs"
job {
    title = "CEO"
    company = "Apple"
    yearsOfExperience = 1
}
`;

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
    let classProperties = visitor.visit(ri);
    expect(classProperties).toEqual(['age', 'name', 'job']);
  });
  it('use listener', () => {
    const input = `
age = 22
name: String = "Steve Jobs"
job {
    title = "CEO"
    company = "Apple"
    yearsOfExperience = 1
}
`;

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
    expect(listener.classProperties).toEqual(['age', 'name', 'job']);
  });
});

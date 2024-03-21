import { describe, expect, it } from 'vitest';
import { parse, getNodeName, getNodeRange } from './pkl-ts-astexplorer';

describe('pklTsAstexplorer', () => {
  it('should parse', () => {
    const input = 'age = 22';
    const { tree } = parse(input);
    expect(getNodeName(tree)).toEqual('replInput');
    expect(getNodeRange(tree)).toEqual([0, 8]);
  });
  it('should get terminal name and range', () => {
    const input = 'age = 22';
    const { tree } = parse(input);
    let node = tree.classProperty(0)?.Identifier();
    expect(getNodeName(node)).toEqual('Identifier');
    expect(getNodeRange(node)).toEqual([0, 3]);
  });
  it('should get expr name and range', () => {
    const input = 'age = 22';
    const { tree } = parse(input);
    let node = tree.classProperty(0)?.expr();
    expect(getNodeName(node)).toEqual('IntLiteralContext');
    expect(getNodeRange(node)).toEqual([6, 8]);
  });
  it('should not throw error for invalid input', () => {
    const input = 'age = ';
    const { tree, errors } = parse(input);
    let node = tree.classProperty(0)?.expr();
    expect(getNodeName(node)).toEqual('expr');
    expect(getNodeRange(node)).toEqual([6, 5]);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toMatchInlineSnapshot(
      `"mismatched input '<EOF>' expecting {'false', 'if', 'import', 'import*', 'let', 'module', 'new', 'null', 'outer', 'read', 'read*', 'read?', 'super', 'this', 'throw', 'trace', 'true', '(', '!', '-', SLQuote, MLQuote, IntLiteral, FloatLiteral, Identifier}"`,
    );
  });
});

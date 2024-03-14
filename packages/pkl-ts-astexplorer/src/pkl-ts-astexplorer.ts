import {
  CharStream,
  TerminalNode,
  ParserRuleContext,
} from '@pkl-ts/parser/antlr';
import { pklParser, PklTsParser, ReplInputContext } from '@pkl-ts/parser';

export function parse(input: string) {
  const stream = CharStream.fromString(input);
  let tree = pklParser(stream);
  return tree.replInput();
}

export function getNodeName(node: unknown): string | undefined {
  if (node instanceof TerminalNode) {
    let symbol = node.getSymbol();
    if (symbol.type === -1) {
      return 'EOF';
    }
    return PklTsParser.symbolicNames[symbol.type] ?? undefined;
  }

  if (node instanceof ParserRuleContext) {
    if ('_type' in node && typeof node._type === 'string') {
      return node._type;
    }
    return PklTsParser.ruleNames[node.ruleIndex];
  }
}

export function getNodeRange(node: unknown) {
  if (node instanceof TerminalNode) {
    let symbol = node.getSymbol();
    return [symbol.start, symbol.stop + 1];
  }

  if (node instanceof ParserRuleContext && node.start && node.stop) {
    return [node.start.start, node.stop.stop + 1];
  }
  return undefined;
}

export function* getProperties(node: unknown) {
  const ignored = new Set([
    'source',
    'parent',
    'children',
    'constructor',
    'enterRule',
    'exitRule',
    'accept',
  ]);
  if (node && typeof node === 'object') {
    for (let prop in node) {
      if (ignored.has(prop)) {
        continue;
      }
      if (prop.startsWith('_')) {
        continue;
      }
      yield {
        // @ts-ignore
        value: node[prop],
        key: prop,
        computed: false,
      };
    }
  }
  if (node instanceof ReplInputContext) {
    yield {
      value: node.children,
      key: 'children',
      computed: false,
    };
    return;
  }
  if (node instanceof ParserRuleContext) {
    let keys = Object.getOwnPropertyNames(Object.getPrototypeOf(node));
    for (let prop of keys) {
      if (ignored.has(prop)) {
        continue;
      }
      if (prop.startsWith('_')) {
        continue;
      }
      // @ts-ignore
      const isFunction = typeof node[prop] === 'function';
      // @ts-ignore
      const value = isFunction ? node[prop]() : node[prop];
      yield {
        value,
        key: prop,
        computed: true,
      };
    }
  }
  if (node instanceof TerminalNode) {
    yield {
      value: node.getText(),
      key: 'text',
      computed: true,
    };
  }
}

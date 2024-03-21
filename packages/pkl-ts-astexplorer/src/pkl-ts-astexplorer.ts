import {
  CharStream,
  TerminalNode,
  ParserRuleContext,
  CommonTokenStream,
} from '@pkl-ts/parser/antlr';
import { PklTsLexer, PklTsParser, ReplInputContext } from '@pkl-ts/parser';
import { PklTsSyntaxError, SyntaxErrorListener } from './SyntaxErrorListener';

export function parse(input: string) {
  const stream = CharStream.fromString(input);
  const lexer = new PklTsLexer(stream);
  const tokens = new CommonTokenStream(lexer);
  let tree = new PklTsParser(tokens);
  let listener = new SyntaxErrorListener();
  tree.addErrorListener(listener);
  lexer.addErrorListener(listener);
  let repl = tree.replInput();

  return {
    tree: repl,
    errors: listener.errors,
  };
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
  if (node instanceof PklTsSyntaxError) {
    return 'SyntaxError';
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
  if (node instanceof PklTsSyntaxError && node.node) {
    return [node.node.start, node.node.stop + 1];
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
    'copyFrom',
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

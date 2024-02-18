import { CharStream, CommonTokenStream } from 'antlr4ng';
import { PklTsLexer } from './antlr4/ts/PklTsLexer';
import { PklTsParser } from './antlr4/ts/PklTsParser';

export function pklParser(charStream: CharStream) {
  const lexer = new PklTsLexer(charStream);
  const tokens = new CommonTokenStream(lexer);
  return new PklTsParser(tokens);
}

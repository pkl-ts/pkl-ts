import {
  BaseErrorListener,
  Recognizer,
  ATNSimulator,
  Token,
  RecognitionException,
} from '@pkl-ts/parser/antlr';

export class PklTsSyntaxError {
  node: Token | null;
  message: string;
  line: number;
  column: number;

  constructor(
    node: Token | null,
    message: string,
    line: number,
    column: number,
  ) {
    this.node = node;
    this.message = message;
    this.line = line;
    this.column = column;
  }
}
export class SyntaxErrorListener extends BaseErrorListener {
  errors: PklTsSyntaxError[] = [];

  syntaxError<S extends Token, T extends ATNSimulator>(
    recognizer: Recognizer<T>,
    offendingSymbol: S | null,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | null,
  ) {
    this.errors.push(new PklTsSyntaxError(offendingSymbol, msg, line, column));
  }
}

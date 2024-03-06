import { AbstractParseTreeVisitor } from 'antlr4ng';
import * as antlr from 'antlr4ng';
import { CharStream } from 'antlr4ng';
import { ErrorNode } from 'antlr4ng';
import { ParserRuleContext } from 'antlr4ng';
import { ParseTreeListener } from 'antlr4ng';
import { TerminalNode } from 'antlr4ng';
import { Token } from 'antlr4ng';

export declare class AdditiveExprContext extends ExprContext {
  readonly _type: 'AdditiveExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  PLUS(): antlr.TerminalNode | null;
  MINUS(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class AmendExprContext extends ExprContext {
  readonly _type: 'AmendExprContext';
  constructor(ctx: ExprContext);
  expr(): ExprContext;
  objectBody(): ObjectBodyContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class AnnotationContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  AT(): antlr.TerminalNode;
  type(): TypeContext;
  objectBody(): ObjectBodyContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ArgumentListContext extends antlr.ParserRuleContext {
  _expr?: ExprContext;
  _es: ExprContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  RPAREN(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ClassBodyContext extends antlr.ParserRuleContext {
  _classProperty?: ClassPropertyContext;
  _ps: ClassPropertyContext[];
  _classMethod?: ClassMethodContext;
  _ms: ClassMethodContext[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LBRACE(): antlr.TerminalNode;
  RBRACE(): antlr.TerminalNode | null;
  classProperty(): ClassPropertyContext[];
  classProperty(i: number): ClassPropertyContext | null;
  classMethod(): ClassMethodContext[];
  classMethod(i: number): ClassMethodContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ClassHeaderContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  CLASS(): antlr.TerminalNode;
  Identifier(): antlr.TerminalNode;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  typeParameterList(): TypeParameterListContext | null;
  EXTENDS(): antlr.TerminalNode | null;
  type(): TypeContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ClassMethodContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  methodHeader(): MethodHeaderContext;
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext | null;
  ASSIGN(): antlr.TerminalNode | null;
  expr(): ExprContext | null;
  DocComment(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ClassPropertyContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  Identifier(): antlr.TerminalNode;
  typeAnnotation(): TypeAnnotationContext | null;
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext | null;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  DocComment(): antlr.TerminalNode | null;
  ASSIGN(): antlr.TerminalNode | null;
  expr(): ExprContext | null;
  objectBody(): ObjectBodyContext[];
  objectBody(i: number): ObjectBodyContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ClazzContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  classHeader(): ClassHeaderContext;
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext | null;
  classBody(): ClassBodyContext | null;
  DocComment(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ComparisonExprContext extends ExprContext {
  readonly _type: 'ComparisonExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  LT(): antlr.TerminalNode | null;
  GT(): antlr.TerminalNode | null;
  LTE(): antlr.TerminalNode | null;
  GTE(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ConstrainedTypeContext extends TypeContext {
  readonly _type: 'ConstrainedTypeContext';
  _t?: Token | null;
  _expr?: ExprContext;
  _es: ExprContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(ctx: TypeContext);
  type(): TypeContext;
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  RPAREN(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class DeclaredTypeContext extends TypeContext {
  readonly _type: 'DeclaredTypeContext';
  constructor(ctx: TypeContext);
  qualifiedIdentifier(): QualifiedIdentifierContext;
  typeArgumentList(): TypeArgumentListContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class DefaultUnionTypeContext extends TypeContext {
  readonly _type: 'DefaultUnionTypeContext';
  _u?: TypeContext;
  constructor(ctx: TypeContext);
  STAR(): antlr.TerminalNode;
  type(): TypeContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class EqualityExprContext extends ExprContext {
  readonly _type: 'EqualityExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  EQUAL(): antlr.TerminalNode | null;
  NOT_EQUAL(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ExponentiationExprContext extends ExprContext {
  readonly _type: 'ExponentiationExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  POW(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ExprContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  get ruleIndex(): number;
  copyFrom(ctx: ExprContext): void;
  get _typed():
    | NewExprContext
    | ThisExprContext
    | PipeExprContext
    | ExponentiationExprContext
    | SubscriptExprContext
    | UnqualifiedAccessExprContext
    | TrueLiteralContext
    | AdditiveExprContext
    | LetExprContext
    | LogicalNotExprContext
    | FalseLiteralContext
    | UnaryMinusExprContext
    | ParenthesizedExprContext
    | FloatLiteralContext
    | IfExprContext
    | ModuleExprContext
    | ImportExprContext
    | SingleLineStringLiteralContext
    | ThrowExprContext
    | NullLiteralContext
    | LogicalAndExprContext
    | IntLiteralContext
    | ReadExprContext
    | NullCoalesceExprContext
    | ComparisonExprContext
    | MultiLineStringLiteralContext
    | LogicalOrExprContext
    | TypeTestExprContext
    | SuperSubscriptExprContext
    | SuperAccessExprContext
    | FunctionLiteralContext
    | OuterExprContext
    | MultiplicativeExprContext
    | QualifiedAccessExprContext
    | TraceExprContext
    | EqualityExprContext
    | AmendExprContext
    | NonNullExprContext;
}

export declare class ExprInputContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  expr(): ExprContext;
  EOF(): antlr.TerminalNode;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class FalseLiteralContext extends ExprContext {
  readonly _type: 'FalseLiteralContext';
  constructor(ctx: ExprContext);
  FALSE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class FloatLiteralContext extends ExprContext {
  readonly _type: 'FloatLiteralContext';
  constructor(ctx: ExprContext);
  FloatLiteral(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ForGeneratorContext extends ObjectMemberContext {
  readonly _type: 'ForGeneratorContext';
  _t1?: ParameterContext;
  _t2?: ParameterContext;
  _e?: ExprContext;
  _err?: Token | null;
  constructor(ctx: ObjectMemberContext);
  FOR(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  IN(): antlr.TerminalNode;
  objectBody(): ObjectBodyContext;
  parameter(): ParameterContext[];
  parameter(i: number): ParameterContext | null;
  expr(): ExprContext;
  COMMA(): antlr.TerminalNode | null;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class FunctionLiteralContext extends ExprContext {
  readonly _type: 'FunctionLiteralContext';
  constructor(ctx: ExprContext);
  parameterList(): ParameterListContext;
  ARROW(): antlr.TerminalNode;
  expr(): ExprContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class FunctionTypeContext extends TypeContext {
  readonly _type: 'FunctionTypeContext';
  _t?: Token | null;
  _type_?: TypeContext;
  _ps: TypeContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  _r?: TypeContext;
  constructor(ctx: TypeContext);
  ARROW(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  type_(): TypeContext[];
  type_(i: number): TypeContext | null;
  RPAREN(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class IfExprContext extends ExprContext {
  readonly _type: 'IfExprContext';
  _c?: ExprContext;
  _err?: Token | null;
  _l?: ExprContext;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  IF(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  ELSE(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ImportClauseContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  stringConstant(): StringConstantContext;
  IMPORT(): antlr.TerminalNode | null;
  IMPORT_GLOB(): antlr.TerminalNode | null;
  AS(): antlr.TerminalNode | null;
  Identifier(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ImportExprContext extends ExprContext {
  readonly _type: 'ImportExprContext';
  _t?: Token | null;
  _err?: Token | null;
  constructor(ctx: ExprContext);
  LPAREN(): antlr.TerminalNode;
  stringConstant(): StringConstantContext;
  IMPORT(): antlr.TerminalNode | null;
  IMPORT_GLOB(): antlr.TerminalNode | null;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class IntLiteralContext extends ExprContext {
  readonly _type: 'IntLiteralContext';
  constructor(ctx: ExprContext);
  IntLiteral(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class LetExprContext extends ExprContext {
  readonly _type: 'LetExprContext';
  _l?: ExprContext;
  _err?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  LET(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  parameter(): ParameterContext;
  ASSIGN(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class LogicalAndExprContext extends ExprContext {
  readonly _type: 'LogicalAndExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  AND(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class LogicalNotExprContext extends ExprContext {
  readonly _type: 'LogicalNotExprContext';
  constructor(ctx: ExprContext);
  NOT(): antlr.TerminalNode;
  expr(): ExprContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class LogicalOrExprContext extends ExprContext {
  readonly _type: 'LogicalOrExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  OR(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class MemberPredicateContext extends ObjectMemberContext {
  readonly _type: 'MemberPredicateContext';
  _t?: Token | null;
  _k?: ExprContext;
  _err1?: Token | null;
  _err2?: Token | null;
  _v?: ExprContext;
  constructor(ctx: ObjectMemberContext);
  LPRED(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  ASSIGN(): antlr.TerminalNode | null;
  RBRACK(): antlr.TerminalNode[];
  RBRACK(i: number): antlr.TerminalNode | null;
  objectBody(): ObjectBodyContext[];
  objectBody(i: number): ObjectBodyContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class MethodHeaderContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  FUNCTION(): antlr.TerminalNode;
  Identifier(): antlr.TerminalNode;
  parameterList(): ParameterListContext;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  typeParameterList(): TypeParameterListContext | null;
  typeAnnotation(): TypeAnnotationContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModifierContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  EXTERNAL(): antlr.TerminalNode | null;
  ABSTRACT(): antlr.TerminalNode | null;
  OPEN(): antlr.TerminalNode | null;
  LOCAL(): antlr.TerminalNode | null;
  HIDDEN_(): antlr.TerminalNode | null;
  FIXED(): antlr.TerminalNode | null;
  CONST(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleContext extends antlr.ParserRuleContext {
  _importClause?: ImportClauseContext;
  _is: ImportClauseContext[];
  _clazz?: ClazzContext;
  _cs: ClazzContext[];
  _typeAlias?: TypeAliasContext;
  _ts: TypeAliasContext[];
  _classProperty?: ClassPropertyContext;
  _ps: ClassPropertyContext[];
  _classMethod?: ClassMethodContext;
  _ms: ClassMethodContext[];
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  EOF(): antlr.TerminalNode;
  moduleDecl(): ModuleDeclContext | null;
  importClause(): ImportClauseContext[];
  importClause(i: number): ImportClauseContext | null;
  clazz(): ClazzContext[];
  clazz(i: number): ClazzContext | null;
  typeAlias(): TypeAliasContext[];
  typeAlias(i: number): TypeAliasContext | null;
  classProperty(): ClassPropertyContext[];
  classProperty(i: number): ClassPropertyContext | null;
  classMethod(): ClassMethodContext[];
  classMethod(i: number): ClassMethodContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleDeclContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  moduleHeader(): ModuleHeaderContext;
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext | null;
  DocComment(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleExprContext extends ExprContext {
  readonly _type: 'ModuleExprContext';
  constructor(ctx: ExprContext);
  MODULE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleExtendsOrAmendsClauseContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  stringConstant(): StringConstantContext;
  EXTENDS(): antlr.TerminalNode | null;
  AMENDS(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleHeaderContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  MODULE(): antlr.TerminalNode | null;
  qualifiedIdentifier(): QualifiedIdentifierContext | null;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  moduleExtendsOrAmendsClause(): ModuleExtendsOrAmendsClauseContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ModuleTypeContext extends TypeContext {
  readonly _type: 'ModuleTypeContext';
  constructor(ctx: TypeContext);
  MODULE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class MultiLineStringLiteralContext extends ExprContext {
  readonly _type: 'MultiLineStringLiteralContext';
  _t?: Token | null;
  _t2?: Token | null;
  constructor(ctx: ExprContext);
  MLQuote(): antlr.TerminalNode;
  MLEndQuote(): antlr.TerminalNode;
  multiLineStringPart(): MultiLineStringPartContext[];
  multiLineStringPart(i: number): MultiLineStringPartContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class MultiLineStringPartContext extends antlr.ParserRuleContext {
  _e?: ExprContext;
  _MLCharacters?: Token | null;
  _ts: antlr.Token[];
  _MLNewline?: Token | null;
  _MLCharacterEscape?: Token | null;
  _MLUnicodeEscape?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  MLInterpolation(): antlr.TerminalNode | null;
  RPAREN(): antlr.TerminalNode | null;
  expr(): ExprContext | null;
  MLCharacters(): antlr.TerminalNode[];
  MLCharacters(i: number): antlr.TerminalNode | null;
  MLNewline(): antlr.TerminalNode[];
  MLNewline(i: number): antlr.TerminalNode | null;
  MLCharacterEscape(): antlr.TerminalNode[];
  MLCharacterEscape(i: number): antlr.TerminalNode | null;
  MLUnicodeEscape(): antlr.TerminalNode[];
  MLUnicodeEscape(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class MultiplicativeExprContext extends ExprContext {
  readonly _type: 'MultiplicativeExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  STAR(): antlr.TerminalNode | null;
  DIV(): antlr.TerminalNode | null;
  INT_DIV(): antlr.TerminalNode | null;
  MOD(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NewExprContext extends ExprContext {
  readonly _type: 'NewExprContext';
  _t?: Token | null;
  constructor(ctx: ExprContext);
  objectBody(): ObjectBodyContext;
  NEW(): antlr.TerminalNode;
  type(): TypeContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NonNullExprContext extends ExprContext {
  readonly _type: 'NonNullExprContext';
  constructor(ctx: ExprContext);
  expr(): ExprContext;
  NON_NULL(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NothingTypeContext extends TypeContext {
  readonly _type: 'NothingTypeContext';
  constructor(ctx: TypeContext);
  NOTHING(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NullableTypeContext extends TypeContext {
  readonly _type: 'NullableTypeContext';
  constructor(ctx: TypeContext);
  type(): TypeContext;
  QUESTION(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NullCoalesceExprContext extends ExprContext {
  readonly _type: 'NullCoalesceExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  COALESCE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class NullLiteralContext extends ExprContext {
  readonly _type: 'NullLiteralContext';
  constructor(ctx: ExprContext);
  NULL(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectBodyContext extends antlr.ParserRuleContext {
  _parameter?: ParameterContext;
  _ps: ParameterContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LBRACE(): antlr.TerminalNode;
  ARROW(): antlr.TerminalNode | null;
  objectMember(): ObjectMemberContext[];
  objectMember(i: number): ObjectMemberContext | null;
  parameter(): ParameterContext[];
  parameter(i: number): ParameterContext | null;
  RBRACE(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectElementContext extends ObjectMemberContext {
  readonly _type: 'ObjectElementContext';
  constructor(ctx: ObjectMemberContext);
  expr(): ExprContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectEntryContext extends ObjectMemberContext {
  readonly _type: 'ObjectEntryContext';
  _t?: Token | null;
  _k?: ExprContext;
  _err1?: Token | null;
  _err2?: Token | null;
  _v?: ExprContext;
  constructor(ctx: ObjectMemberContext);
  LBRACK(): antlr.TerminalNode;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  ASSIGN(): antlr.TerminalNode | null;
  RBRACK(): antlr.TerminalNode[];
  RBRACK(i: number): antlr.TerminalNode | null;
  objectBody(): ObjectBodyContext[];
  objectBody(i: number): ObjectBodyContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectMemberContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  get ruleIndex(): number;
  copyFrom(ctx: ObjectMemberContext): void;
  get _typed():
    | WhenGeneratorContext
    | MemberPredicateContext
    | ObjectSpreadContext
    | ForGeneratorContext
    | ObjectPropertyContext
    | ObjectElementContext
    | ObjectMethodContext
    | ObjectEntryContext;
}

export declare class ObjectMethodContext extends ObjectMemberContext {
  readonly _type: 'ObjectMethodContext';
  constructor(ctx: ObjectMemberContext);
  methodHeader(): MethodHeaderContext;
  ASSIGN(): antlr.TerminalNode;
  expr(): ExprContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectPropertyContext extends ObjectMemberContext {
  readonly _type: 'ObjectPropertyContext';
  constructor(ctx: ObjectMemberContext);
  Identifier(): antlr.TerminalNode;
  ASSIGN(): antlr.TerminalNode | null;
  expr(): ExprContext | null;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  typeAnnotation(): TypeAnnotationContext | null;
  objectBody(): ObjectBodyContext[];
  objectBody(i: number): ObjectBodyContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ObjectSpreadContext extends ObjectMemberContext {
  readonly _type: 'ObjectSpreadContext';
  constructor(ctx: ObjectMemberContext);
  expr(): ExprContext;
  SPREAD(): antlr.TerminalNode | null;
  QSPREAD(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class OuterExprContext extends ExprContext {
  readonly _type: 'OuterExprContext';
  constructor(ctx: ExprContext);
  OUTER(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ParameterContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  UNDERSCORE(): antlr.TerminalNode | null;
  typedIdentifier(): TypedIdentifierContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ParameterListContext extends antlr.ParserRuleContext {
  _parameter?: ParameterContext;
  _ts: ParameterContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LPAREN(): antlr.TerminalNode;
  parameter(): ParameterContext[];
  parameter(i: number): ParameterContext | null;
  RPAREN(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ParenthesizedExprContext extends ExprContext {
  readonly _type: 'ParenthesizedExprContext';
  _err?: Token | null;
  constructor(ctx: ExprContext);
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ParenthesizedTypeContext extends TypeContext {
  readonly _type: 'ParenthesizedTypeContext';
  _err?: Token | null;
  constructor(ctx: TypeContext);
  LPAREN(): antlr.TerminalNode;
  type(): TypeContext;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class PipeExprContext extends ExprContext {
  readonly _type: 'PipeExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  PIPE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare function pklParser(charStream: CharStream): PklTsParser;

export declare class PklTsLexer extends antlr.Lexer {
  static readonly ABSTRACT = 1;
  static readonly AMENDS = 2;
  static readonly AS = 3;
  static readonly CLASS = 4;
  static readonly CONST = 5;
  static readonly ELSE = 6;
  static readonly EXTENDS = 7;
  static readonly EXTERNAL = 8;
  static readonly FALSE = 9;
  static readonly FIXED = 10;
  static readonly FOR = 11;
  static readonly FUNCTION = 12;
  static readonly HIDDEN_ = 13;
  static readonly IF = 14;
  static readonly IMPORT = 15;
  static readonly IMPORT_GLOB = 16;
  static readonly IN = 17;
  static readonly IS = 18;
  static readonly LET = 19;
  static readonly LOCAL = 20;
  static readonly MODULE = 21;
  static readonly NEW = 22;
  static readonly NOTHING = 23;
  static readonly NULL = 24;
  static readonly OPEN = 25;
  static readonly OUT = 26;
  static readonly OUTER = 27;
  static readonly READ = 28;
  static readonly READ_GLOB = 29;
  static readonly READ_OR_NULL = 30;
  static readonly SUPER = 31;
  static readonly THIS = 32;
  static readonly THROW = 33;
  static readonly TRACE = 34;
  static readonly TRUE = 35;
  static readonly TYPE_ALIAS = 36;
  static readonly UNKNOWN = 37;
  static readonly WHEN = 38;
  static readonly PROTECTED = 39;
  static readonly OVERRIDE = 40;
  static readonly RECORD = 41;
  static readonly DELETE = 42;
  static readonly CASE = 43;
  static readonly SWITCH = 44;
  static readonly VARARG = 45;
  static readonly LPAREN = 46;
  static readonly RPAREN = 47;
  static readonly LBRACE = 48;
  static readonly RBRACE = 49;
  static readonly LBRACK = 50;
  static readonly RBRACK = 51;
  static readonly LPRED = 52;
  static readonly COMMA = 53;
  static readonly DOT = 54;
  static readonly QDOT = 55;
  static readonly COALESCE = 56;
  static readonly NON_NULL = 57;
  static readonly AT = 58;
  static readonly ASSIGN = 59;
  static readonly GT = 60;
  static readonly LT = 61;
  static readonly NOT = 62;
  static readonly QUESTION = 63;
  static readonly COLON = 64;
  static readonly ARROW = 65;
  static readonly EQUAL = 66;
  static readonly NOT_EQUAL = 67;
  static readonly LTE = 68;
  static readonly GTE = 69;
  static readonly AND = 70;
  static readonly OR = 71;
  static readonly PLUS = 72;
  static readonly MINUS = 73;
  static readonly POW = 74;
  static readonly STAR = 75;
  static readonly DIV = 76;
  static readonly INT_DIV = 77;
  static readonly MOD = 78;
  static readonly UNION = 79;
  static readonly PIPE = 80;
  static readonly SPREAD = 81;
  static readonly QSPREAD = 82;
  static readonly UNDERSCORE = 83;
  static readonly SLQuote = 84;
  static readonly MLQuote = 85;
  static readonly IntLiteral = 86;
  static readonly FloatLiteral = 87;
  static readonly Identifier = 88;
  static readonly NewlineSemicolon = 89;
  static readonly Whitespace = 90;
  static readonly DocComment = 91;
  static readonly BlockComment = 92;
  static readonly LineComment = 93;
  static readonly ShebangComment = 94;
  static readonly SLEndQuote = 95;
  static readonly SLInterpolation = 96;
  static readonly SLUnicodeEscape = 97;
  static readonly SLCharacterEscape = 98;
  static readonly SLCharacters = 99;
  static readonly MLEndQuote = 100;
  static readonly MLInterpolation = 101;
  static readonly MLUnicodeEscape = 102;
  static readonly MLCharacterEscape = 103;
  static readonly MLNewline = 104;
  static readonly MLCharacters = 105;
  static readonly SLString = 1;
  static readonly MLString = 2;
  static readonly channelNames: string[];
  static readonly literalNames: (string | null)[];
  static readonly symbolicNames: (string | null)[];
  static readonly modeNames: string[];
  static readonly ruleNames: string[];
  interpolationScopes: Array<StringInterpolationScope>;
  interpolationScope: StringInterpolationScope;
  pushInterpolationScope(): void;
  incParenLevel(): void;
  decParenLevel(): void;
  isPounds(): boolean;
  isQuote(): boolean;
  endsWithPounds(text: string): boolean;
  removeBackTicks(): void;
  isNewlineOrEof(): boolean;
  isUnicodeIdentifierStart(char: string): boolean;
  isUnicodeIdentifierPart(char: string): boolean;
  constructor(input: antlr.CharStream);
  get grammarFileName(): string;
  get literalNames(): (string | null)[];
  get symbolicNames(): (string | null)[];
  get ruleNames(): string[];
  get serializedATN(): number[];
  get channelNames(): string[];
  get modeNames(): string[];
  action(
    localContext: antlr.RuleContext | null,
    ruleIndex: number,
    actionIndex: number,
  ): void;
  private LPAREN_action;
  private RPAREN_action;
  private SLQuote_action;
  private MLQuote_action;
  private Identifier_action;
  private SLInterpolation_action;
  private MLInterpolation_action;
  sempred(
    localContext: antlr.RuleContext | null,
    ruleIndex: number,
    predIndex: number,
  ): boolean;
  private IdentifierStart_sempred;
  private IdentifierPart_sempred;
  private LineComment_sempred;
  private ShebangComment_sempred;
  private Pounds_sempred;
  private SLCharacters_sempred;
  private MLCharacters_sempred;
  static readonly _serializedATN: number[];
  private static __ATN;
  static get _ATN(): antlr.ATN;
  private static readonly vocabulary;
  get vocabulary(): antlr.Vocabulary;
  private static readonly decisionsToDFA;
}

export declare class PklTsParser extends antlr.Parser {
  static readonly ABSTRACT = 1;
  static readonly AMENDS = 2;
  static readonly AS = 3;
  static readonly CLASS = 4;
  static readonly CONST = 5;
  static readonly ELSE = 6;
  static readonly EXTENDS = 7;
  static readonly EXTERNAL = 8;
  static readonly FALSE = 9;
  static readonly FIXED = 10;
  static readonly FOR = 11;
  static readonly FUNCTION = 12;
  static readonly HIDDEN_ = 13;
  static readonly IF = 14;
  static readonly IMPORT = 15;
  static readonly IMPORT_GLOB = 16;
  static readonly IN = 17;
  static readonly IS = 18;
  static readonly LET = 19;
  static readonly LOCAL = 20;
  static readonly MODULE = 21;
  static readonly NEW = 22;
  static readonly NOTHING = 23;
  static readonly NULL = 24;
  static readonly OPEN = 25;
  static readonly OUT = 26;
  static readonly OUTER = 27;
  static readonly READ = 28;
  static readonly READ_GLOB = 29;
  static readonly READ_OR_NULL = 30;
  static readonly SUPER = 31;
  static readonly THIS = 32;
  static readonly THROW = 33;
  static readonly TRACE = 34;
  static readonly TRUE = 35;
  static readonly TYPE_ALIAS = 36;
  static readonly UNKNOWN = 37;
  static readonly WHEN = 38;
  static readonly PROTECTED = 39;
  static readonly OVERRIDE = 40;
  static readonly RECORD = 41;
  static readonly DELETE = 42;
  static readonly CASE = 43;
  static readonly SWITCH = 44;
  static readonly VARARG = 45;
  static readonly LPAREN = 46;
  static readonly RPAREN = 47;
  static readonly LBRACE = 48;
  static readonly RBRACE = 49;
  static readonly LBRACK = 50;
  static readonly RBRACK = 51;
  static readonly LPRED = 52;
  static readonly COMMA = 53;
  static readonly DOT = 54;
  static readonly QDOT = 55;
  static readonly COALESCE = 56;
  static readonly NON_NULL = 57;
  static readonly AT = 58;
  static readonly ASSIGN = 59;
  static readonly GT = 60;
  static readonly LT = 61;
  static readonly NOT = 62;
  static readonly QUESTION = 63;
  static readonly COLON = 64;
  static readonly ARROW = 65;
  static readonly EQUAL = 66;
  static readonly NOT_EQUAL = 67;
  static readonly LTE = 68;
  static readonly GTE = 69;
  static readonly AND = 70;
  static readonly OR = 71;
  static readonly PLUS = 72;
  static readonly MINUS = 73;
  static readonly POW = 74;
  static readonly STAR = 75;
  static readonly DIV = 76;
  static readonly INT_DIV = 77;
  static readonly MOD = 78;
  static readonly UNION = 79;
  static readonly PIPE = 80;
  static readonly SPREAD = 81;
  static readonly QSPREAD = 82;
  static readonly UNDERSCORE = 83;
  static readonly SLQuote = 84;
  static readonly MLQuote = 85;
  static readonly IntLiteral = 86;
  static readonly FloatLiteral = 87;
  static readonly Identifier = 88;
  static readonly NewlineSemicolon = 89;
  static readonly Whitespace = 90;
  static readonly DocComment = 91;
  static readonly BlockComment = 92;
  static readonly LineComment = 93;
  static readonly ShebangComment = 94;
  static readonly SLEndQuote = 95;
  static readonly SLInterpolation = 96;
  static readonly SLUnicodeEscape = 97;
  static readonly SLCharacterEscape = 98;
  static readonly SLCharacters = 99;
  static readonly MLEndQuote = 100;
  static readonly MLInterpolation = 101;
  static readonly MLUnicodeEscape = 102;
  static readonly MLCharacterEscape = 103;
  static readonly MLNewline = 104;
  static readonly MLCharacters = 105;
  static readonly RULE_replInput = 0;
  static readonly RULE_exprInput = 1;
  static readonly RULE_module = 2;
  static readonly RULE_moduleDecl = 3;
  static readonly RULE_moduleHeader = 4;
  static readonly RULE_moduleExtendsOrAmendsClause = 5;
  static readonly RULE_importClause = 6;
  static readonly RULE_clazz = 7;
  static readonly RULE_classHeader = 8;
  static readonly RULE_modifier = 9;
  static readonly RULE_classBody = 10;
  static readonly RULE_typeAlias = 11;
  static readonly RULE_typeAliasHeader = 12;
  static readonly RULE_classProperty = 13;
  static readonly RULE_classMethod = 14;
  static readonly RULE_methodHeader = 15;
  static readonly RULE_parameterList = 16;
  static readonly RULE_argumentList = 17;
  static readonly RULE_annotation = 18;
  static readonly RULE_qualifiedIdentifier = 19;
  static readonly RULE_typeAnnotation = 20;
  static readonly RULE_typeParameterList = 21;
  static readonly RULE_typeParameter = 22;
  static readonly RULE_typeArgumentList = 23;
  static readonly RULE_type = 24;
  static readonly RULE_typedIdentifier = 25;
  static readonly RULE_parameter = 26;
  static readonly RULE_expr = 27;
  static readonly RULE_objectBody = 28;
  static readonly RULE_objectMember = 29;
  static readonly RULE_stringConstant = 30;
  static readonly RULE_singleLineStringPart = 31;
  static readonly RULE_multiLineStringPart = 32;
  static readonly RULE_reservedKeyword = 33;
  static readonly literalNames: (string | null)[];
  static readonly symbolicNames: (string | null)[];
  static readonly ruleNames: string[];
  get grammarFileName(): string;
  get literalNames(): (string | null)[];
  get symbolicNames(): (string | null)[];
  get ruleNames(): string[];
  get serializedATN(): number[];
  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): antlr.FailedPredicateException;
  /**
   * Returns true if and only if the next token to be consumed is not preceded by a newline or semicolon.
   */
  noNewlineOrSemicolon(): boolean;
  constructor(input: antlr.TokenStream);
  replInput(): ReplInputContext;
  exprInput(): ExprInputContext;
  module_(): ModuleContext;
  moduleDecl(): ModuleDeclContext;
  moduleHeader(): ModuleHeaderContext;
  moduleExtendsOrAmendsClause(): ModuleExtendsOrAmendsClauseContext;
  importClause(): ImportClauseContext;
  clazz(): ClazzContext;
  classHeader(): ClassHeaderContext;
  modifier(): ModifierContext;
  classBody(): ClassBodyContext;
  typeAlias(): TypeAliasContext;
  typeAliasHeader(): TypeAliasHeaderContext;
  classProperty(): ClassPropertyContext;
  classMethod(): ClassMethodContext;
  methodHeader(): MethodHeaderContext;
  parameterList(): ParameterListContext;
  argumentList(): ArgumentListContext;
  annotation(): AnnotationContext;
  qualifiedIdentifier(): QualifiedIdentifierContext;
  typeAnnotation(): TypeAnnotationContext;
  typeParameterList(): TypeParameterListContext;
  typeParameter(): TypeParameterContext;
  typeArgumentList(): TypeArgumentListContext;
  type_(): TypeContext;
  type_(_p: number): TypeContext;
  typedIdentifier(): TypedIdentifierContext;
  parameter(): ParameterContext;
  expr(): ExprContext;
  expr(_p: number): ExprContext;
  objectBody(): ObjectBodyContext;
  objectMember(): ObjectMemberContext;
  stringConstant(): StringConstantContext;
  singleLineStringPart(): SingleLineStringPartContext;
  multiLineStringPart(): MultiLineStringPartContext;
  reservedKeyword(): ReservedKeywordContext;
  sempred(
    localContext: antlr.RuleContext | null,
    ruleIndex: number,
    predIndex: number,
  ): boolean;
  private argumentList_sempred;
  private type_sempred;
  private expr_sempred;
  static readonly _serializedATN: number[];
  private static __ATN;
  static get _ATN(): antlr.ATN;
  private static readonly vocabulary;
  get vocabulary(): antlr.Vocabulary;
  private static readonly decisionsToDFA;
}

/**
 * This interface defines a complete listener for a parse tree produced by
 * `PklTsParser`.
 */
export declare class PklTsParserListener implements ParseTreeListener {
  /**
   * Enter a parse tree produced by `PklTsParser.replInput`.
   * @param ctx the parse tree
   */
  enterReplInput?: (ctx: ReplInputContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.replInput`.
   * @param ctx the parse tree
   */
  exitReplInput?: (ctx: ReplInputContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.exprInput`.
   * @param ctx the parse tree
   */
  enterExprInput?: (ctx: ExprInputContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.exprInput`.
   * @param ctx the parse tree
   */
  exitExprInput?: (ctx: ExprInputContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.module`.
   * @param ctx the parse tree
   */
  enterModule?: (ctx: ModuleContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.module`.
   * @param ctx the parse tree
   */
  exitModule?: (ctx: ModuleContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.moduleDecl`.
   * @param ctx the parse tree
   */
  enterModuleDecl?: (ctx: ModuleDeclContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.moduleDecl`.
   * @param ctx the parse tree
   */
  exitModuleDecl?: (ctx: ModuleDeclContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.moduleHeader`.
   * @param ctx the parse tree
   */
  enterModuleHeader?: (ctx: ModuleHeaderContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.moduleHeader`.
   * @param ctx the parse tree
   */
  exitModuleHeader?: (ctx: ModuleHeaderContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.moduleExtendsOrAmendsClause`.
   * @param ctx the parse tree
   */
  enterModuleExtendsOrAmendsClause?: (
    ctx: ModuleExtendsOrAmendsClauseContext,
  ) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.moduleExtendsOrAmendsClause`.
   * @param ctx the parse tree
   */
  exitModuleExtendsOrAmendsClause?: (
    ctx: ModuleExtendsOrAmendsClauseContext,
  ) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.importClause`.
   * @param ctx the parse tree
   */
  enterImportClause?: (ctx: ImportClauseContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.importClause`.
   * @param ctx the parse tree
   */
  exitImportClause?: (ctx: ImportClauseContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.clazz`.
   * @param ctx the parse tree
   */
  enterClazz?: (ctx: ClazzContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.clazz`.
   * @param ctx the parse tree
   */
  exitClazz?: (ctx: ClazzContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.classHeader`.
   * @param ctx the parse tree
   */
  enterClassHeader?: (ctx: ClassHeaderContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.classHeader`.
   * @param ctx the parse tree
   */
  exitClassHeader?: (ctx: ClassHeaderContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.modifier`.
   * @param ctx the parse tree
   */
  enterModifier?: (ctx: ModifierContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.modifier`.
   * @param ctx the parse tree
   */
  exitModifier?: (ctx: ModifierContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.classBody`.
   * @param ctx the parse tree
   */
  enterClassBody?: (ctx: ClassBodyContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.classBody`.
   * @param ctx the parse tree
   */
  exitClassBody?: (ctx: ClassBodyContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeAlias`.
   * @param ctx the parse tree
   */
  enterTypeAlias?: (ctx: TypeAliasContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeAlias`.
   * @param ctx the parse tree
   */
  exitTypeAlias?: (ctx: TypeAliasContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeAliasHeader`.
   * @param ctx the parse tree
   */
  enterTypeAliasHeader?: (ctx: TypeAliasHeaderContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeAliasHeader`.
   * @param ctx the parse tree
   */
  exitTypeAliasHeader?: (ctx: TypeAliasHeaderContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.classProperty`.
   * @param ctx the parse tree
   */
  enterClassProperty?: (ctx: ClassPropertyContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.classProperty`.
   * @param ctx the parse tree
   */
  exitClassProperty?: (ctx: ClassPropertyContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.classMethod`.
   * @param ctx the parse tree
   */
  enterClassMethod?: (ctx: ClassMethodContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.classMethod`.
   * @param ctx the parse tree
   */
  exitClassMethod?: (ctx: ClassMethodContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.methodHeader`.
   * @param ctx the parse tree
   */
  enterMethodHeader?: (ctx: MethodHeaderContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.methodHeader`.
   * @param ctx the parse tree
   */
  exitMethodHeader?: (ctx: MethodHeaderContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.parameterList`.
   * @param ctx the parse tree
   */
  enterParameterList?: (ctx: ParameterListContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.parameterList`.
   * @param ctx the parse tree
   */
  exitParameterList?: (ctx: ParameterListContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.argumentList`.
   * @param ctx the parse tree
   */
  enterArgumentList?: (ctx: ArgumentListContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.argumentList`.
   * @param ctx the parse tree
   */
  exitArgumentList?: (ctx: ArgumentListContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.annotation`.
   * @param ctx the parse tree
   */
  enterAnnotation?: (ctx: AnnotationContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.annotation`.
   * @param ctx the parse tree
   */
  exitAnnotation?: (ctx: AnnotationContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.qualifiedIdentifier`.
   * @param ctx the parse tree
   */
  enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.qualifiedIdentifier`.
   * @param ctx the parse tree
   */
  exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeAnnotation`.
   * @param ctx the parse tree
   */
  enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeAnnotation`.
   * @param ctx the parse tree
   */
  exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeParameterList`.
   * @param ctx the parse tree
   */
  enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeParameterList`.
   * @param ctx the parse tree
   */
  exitTypeParameterList?: (ctx: TypeParameterListContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeParameter`.
   * @param ctx the parse tree
   */
  enterTypeParameter?: (ctx: TypeParameterContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeParameter`.
   * @param ctx the parse tree
   */
  exitTypeParameter?: (ctx: TypeParameterContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typeArgumentList`.
   * @param ctx the parse tree
   */
  enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typeArgumentList`.
   * @param ctx the parse tree
   */
  exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
  /**
   * Enter a parse tree produced by the `defaultUnionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterDefaultUnionType?: (ctx: DefaultUnionTypeContext) => void;
  /**
   * Exit a parse tree produced by the `defaultUnionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitDefaultUnionType?: (ctx: DefaultUnionTypeContext) => void;
  /**
   * Enter a parse tree produced by the `moduleType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterModuleType?: (ctx: ModuleTypeContext) => void;
  /**
   * Exit a parse tree produced by the `moduleType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitModuleType?: (ctx: ModuleTypeContext) => void;
  /**
   * Enter a parse tree produced by the `stringLiteralType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterStringLiteralType?: (ctx: StringLiteralTypeContext) => void;
  /**
   * Exit a parse tree produced by the `stringLiteralType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitStringLiteralType?: (ctx: StringLiteralTypeContext) => void;
  /**
   * Enter a parse tree produced by the `nothingType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterNothingType?: (ctx: NothingTypeContext) => void;
  /**
   * Exit a parse tree produced by the `nothingType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitNothingType?: (ctx: NothingTypeContext) => void;
  /**
   * Enter a parse tree produced by the `nullableType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterNullableType?: (ctx: NullableTypeContext) => void;
  /**
   * Exit a parse tree produced by the `nullableType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitNullableType?: (ctx: NullableTypeContext) => void;
  /**
   * Enter a parse tree produced by the `parenthesizedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
  /**
   * Exit a parse tree produced by the `parenthesizedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
  /**
   * Enter a parse tree produced by the `declaredType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterDeclaredType?: (ctx: DeclaredTypeContext) => void;
  /**
   * Exit a parse tree produced by the `declaredType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitDeclaredType?: (ctx: DeclaredTypeContext) => void;
  /**
   * Enter a parse tree produced by the `functionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterFunctionType?: (ctx: FunctionTypeContext) => void;
  /**
   * Exit a parse tree produced by the `functionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitFunctionType?: (ctx: FunctionTypeContext) => void;
  /**
   * Enter a parse tree produced by the `constrainedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterConstrainedType?: (ctx: ConstrainedTypeContext) => void;
  /**
   * Exit a parse tree produced by the `constrainedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitConstrainedType?: (ctx: ConstrainedTypeContext) => void;
  /**
   * Enter a parse tree produced by the `unknownType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterUnknownType?: (ctx: UnknownTypeContext) => void;
  /**
   * Exit a parse tree produced by the `unknownType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitUnknownType?: (ctx: UnknownTypeContext) => void;
  /**
   * Enter a parse tree produced by the `unionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  enterUnionType?: (ctx: UnionTypeContext) => void;
  /**
   * Exit a parse tree produced by the `unionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   */
  exitUnionType?: (ctx: UnionTypeContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.typedIdentifier`.
   * @param ctx the parse tree
   */
  enterTypedIdentifier?: (ctx: TypedIdentifierContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.typedIdentifier`.
   * @param ctx the parse tree
   */
  exitTypedIdentifier?: (ctx: TypedIdentifierContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.parameter`.
   * @param ctx the parse tree
   */
  enterParameter?: (ctx: ParameterContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.parameter`.
   * @param ctx the parse tree
   */
  exitParameter?: (ctx: ParameterContext) => void;
  /**
   * Enter a parse tree produced by the `newExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterNewExpr?: (ctx: NewExprContext) => void;
  /**
   * Exit a parse tree produced by the `newExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitNewExpr?: (ctx: NewExprContext) => void;
  /**
   * Enter a parse tree produced by the `thisExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterThisExpr?: (ctx: ThisExprContext) => void;
  /**
   * Exit a parse tree produced by the `thisExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitThisExpr?: (ctx: ThisExprContext) => void;
  /**
   * Enter a parse tree produced by the `pipeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterPipeExpr?: (ctx: PipeExprContext) => void;
  /**
   * Exit a parse tree produced by the `pipeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitPipeExpr?: (ctx: PipeExprContext) => void;
  /**
   * Enter a parse tree produced by the `exponentiationExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterExponentiationExpr?: (ctx: ExponentiationExprContext) => void;
  /**
   * Exit a parse tree produced by the `exponentiationExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitExponentiationExpr?: (ctx: ExponentiationExprContext) => void;
  /**
   * Enter a parse tree produced by the `subscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterSubscriptExpr?: (ctx: SubscriptExprContext) => void;
  /**
   * Exit a parse tree produced by the `subscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitSubscriptExpr?: (ctx: SubscriptExprContext) => void;
  /**
   * Enter a parse tree produced by the `unqualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterUnqualifiedAccessExpr?: (ctx: UnqualifiedAccessExprContext) => void;
  /**
   * Exit a parse tree produced by the `unqualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitUnqualifiedAccessExpr?: (ctx: UnqualifiedAccessExprContext) => void;
  /**
   * Enter a parse tree produced by the `trueLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterTrueLiteral?: (ctx: TrueLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `trueLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitTrueLiteral?: (ctx: TrueLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `additiveExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
  /**
   * Exit a parse tree produced by the `additiveExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;
  /**
   * Enter a parse tree produced by the `letExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterLetExpr?: (ctx: LetExprContext) => void;
  /**
   * Exit a parse tree produced by the `letExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitLetExpr?: (ctx: LetExprContext) => void;
  /**
   * Enter a parse tree produced by the `logicalNotExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterLogicalNotExpr?: (ctx: LogicalNotExprContext) => void;
  /**
   * Exit a parse tree produced by the `logicalNotExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitLogicalNotExpr?: (ctx: LogicalNotExprContext) => void;
  /**
   * Enter a parse tree produced by the `falseLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterFalseLiteral?: (ctx: FalseLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `falseLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitFalseLiteral?: (ctx: FalseLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `unaryMinusExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
  /**
   * Exit a parse tree produced by the `unaryMinusExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
  /**
   * Enter a parse tree produced by the `parenthesizedExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;
  /**
   * Exit a parse tree produced by the `parenthesizedExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;
  /**
   * Enter a parse tree produced by the `floatLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `floatLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitFloatLiteral?: (ctx: FloatLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `ifExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterIfExpr?: (ctx: IfExprContext) => void;
  /**
   * Exit a parse tree produced by the `ifExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitIfExpr?: (ctx: IfExprContext) => void;
  /**
   * Enter a parse tree produced by the `moduleExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterModuleExpr?: (ctx: ModuleExprContext) => void;
  /**
   * Exit a parse tree produced by the `moduleExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitModuleExpr?: (ctx: ModuleExprContext) => void;
  /**
   * Enter a parse tree produced by the `importExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterImportExpr?: (ctx: ImportExprContext) => void;
  /**
   * Exit a parse tree produced by the `importExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitImportExpr?: (ctx: ImportExprContext) => void;
  /**
   * Enter a parse tree produced by the `singleLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterSingleLineStringLiteral?: (ctx: SingleLineStringLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `singleLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitSingleLineStringLiteral?: (ctx: SingleLineStringLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `throwExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterThrowExpr?: (ctx: ThrowExprContext) => void;
  /**
   * Exit a parse tree produced by the `throwExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitThrowExpr?: (ctx: ThrowExprContext) => void;
  /**
   * Enter a parse tree produced by the `nullLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterNullLiteral?: (ctx: NullLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `nullLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitNullLiteral?: (ctx: NullLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `logicalAndExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
  /**
   * Exit a parse tree produced by the `logicalAndExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
  /**
   * Enter a parse tree produced by the `intLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterIntLiteral?: (ctx: IntLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `intLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitIntLiteral?: (ctx: IntLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `readExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterReadExpr?: (ctx: ReadExprContext) => void;
  /**
   * Exit a parse tree produced by the `readExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitReadExpr?: (ctx: ReadExprContext) => void;
  /**
   * Enter a parse tree produced by the `nullCoalesceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterNullCoalesceExpr?: (ctx: NullCoalesceExprContext) => void;
  /**
   * Exit a parse tree produced by the `nullCoalesceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitNullCoalesceExpr?: (ctx: NullCoalesceExprContext) => void;
  /**
   * Enter a parse tree produced by the `comparisonExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterComparisonExpr?: (ctx: ComparisonExprContext) => void;
  /**
   * Exit a parse tree produced by the `comparisonExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitComparisonExpr?: (ctx: ComparisonExprContext) => void;
  /**
   * Enter a parse tree produced by the `multiLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `multiLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `logicalOrExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
  /**
   * Exit a parse tree produced by the `logicalOrExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
  /**
   * Enter a parse tree produced by the `typeTestExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterTypeTestExpr?: (ctx: TypeTestExprContext) => void;
  /**
   * Exit a parse tree produced by the `typeTestExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitTypeTestExpr?: (ctx: TypeTestExprContext) => void;
  /**
   * Enter a parse tree produced by the `superSubscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterSuperSubscriptExpr?: (ctx: SuperSubscriptExprContext) => void;
  /**
   * Exit a parse tree produced by the `superSubscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitSuperSubscriptExpr?: (ctx: SuperSubscriptExprContext) => void;
  /**
   * Enter a parse tree produced by the `superAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterSuperAccessExpr?: (ctx: SuperAccessExprContext) => void;
  /**
   * Exit a parse tree produced by the `superAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitSuperAccessExpr?: (ctx: SuperAccessExprContext) => void;
  /**
   * Enter a parse tree produced by the `functionLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterFunctionLiteral?: (ctx: FunctionLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `functionLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitFunctionLiteral?: (ctx: FunctionLiteralContext) => void;
  /**
   * Enter a parse tree produced by the `outerExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterOuterExpr?: (ctx: OuterExprContext) => void;
  /**
   * Exit a parse tree produced by the `outerExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitOuterExpr?: (ctx: OuterExprContext) => void;
  /**
   * Enter a parse tree produced by the `multiplicativeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
  /**
   * Exit a parse tree produced by the `multiplicativeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
  /**
   * Enter a parse tree produced by the `qualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterQualifiedAccessExpr?: (ctx: QualifiedAccessExprContext) => void;
  /**
   * Exit a parse tree produced by the `qualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitQualifiedAccessExpr?: (ctx: QualifiedAccessExprContext) => void;
  /**
   * Enter a parse tree produced by the `traceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterTraceExpr?: (ctx: TraceExprContext) => void;
  /**
   * Exit a parse tree produced by the `traceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitTraceExpr?: (ctx: TraceExprContext) => void;
  /**
   * Enter a parse tree produced by the `equalityExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterEqualityExpr?: (ctx: EqualityExprContext) => void;
  /**
   * Exit a parse tree produced by the `equalityExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitEqualityExpr?: (ctx: EqualityExprContext) => void;
  /**
   * Enter a parse tree produced by the `amendExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterAmendExpr?: (ctx: AmendExprContext) => void;
  /**
   * Exit a parse tree produced by the `amendExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitAmendExpr?: (ctx: AmendExprContext) => void;
  /**
   * Enter a parse tree produced by the `nonNullExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  enterNonNullExpr?: (ctx: NonNullExprContext) => void;
  /**
   * Exit a parse tree produced by the `nonNullExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   */
  exitNonNullExpr?: (ctx: NonNullExprContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.objectBody`.
   * @param ctx the parse tree
   */
  enterObjectBody?: (ctx: ObjectBodyContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.objectBody`.
   * @param ctx the parse tree
   */
  exitObjectBody?: (ctx: ObjectBodyContext) => void;
  /**
   * Enter a parse tree produced by the `objectProperty`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterObjectProperty?: (ctx: ObjectPropertyContext) => void;
  /**
   * Exit a parse tree produced by the `objectProperty`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitObjectProperty?: (ctx: ObjectPropertyContext) => void;
  /**
   * Enter a parse tree produced by the `objectMethod`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterObjectMethod?: (ctx: ObjectMethodContext) => void;
  /**
   * Exit a parse tree produced by the `objectMethod`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitObjectMethod?: (ctx: ObjectMethodContext) => void;
  /**
   * Enter a parse tree produced by the `memberPredicate`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterMemberPredicate?: (ctx: MemberPredicateContext) => void;
  /**
   * Exit a parse tree produced by the `memberPredicate`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitMemberPredicate?: (ctx: MemberPredicateContext) => void;
  /**
   * Enter a parse tree produced by the `objectEntry`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterObjectEntry?: (ctx: ObjectEntryContext) => void;
  /**
   * Exit a parse tree produced by the `objectEntry`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitObjectEntry?: (ctx: ObjectEntryContext) => void;
  /**
   * Enter a parse tree produced by the `objectElement`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterObjectElement?: (ctx: ObjectElementContext) => void;
  /**
   * Exit a parse tree produced by the `objectElement`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitObjectElement?: (ctx: ObjectElementContext) => void;
  /**
   * Enter a parse tree produced by the `objectSpread`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterObjectSpread?: (ctx: ObjectSpreadContext) => void;
  /**
   * Exit a parse tree produced by the `objectSpread`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitObjectSpread?: (ctx: ObjectSpreadContext) => void;
  /**
   * Enter a parse tree produced by the `whenGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterWhenGenerator?: (ctx: WhenGeneratorContext) => void;
  /**
   * Exit a parse tree produced by the `whenGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitWhenGenerator?: (ctx: WhenGeneratorContext) => void;
  /**
   * Enter a parse tree produced by the `forGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  enterForGenerator?: (ctx: ForGeneratorContext) => void;
  /**
   * Exit a parse tree produced by the `forGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   */
  exitForGenerator?: (ctx: ForGeneratorContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.stringConstant`.
   * @param ctx the parse tree
   */
  enterStringConstant?: (ctx: StringConstantContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.stringConstant`.
   * @param ctx the parse tree
   */
  exitStringConstant?: (ctx: StringConstantContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.singleLineStringPart`.
   * @param ctx the parse tree
   */
  enterSingleLineStringPart?: (ctx: SingleLineStringPartContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.singleLineStringPart`.
   * @param ctx the parse tree
   */
  exitSingleLineStringPart?: (ctx: SingleLineStringPartContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.multiLineStringPart`.
   * @param ctx the parse tree
   */
  enterMultiLineStringPart?: (ctx: MultiLineStringPartContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.multiLineStringPart`.
   * @param ctx the parse tree
   */
  exitMultiLineStringPart?: (ctx: MultiLineStringPartContext) => void;
  /**
   * Enter a parse tree produced by `PklTsParser.reservedKeyword`.
   * @param ctx the parse tree
   */
  enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
  /**
   * Exit a parse tree produced by `PklTsParser.reservedKeyword`.
   * @param ctx the parse tree
   */
  exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
  visitTerminal(node: TerminalNode): void;
  visitErrorNode(node: ErrorNode): void;
  enterEveryRule(node: ParserRuleContext): void;
  exitEveryRule(node: ParserRuleContext): void;
}

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PklTsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class PklTsParserVisitor<
  Result,
> extends AbstractParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `PklTsParser.replInput`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReplInput?: (ctx: ReplInputContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.exprInput`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExprInput?: (ctx: ExprInputContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.module`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModule?: (ctx: ModuleContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.moduleDecl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleDecl?: (ctx: ModuleDeclContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.moduleHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleHeader?: (ctx: ModuleHeaderContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.moduleExtendsOrAmendsClause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleExtendsOrAmendsClause?: (
    ctx: ModuleExtendsOrAmendsClauseContext,
  ) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.importClause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImportClause?: (ctx: ImportClauseContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.clazz`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClazz?: (ctx: ClazzContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.classHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassHeader?: (ctx: ClassHeaderContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.modifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModifier?: (ctx: ModifierContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.classBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassBody?: (ctx: ClassBodyContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeAlias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeAlias?: (ctx: TypeAliasContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeAliasHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeAliasHeader?: (ctx: TypeAliasHeaderContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.classProperty`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassProperty?: (ctx: ClassPropertyContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.classMethod`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassMethod?: (ctx: ClassMethodContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.methodHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodHeader?: (ctx: MethodHeaderContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.parameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterList?: (ctx: ParameterListContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.argumentList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumentList?: (ctx: ArgumentListContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.annotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotation?: (ctx: AnnotationContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.qualifiedIdentifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeAnnotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeParameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameter?: (ctx: TypeParameterContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typeArgumentList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;
  /**
   * Visit a parse tree produced by the `defaultUnionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefaultUnionType?: (ctx: DefaultUnionTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `moduleType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleType?: (ctx: ModuleTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `stringLiteralType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringLiteralType?: (ctx: StringLiteralTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `nothingType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNothingType?: (ctx: NothingTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `nullableType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNullableType?: (ctx: NullableTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `parenthesizedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `declaredType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaredType?: (ctx: DeclaredTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `functionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionType?: (ctx: FunctionTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `constrainedType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstrainedType?: (ctx: ConstrainedTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `unknownType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnknownType?: (ctx: UnknownTypeContext) => Result;
  /**
   * Visit a parse tree produced by the `unionType`
   * labeled alternative in `PklTsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnionType?: (ctx: UnionTypeContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.typedIdentifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypedIdentifier?: (ctx: TypedIdentifierContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.parameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter?: (ctx: ParameterContext) => Result;
  /**
   * Visit a parse tree produced by the `newExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNewExpr?: (ctx: NewExprContext) => Result;
  /**
   * Visit a parse tree produced by the `thisExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThisExpr?: (ctx: ThisExprContext) => Result;
  /**
   * Visit a parse tree produced by the `pipeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPipeExpr?: (ctx: PipeExprContext) => Result;
  /**
   * Visit a parse tree produced by the `exponentiationExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExponentiationExpr?: (ctx: ExponentiationExprContext) => Result;
  /**
   * Visit a parse tree produced by the `subscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubscriptExpr?: (ctx: SubscriptExprContext) => Result;
  /**
   * Visit a parse tree produced by the `unqualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnqualifiedAccessExpr?: (ctx: UnqualifiedAccessExprContext) => Result;
  /**
   * Visit a parse tree produced by the `trueLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTrueLiteral?: (ctx: TrueLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `additiveExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;
  /**
   * Visit a parse tree produced by the `letExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLetExpr?: (ctx: LetExprContext) => Result;
  /**
   * Visit a parse tree produced by the `logicalNotExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalNotExpr?: (ctx: LogicalNotExprContext) => Result;
  /**
   * Visit a parse tree produced by the `falseLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFalseLiteral?: (ctx: FalseLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `unaryMinusExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => Result;
  /**
   * Visit a parse tree produced by the `parenthesizedExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => Result;
  /**
   * Visit a parse tree produced by the `floatLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `ifExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfExpr?: (ctx: IfExprContext) => Result;
  /**
   * Visit a parse tree produced by the `moduleExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleExpr?: (ctx: ModuleExprContext) => Result;
  /**
   * Visit a parse tree produced by the `importExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImportExpr?: (ctx: ImportExprContext) => Result;
  /**
   * Visit a parse tree produced by the `singleLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleLineStringLiteral?: (
    ctx: SingleLineStringLiteralContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `throwExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrowExpr?: (ctx: ThrowExprContext) => Result;
  /**
   * Visit a parse tree produced by the `nullLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNullLiteral?: (ctx: NullLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `logicalAndExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpr?: (ctx: LogicalAndExprContext) => Result;
  /**
   * Visit a parse tree produced by the `intLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntLiteral?: (ctx: IntLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `readExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReadExpr?: (ctx: ReadExprContext) => Result;
  /**
   * Visit a parse tree produced by the `nullCoalesceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNullCoalesceExpr?: (ctx: NullCoalesceExprContext) => Result;
  /**
   * Visit a parse tree produced by the `comparisonExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;
  /**
   * Visit a parse tree produced by the `multiLineStringLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `logicalOrExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpr?: (ctx: LogicalOrExprContext) => Result;
  /**
   * Visit a parse tree produced by the `typeTestExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeTestExpr?: (ctx: TypeTestExprContext) => Result;
  /**
   * Visit a parse tree produced by the `superSubscriptExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSuperSubscriptExpr?: (ctx: SuperSubscriptExprContext) => Result;
  /**
   * Visit a parse tree produced by the `superAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSuperAccessExpr?: (ctx: SuperAccessExprContext) => Result;
  /**
   * Visit a parse tree produced by the `functionLiteral`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionLiteral?: (ctx: FunctionLiteralContext) => Result;
  /**
   * Visit a parse tree produced by the `outerExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOuterExpr?: (ctx: OuterExprContext) => Result;
  /**
   * Visit a parse tree produced by the `multiplicativeExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;
  /**
   * Visit a parse tree produced by the `qualifiedAccessExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQualifiedAccessExpr?: (ctx: QualifiedAccessExprContext) => Result;
  /**
   * Visit a parse tree produced by the `traceExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTraceExpr?: (ctx: TraceExprContext) => Result;
  /**
   * Visit a parse tree produced by the `equalityExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpr?: (ctx: EqualityExprContext) => Result;
  /**
   * Visit a parse tree produced by the `amendExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAmendExpr?: (ctx: AmendExprContext) => Result;
  /**
   * Visit a parse tree produced by the `nonNullExpr`
   * labeled alternative in `PklTsParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonNullExpr?: (ctx: NonNullExprContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.objectBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectBody?: (ctx: ObjectBodyContext) => Result;
  /**
   * Visit a parse tree produced by the `objectProperty`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectProperty?: (ctx: ObjectPropertyContext) => Result;
  /**
   * Visit a parse tree produced by the `objectMethod`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectMethod?: (ctx: ObjectMethodContext) => Result;
  /**
   * Visit a parse tree produced by the `memberPredicate`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberPredicate?: (ctx: MemberPredicateContext) => Result;
  /**
   * Visit a parse tree produced by the `objectEntry`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectEntry?: (ctx: ObjectEntryContext) => Result;
  /**
   * Visit a parse tree produced by the `objectElement`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectElement?: (ctx: ObjectElementContext) => Result;
  /**
   * Visit a parse tree produced by the `objectSpread`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectSpread?: (ctx: ObjectSpreadContext) => Result;
  /**
   * Visit a parse tree produced by the `whenGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhenGenerator?: (ctx: WhenGeneratorContext) => Result;
  /**
   * Visit a parse tree produced by the `forGenerator`
   * labeled alternative in `PklTsParser.objectMember`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForGenerator?: (ctx: ForGeneratorContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.stringConstant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringConstant?: (ctx: StringConstantContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.singleLineStringPart`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleLineStringPart?: (ctx: SingleLineStringPartContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.multiLineStringPart`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiLineStringPart?: (ctx: MultiLineStringPartContext) => Result;
  /**
   * Visit a parse tree produced by `PklTsParser.reservedKeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReservedKeyword?: (ctx: ReservedKeywordContext) => Result;
}

export declare class QualifiedAccessExprContext extends ExprContext {
  readonly _type: 'QualifiedAccessExprContext';
  _t?: Token | null;
  constructor(ctx: ExprContext);
  expr(): ExprContext;
  Identifier(): antlr.TerminalNode;
  DOT(): antlr.TerminalNode | null;
  QDOT(): antlr.TerminalNode | null;
  argumentList(): ArgumentListContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class QualifiedIdentifierContext extends antlr.ParserRuleContext {
  _Identifier?: Token | null;
  _ts: antlr.Token[];
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  Identifier(): antlr.TerminalNode[];
  Identifier(i: number): antlr.TerminalNode | null;
  DOT(): antlr.TerminalNode[];
  DOT(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ReadExprContext extends ExprContext {
  readonly _type: 'ReadExprContext';
  _t?: Token | null;
  _err?: Token | null;
  constructor(ctx: ExprContext);
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext;
  READ(): antlr.TerminalNode | null;
  READ_OR_NULL(): antlr.TerminalNode | null;
  READ_GLOB(): antlr.TerminalNode | null;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ReplInputContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  EOF(): antlr.TerminalNode;
  moduleDecl(): ModuleDeclContext[];
  moduleDecl(i: number): ModuleDeclContext | null;
  importClause(): ImportClauseContext[];
  importClause(i: number): ImportClauseContext | null;
  clazz(): ClazzContext[];
  clazz(i: number): ClazzContext | null;
  typeAlias(): TypeAliasContext[];
  typeAlias(i: number): TypeAliasContext | null;
  classProperty(): ClassPropertyContext[];
  classProperty(i: number): ClassPropertyContext | null;
  classMethod(): ClassMethodContext[];
  classMethod(i: number): ClassMethodContext | null;
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ReservedKeywordContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  PROTECTED(): antlr.TerminalNode | null;
  OVERRIDE(): antlr.TerminalNode | null;
  RECORD(): antlr.TerminalNode | null;
  DELETE(): antlr.TerminalNode | null;
  CASE(): antlr.TerminalNode | null;
  SWITCH(): antlr.TerminalNode | null;
  VARARG(): antlr.TerminalNode | null;
  CONST(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class SingleLineStringLiteralContext extends ExprContext {
  readonly _type: 'SingleLineStringLiteralContext';
  _t?: Token | null;
  _t2?: Token | null;
  constructor(ctx: ExprContext);
  SLQuote(): antlr.TerminalNode;
  SLEndQuote(): antlr.TerminalNode;
  singleLineStringPart(): SingleLineStringPartContext[];
  singleLineStringPart(i: number): SingleLineStringPartContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class SingleLineStringPartContext extends antlr.ParserRuleContext {
  _e?: ExprContext;
  _SLCharacters?: Token | null;
  _ts: antlr.Token[];
  _SLCharacterEscape?: Token | null;
  _SLUnicodeEscape?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  SLInterpolation(): antlr.TerminalNode | null;
  RPAREN(): antlr.TerminalNode | null;
  expr(): ExprContext | null;
  SLCharacters(): antlr.TerminalNode[];
  SLCharacters(i: number): antlr.TerminalNode | null;
  SLCharacterEscape(): antlr.TerminalNode[];
  SLCharacterEscape(i: number): antlr.TerminalNode | null;
  SLUnicodeEscape(): antlr.TerminalNode[];
  SLUnicodeEscape(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class StringConstantContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  _SLCharacters?: Token | null;
  _ts: antlr.Token[];
  _SLCharacterEscape?: Token | null;
  _SLUnicodeEscape?: Token | null;
  _t2?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  SLQuote(): antlr.TerminalNode;
  SLEndQuote(): antlr.TerminalNode;
  SLCharacters(): antlr.TerminalNode[];
  SLCharacters(i: number): antlr.TerminalNode | null;
  SLCharacterEscape(): antlr.TerminalNode[];
  SLCharacterEscape(i: number): antlr.TerminalNode | null;
  SLUnicodeEscape(): antlr.TerminalNode[];
  SLUnicodeEscape(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

declare class StringInterpolationScope {
  parenLevel: number;
  poundLength: number;
}

export declare class StringLiteralTypeContext extends TypeContext {
  readonly _type: 'StringLiteralTypeContext';
  constructor(ctx: TypeContext);
  stringConstant(): StringConstantContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class SubscriptExprContext extends ExprContext {
  readonly _type: 'SubscriptExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: ExprContext;
  _err?: Token | null;
  constructor(ctx: ExprContext);
  expr(): ExprContext[];
  expr(i: number): ExprContext | null;
  LBRACK(): antlr.TerminalNode;
  RBRACK(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class SuperAccessExprContext extends ExprContext {
  readonly _type: 'SuperAccessExprContext';
  constructor(ctx: ExprContext);
  SUPER(): antlr.TerminalNode;
  DOT(): antlr.TerminalNode;
  Identifier(): antlr.TerminalNode;
  argumentList(): ArgumentListContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class SuperSubscriptExprContext extends ExprContext {
  readonly _type: 'SuperSubscriptExprContext';
  _t?: Token | null;
  _e?: ExprContext;
  _err?: Token | null;
  constructor(ctx: ExprContext);
  SUPER(): antlr.TerminalNode;
  LBRACK(): antlr.TerminalNode;
  expr(): ExprContext;
  RBRACK(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ThisExprContext extends ExprContext {
  readonly _type: 'ThisExprContext';
  constructor(ctx: ExprContext);
  THIS(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class ThrowExprContext extends ExprContext {
  readonly _type: 'ThrowExprContext';
  _err?: Token | null;
  constructor(ctx: ExprContext);
  THROW(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TraceExprContext extends ExprContext {
  readonly _type: 'TraceExprContext';
  _err?: Token | null;
  constructor(ctx: ExprContext);
  TRACE(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext;
  RPAREN(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TrueLiteralContext extends ExprContext {
  readonly _type: 'TrueLiteralContext';
  constructor(ctx: ExprContext);
  TRUE(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeAliasContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  typeAliasHeader(): TypeAliasHeaderContext;
  ASSIGN(): antlr.TerminalNode;
  type(): TypeContext;
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext | null;
  DocComment(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeAliasHeaderContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  TYPE_ALIAS(): antlr.TerminalNode;
  Identifier(): antlr.TerminalNode;
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext | null;
  typeParameterList(): TypeParameterListContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeAnnotationContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  COLON(): antlr.TerminalNode;
  type(): TypeContext;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeArgumentListContext extends antlr.ParserRuleContext {
  _type_?: TypeContext;
  _ts: TypeContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LT(): antlr.TerminalNode;
  type_(): TypeContext[];
  type_(i: number): TypeContext | null;
  GT(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  get ruleIndex(): number;
  copyFrom(ctx: TypeContext): void;
  get _typed():
    | DefaultUnionTypeContext
    | ModuleTypeContext
    | StringLiteralTypeContext
    | NothingTypeContext
    | NullableTypeContext
    | ParenthesizedTypeContext
    | DeclaredTypeContext
    | FunctionTypeContext
    | ConstrainedTypeContext
    | UnknownTypeContext
    | UnionTypeContext;
}

export declare class TypedIdentifierContext extends antlr.ParserRuleContext {
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  Identifier(): antlr.TerminalNode;
  typeAnnotation(): TypeAnnotationContext | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeParameterContext extends antlr.ParserRuleContext {
  _t?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  Identifier(): antlr.TerminalNode;
  IN(): antlr.TerminalNode | null;
  OUT(): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeParameterListContext extends antlr.ParserRuleContext {
  _typeParameter?: TypeParameterContext;
  _ts: TypeParameterContext[];
  _s53?: Token | null;
  _errs: antlr.Token[];
  _err?: Token | null;
  constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
  LT(): antlr.TerminalNode;
  typeParameter(): TypeParameterContext[];
  typeParameter(i: number): TypeParameterContext | null;
  GT(): antlr.TerminalNode | null;
  COMMA(): antlr.TerminalNode[];
  COMMA(i: number): antlr.TerminalNode | null;
  get ruleIndex(): number;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class TypeTestExprContext extends ExprContext {
  readonly _type: 'TypeTestExprContext';
  _l?: ExprContext;
  _t?: Token | null;
  _r?: TypeContext;
  constructor(ctx: ExprContext);
  expr(): ExprContext;
  type(): TypeContext;
  IS(): antlr.TerminalNode | null;
  AS(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class UnaryMinusExprContext extends ExprContext {
  readonly _type: 'UnaryMinusExprContext';
  constructor(ctx: ExprContext);
  MINUS(): antlr.TerminalNode;
  expr(): ExprContext;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class UnionTypeContext extends TypeContext {
  readonly _type: 'UnionTypeContext';
  _l?: TypeContext;
  _r?: TypeContext;
  constructor(ctx: TypeContext);
  UNION(): antlr.TerminalNode;
  type_(): TypeContext[];
  type_(i: number): TypeContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class UnknownTypeContext extends TypeContext {
  readonly _type: 'UnknownTypeContext';
  constructor(ctx: TypeContext);
  UNKNOWN(): antlr.TerminalNode;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class UnqualifiedAccessExprContext extends ExprContext {
  readonly _type: 'UnqualifiedAccessExprContext';
  constructor(ctx: ExprContext);
  Identifier(): antlr.TerminalNode;
  argumentList(): ArgumentListContext | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export declare class WhenGeneratorContext extends ObjectMemberContext {
  readonly _type: 'WhenGeneratorContext';
  _e?: ExprContext;
  _err?: Token | null;
  _b1?: ObjectBodyContext;
  _b2?: ObjectBodyContext;
  constructor(ctx: ObjectMemberContext);
  WHEN(): antlr.TerminalNode;
  LPAREN(): antlr.TerminalNode;
  expr(): ExprContext;
  objectBody(): ObjectBodyContext[];
  objectBody(i: number): ObjectBodyContext | null;
  RPAREN(): antlr.TerminalNode | null;
  ELSE(): antlr.TerminalNode | null;
  enterRule(listener: PklTsParserListener): void;
  exitRule(listener: PklTsParserListener): void;
  accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null;
}

export {};

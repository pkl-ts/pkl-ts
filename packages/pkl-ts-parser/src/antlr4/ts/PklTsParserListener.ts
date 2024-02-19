// Generated from ./src/antlr4/PklTsParser.g4 by ANTLR 4.13.1

import {
  ErrorNode,
  ParseTreeListener,
  ParserRuleContext,
  TerminalNode,
} from 'antlr4ng';

import { PklTsLexer } from './PklTsLexer';

import { ReplInputContext } from './PklTsParser.js';
import { ExprInputContext } from './PklTsParser.js';
import { ModuleContext } from './PklTsParser.js';
import { ModuleDeclContext } from './PklTsParser.js';
import { ModuleHeaderContext } from './PklTsParser.js';
import { ModuleExtendsOrAmendsClauseContext } from './PklTsParser.js';
import { ImportClauseContext } from './PklTsParser.js';
import { ClazzContext } from './PklTsParser.js';
import { ClassHeaderContext } from './PklTsParser.js';
import { ModifierContext } from './PklTsParser.js';
import { ClassBodyContext } from './PklTsParser.js';
import { TypeAliasContext } from './PklTsParser.js';
import { TypeAliasHeaderContext } from './PklTsParser.js';
import { ClassPropertyContext } from './PklTsParser.js';
import { ClassMethodContext } from './PklTsParser.js';
import { MethodHeaderContext } from './PklTsParser.js';
import { ParameterListContext } from './PklTsParser.js';
import { ArgumentListContext } from './PklTsParser.js';
import { AnnotationContext } from './PklTsParser.js';
import { QualifiedIdentifierContext } from './PklTsParser.js';
import { TypeAnnotationContext } from './PklTsParser.js';
import { TypeParameterListContext } from './PklTsParser.js';
import { TypeParameterContext } from './PklTsParser.js';
import { TypeArgumentListContext } from './PklTsParser.js';
import { DefaultUnionTypeContext } from './PklTsParser.js';
import { ModuleTypeContext } from './PklTsParser.js';
import { StringLiteralTypeContext } from './PklTsParser.js';
import { NothingTypeContext } from './PklTsParser.js';
import { NullableTypeContext } from './PklTsParser.js';
import { ParenthesizedTypeContext } from './PklTsParser.js';
import { DeclaredTypeContext } from './PklTsParser.js';
import { FunctionTypeContext } from './PklTsParser.js';
import { ConstrainedTypeContext } from './PklTsParser.js';
import { UnknownTypeContext } from './PklTsParser.js';
import { UnionTypeContext } from './PklTsParser.js';
import { TypedIdentifierContext } from './PklTsParser.js';
import { ParameterContext } from './PklTsParser.js';
import { NewExprContext } from './PklTsParser.js';
import { ThisExprContext } from './PklTsParser.js';
import { PipeExprContext } from './PklTsParser.js';
import { ExponentiationExprContext } from './PklTsParser.js';
import { SubscriptExprContext } from './PklTsParser.js';
import { UnqualifiedAccessExprContext } from './PklTsParser.js';
import { TrueLiteralContext } from './PklTsParser.js';
import { AdditiveExprContext } from './PklTsParser.js';
import { LetExprContext } from './PklTsParser.js';
import { LogicalNotExprContext } from './PklTsParser.js';
import { FalseLiteralContext } from './PklTsParser.js';
import { UnaryMinusExprContext } from './PklTsParser.js';
import { ParenthesizedExprContext } from './PklTsParser.js';
import { FloatLiteralContext } from './PklTsParser.js';
import { IfExprContext } from './PklTsParser.js';
import { ModuleExprContext } from './PklTsParser.js';
import { ImportExprContext } from './PklTsParser.js';
import { SingleLineStringLiteralContext } from './PklTsParser.js';
import { ThrowExprContext } from './PklTsParser.js';
import { NullLiteralContext } from './PklTsParser.js';
import { LogicalAndExprContext } from './PklTsParser.js';
import { IntLiteralContext } from './PklTsParser.js';
import { ReadExprContext } from './PklTsParser.js';
import { NullCoalesceExprContext } from './PklTsParser.js';
import { ComparisonExprContext } from './PklTsParser.js';
import { MultiLineStringLiteralContext } from './PklTsParser.js';
import { LogicalOrExprContext } from './PklTsParser.js';
import { TypeTestExprContext } from './PklTsParser.js';
import { SuperSubscriptExprContext } from './PklTsParser.js';
import { SuperAccessExprContext } from './PklTsParser.js';
import { FunctionLiteralContext } from './PklTsParser.js';
import { OuterExprContext } from './PklTsParser.js';
import { MultiplicativeExprContext } from './PklTsParser.js';
import { QualifiedAccessExprContext } from './PklTsParser.js';
import { TraceExprContext } from './PklTsParser.js';
import { EqualityExprContext } from './PklTsParser.js';
import { AmendExprContext } from './PklTsParser.js';
import { NonNullExprContext } from './PklTsParser.js';
import { ObjectBodyContext } from './PklTsParser.js';
import { ObjectPropertyContext } from './PklTsParser.js';
import { ObjectMethodContext } from './PklTsParser.js';
import { MemberPredicateContext } from './PklTsParser.js';
import { ObjectEntryContext } from './PklTsParser.js';
import { ObjectElementContext } from './PklTsParser.js';
import { ObjectSpreadContext } from './PklTsParser.js';
import { WhenGeneratorContext } from './PklTsParser.js';
import { ForGeneratorContext } from './PklTsParser.js';
import { StringConstantContext } from './PklTsParser.js';
import { SingleLineStringPartContext } from './PklTsParser.js';
import { MultiLineStringPartContext } from './PklTsParser.js';
import { ReservedKeywordContext } from './PklTsParser.js';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `PklTsParser`.
 */
export class PklTsParserListener implements ParseTreeListener {
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

  visitTerminal(node: TerminalNode): void {}
  visitErrorNode(node: ErrorNode): void {}
  enterEveryRule(node: ParserRuleContext): void {}
  exitEveryRule(node: ParserRuleContext): void {}
}

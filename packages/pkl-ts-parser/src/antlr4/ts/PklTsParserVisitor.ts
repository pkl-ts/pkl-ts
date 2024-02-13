// Generated from ./src/antlr4/PklTsParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { PklTsLexer } from './PklTsLexer';


import { ReplInputContext } from "./PklTsParser.js";
import { ExprInputContext } from "./PklTsParser.js";
import { ModuleContext } from "./PklTsParser.js";
import { ModuleDeclContext } from "./PklTsParser.js";
import { ModuleHeaderContext } from "./PklTsParser.js";
import { ModuleExtendsOrAmendsClauseContext } from "./PklTsParser.js";
import { ImportClauseContext } from "./PklTsParser.js";
import { ClazzContext } from "./PklTsParser.js";
import { ClassHeaderContext } from "./PklTsParser.js";
import { ModifierContext } from "./PklTsParser.js";
import { ClassBodyContext } from "./PklTsParser.js";
import { TypeAliasContext } from "./PklTsParser.js";
import { TypeAliasHeaderContext } from "./PklTsParser.js";
import { ClassPropertyContext } from "./PklTsParser.js";
import { ClassMethodContext } from "./PklTsParser.js";
import { MethodHeaderContext } from "./PklTsParser.js";
import { ParameterListContext } from "./PklTsParser.js";
import { ArgumentListContext } from "./PklTsParser.js";
import { AnnotationContext } from "./PklTsParser.js";
import { QualifiedIdentifierContext } from "./PklTsParser.js";
import { TypeAnnotationContext } from "./PklTsParser.js";
import { TypeParameterListContext } from "./PklTsParser.js";
import { TypeParameterContext } from "./PklTsParser.js";
import { TypeArgumentListContext } from "./PklTsParser.js";
import { DefaultUnionTypeContext } from "./PklTsParser.js";
import { ModuleTypeContext } from "./PklTsParser.js";
import { StringLiteralTypeContext } from "./PklTsParser.js";
import { NothingTypeContext } from "./PklTsParser.js";
import { NullableTypeContext } from "./PklTsParser.js";
import { ParenthesizedTypeContext } from "./PklTsParser.js";
import { DeclaredTypeContext } from "./PklTsParser.js";
import { FunctionTypeContext } from "./PklTsParser.js";
import { ConstrainedTypeContext } from "./PklTsParser.js";
import { UnknownTypeContext } from "./PklTsParser.js";
import { UnionTypeContext } from "./PklTsParser.js";
import { TypedIdentifierContext } from "./PklTsParser.js";
import { ParameterContext } from "./PklTsParser.js";
import { NewExprContext } from "./PklTsParser.js";
import { ThisExprContext } from "./PklTsParser.js";
import { PipeExprContext } from "./PklTsParser.js";
import { ExponentiationExprContext } from "./PklTsParser.js";
import { SubscriptExprContext } from "./PklTsParser.js";
import { UnqualifiedAccessExprContext } from "./PklTsParser.js";
import { TrueLiteralContext } from "./PklTsParser.js";
import { AdditiveExprContext } from "./PklTsParser.js";
import { LetExprContext } from "./PklTsParser.js";
import { LogicalNotExprContext } from "./PklTsParser.js";
import { FalseLiteralContext } from "./PklTsParser.js";
import { UnaryMinusExprContext } from "./PklTsParser.js";
import { ParenthesizedExprContext } from "./PklTsParser.js";
import { FloatLiteralContext } from "./PklTsParser.js";
import { IfExprContext } from "./PklTsParser.js";
import { ModuleExprContext } from "./PklTsParser.js";
import { ImportExprContext } from "./PklTsParser.js";
import { SingleLineStringLiteralContext } from "./PklTsParser.js";
import { ThrowExprContext } from "./PklTsParser.js";
import { NullLiteralContext } from "./PklTsParser.js";
import { LogicalAndExprContext } from "./PklTsParser.js";
import { IntLiteralContext } from "./PklTsParser.js";
import { ReadExprContext } from "./PklTsParser.js";
import { NullCoalesceExprContext } from "./PklTsParser.js";
import { ComparisonExprContext } from "./PklTsParser.js";
import { MultiLineStringLiteralContext } from "./PklTsParser.js";
import { LogicalOrExprContext } from "./PklTsParser.js";
import { TypeTestExprContext } from "./PklTsParser.js";
import { SuperSubscriptExprContext } from "./PklTsParser.js";
import { SuperAccessExprContext } from "./PklTsParser.js";
import { FunctionLiteralContext } from "./PklTsParser.js";
import { OuterExprContext } from "./PklTsParser.js";
import { MultiplicativeExprContext } from "./PklTsParser.js";
import { QualifiedAccessExprContext } from "./PklTsParser.js";
import { TraceExprContext } from "./PklTsParser.js";
import { EqualityExprContext } from "./PklTsParser.js";
import { AmendExprContext } from "./PklTsParser.js";
import { NonNullExprContext } from "./PklTsParser.js";
import { ObjectBodyContext } from "./PklTsParser.js";
import { ObjectPropertyContext } from "./PklTsParser.js";
import { ObjectMethodContext } from "./PklTsParser.js";
import { MemberPredicateContext } from "./PklTsParser.js";
import { ObjectEntryContext } from "./PklTsParser.js";
import { ObjectElementContext } from "./PklTsParser.js";
import { ObjectSpreadContext } from "./PklTsParser.js";
import { WhenGeneratorContext } from "./PklTsParser.js";
import { ForGeneratorContext } from "./PklTsParser.js";
import { StringConstantContext } from "./PklTsParser.js";
import { SingleLineStringPartContext } from "./PklTsParser.js";
import { MultiLineStringPartContext } from "./PklTsParser.js";
import { ReservedKeywordContext } from "./PklTsParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PklTsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PklTsParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
    visitModuleExtendsOrAmendsClause?: (ctx: ModuleExtendsOrAmendsClauseContext) => Result;
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
    visitSingleLineStringLiteral?: (ctx: SingleLineStringLiteralContext) => Result;
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


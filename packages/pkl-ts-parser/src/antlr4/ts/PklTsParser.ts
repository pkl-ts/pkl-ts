// Generated from ./src/antlr4/PklTsParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { PklTsParserListener } from "./PklTsParserListener.js";
import { PklTsParserVisitor } from "./PklTsParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { PklTsLexer } from './PklTsLexer';


export class PklTsParser extends antlr.Parser {
    public static readonly ABSTRACT = 1;
    public static readonly AMENDS = 2;
    public static readonly AS = 3;
    public static readonly CLASS = 4;
    public static readonly CONST = 5;
    public static readonly ELSE = 6;
    public static readonly EXTENDS = 7;
    public static readonly EXTERNAL = 8;
    public static readonly FALSE = 9;
    public static readonly FIXED = 10;
    public static readonly FOR = 11;
    public static readonly FUNCTION = 12;
    public static readonly HIDDEN_ = 13;
    public static readonly IF = 14;
    public static readonly IMPORT = 15;
    public static readonly IMPORT_GLOB = 16;
    public static readonly IN = 17;
    public static readonly IS = 18;
    public static readonly LET = 19;
    public static readonly LOCAL = 20;
    public static readonly MODULE = 21;
    public static readonly NEW = 22;
    public static readonly NOTHING = 23;
    public static readonly NULL = 24;
    public static readonly OPEN = 25;
    public static readonly OUT = 26;
    public static readonly OUTER = 27;
    public static readonly READ = 28;
    public static readonly READ_GLOB = 29;
    public static readonly READ_OR_NULL = 30;
    public static readonly SUPER = 31;
    public static readonly THIS = 32;
    public static readonly THROW = 33;
    public static readonly TRACE = 34;
    public static readonly TRUE = 35;
    public static readonly TYPE_ALIAS = 36;
    public static readonly UNKNOWN = 37;
    public static readonly WHEN = 38;
    public static readonly PROTECTED = 39;
    public static readonly OVERRIDE = 40;
    public static readonly RECORD = 41;
    public static readonly DELETE = 42;
    public static readonly CASE = 43;
    public static readonly SWITCH = 44;
    public static readonly VARARG = 45;
    public static readonly LPAREN = 46;
    public static readonly RPAREN = 47;
    public static readonly LBRACE = 48;
    public static readonly RBRACE = 49;
    public static readonly LBRACK = 50;
    public static readonly RBRACK = 51;
    public static readonly LPRED = 52;
    public static readonly COMMA = 53;
    public static readonly DOT = 54;
    public static readonly QDOT = 55;
    public static readonly COALESCE = 56;
    public static readonly NON_NULL = 57;
    public static readonly AT = 58;
    public static readonly ASSIGN = 59;
    public static readonly GT = 60;
    public static readonly LT = 61;
    public static readonly NOT = 62;
    public static readonly QUESTION = 63;
    public static readonly COLON = 64;
    public static readonly ARROW = 65;
    public static readonly EQUAL = 66;
    public static readonly NOT_EQUAL = 67;
    public static readonly LTE = 68;
    public static readonly GTE = 69;
    public static readonly AND = 70;
    public static readonly OR = 71;
    public static readonly PLUS = 72;
    public static readonly MINUS = 73;
    public static readonly POW = 74;
    public static readonly STAR = 75;
    public static readonly DIV = 76;
    public static readonly INT_DIV = 77;
    public static readonly MOD = 78;
    public static readonly UNION = 79;
    public static readonly PIPE = 80;
    public static readonly SPREAD = 81;
    public static readonly QSPREAD = 82;
    public static readonly UNDERSCORE = 83;
    public static readonly SLQuote = 84;
    public static readonly MLQuote = 85;
    public static readonly IntLiteral = 86;
    public static readonly FloatLiteral = 87;
    public static readonly Identifier = 88;
    public static readonly NewlineSemicolon = 89;
    public static readonly Whitespace = 90;
    public static readonly DocComment = 91;
    public static readonly BlockComment = 92;
    public static readonly LineComment = 93;
    public static readonly ShebangComment = 94;
    public static readonly SLEndQuote = 95;
    public static readonly SLInterpolation = 96;
    public static readonly SLUnicodeEscape = 97;
    public static readonly SLCharacterEscape = 98;
    public static readonly SLCharacters = 99;
    public static readonly MLEndQuote = 100;
    public static readonly MLInterpolation = 101;
    public static readonly MLUnicodeEscape = 102;
    public static readonly MLCharacterEscape = 103;
    public static readonly MLNewline = 104;
    public static readonly MLCharacters = 105;
    public static readonly RULE_replInput = 0;
    public static readonly RULE_exprInput = 1;
    public static readonly RULE_module = 2;
    public static readonly RULE_moduleDecl = 3;
    public static readonly RULE_moduleHeader = 4;
    public static readonly RULE_moduleExtendsOrAmendsClause = 5;
    public static readonly RULE_importClause = 6;
    public static readonly RULE_clazz = 7;
    public static readonly RULE_classHeader = 8;
    public static readonly RULE_modifier = 9;
    public static readonly RULE_classBody = 10;
    public static readonly RULE_typeAlias = 11;
    public static readonly RULE_typeAliasHeader = 12;
    public static readonly RULE_classProperty = 13;
    public static readonly RULE_classMethod = 14;
    public static readonly RULE_methodHeader = 15;
    public static readonly RULE_parameterList = 16;
    public static readonly RULE_argumentList = 17;
    public static readonly RULE_annotation = 18;
    public static readonly RULE_qualifiedIdentifier = 19;
    public static readonly RULE_typeAnnotation = 20;
    public static readonly RULE_typeParameterList = 21;
    public static readonly RULE_typeParameter = 22;
    public static readonly RULE_typeArgumentList = 23;
    public static readonly RULE_type = 24;
    public static readonly RULE_typedIdentifier = 25;
    public static readonly RULE_parameter = 26;
    public static readonly RULE_expr = 27;
    public static readonly RULE_objectBody = 28;
    public static readonly RULE_objectMember = 29;
    public static readonly RULE_stringConstant = 30;
    public static readonly RULE_singleLineStringPart = 31;
    public static readonly RULE_multiLineStringPart = 32;
    public static readonly RULE_reservedKeyword = 33;

    public static readonly literalNames = [
        null, "'abstract'", "'amends'", "'as'", "'class'", "'const'", "'else'", 
        "'extends'", "'external'", "'false'", "'fixed'", "'for'", "'function'", 
        "'hidden'", "'if'", "'import'", "'import*'", "'in'", "'is'", "'let'", 
        "'local'", "'module'", "'new'", "'nothing'", "'null'", "'open'", 
        "'out'", "'outer'", "'read'", "'read*'", "'read?'", "'super'", "'this'", 
        "'throw'", "'trace'", "'true'", "'typealias'", "'unknown'", "'when'", 
        "'protected'", "'override'", "'record'", "'delete'", "'case'", "'switch'", 
        "'vararg'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'[['", "','", 
        "'.'", "'?.'", "'??'", "'!!'", "'@'", "'='", "'>'", "'<'", "'!'", 
        "'?'", "':'", "'->'", "'=='", "'!='", "'<='", "'>='", "'&&'", "'||'", 
        "'+'", "'-'", "'**'", "'*'", "'/'", "'~/'", "'%'", "'|'", "'|>'", 
        "'...'", "'...?'", "'_'"
    ];

    public static readonly symbolicNames = [
        null, "ABSTRACT", "AMENDS", "AS", "CLASS", "CONST", "ELSE", "EXTENDS", 
        "EXTERNAL", "FALSE", "FIXED", "FOR", "FUNCTION", "HIDDEN_", "IF", 
        "IMPORT", "IMPORT_GLOB", "IN", "IS", "LET", "LOCAL", "MODULE", "NEW", 
        "NOTHING", "NULL", "OPEN", "OUT", "OUTER", "READ", "READ_GLOB", 
        "READ_OR_NULL", "SUPER", "THIS", "THROW", "TRACE", "TRUE", "TYPE_ALIAS", 
        "UNKNOWN", "WHEN", "PROTECTED", "OVERRIDE", "RECORD", "DELETE", 
        "CASE", "SWITCH", "VARARG", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "LPRED", "COMMA", "DOT", "QDOT", "COALESCE", 
        "NON_NULL", "AT", "ASSIGN", "GT", "LT", "NOT", "QUESTION", "COLON", 
        "ARROW", "EQUAL", "NOT_EQUAL", "LTE", "GTE", "AND", "OR", "PLUS", 
        "MINUS", "POW", "STAR", "DIV", "INT_DIV", "MOD", "UNION", "PIPE", 
        "SPREAD", "QSPREAD", "UNDERSCORE", "SLQuote", "MLQuote", "IntLiteral", 
        "FloatLiteral", "Identifier", "NewlineSemicolon", "Whitespace", 
        "DocComment", "BlockComment", "LineComment", "ShebangComment", "SLEndQuote", 
        "SLInterpolation", "SLUnicodeEscape", "SLCharacterEscape", "SLCharacters", 
        "MLEndQuote", "MLInterpolation", "MLUnicodeEscape", "MLCharacterEscape", 
        "MLNewline", "MLCharacters"
    ];
    public static readonly ruleNames = [
        "replInput", "exprInput", "module", "moduleDecl", "moduleHeader", 
        "moduleExtendsOrAmendsClause", "importClause", "clazz", "classHeader", 
        "modifier", "classBody", "typeAlias", "typeAliasHeader", "classProperty", 
        "classMethod", "methodHeader", "parameterList", "argumentList", 
        "annotation", "qualifiedIdentifier", "typeAnnotation", "typeParameterList", 
        "typeParameter", "typeArgumentList", "type", "typedIdentifier", 
        "parameter", "expr", "objectBody", "objectMember", "stringConstant", 
        "singleLineStringPart", "multiLineStringPart", "reservedKeyword",
    ];

    public get grammarFileName(): string { return "PklTsParser.g4"; }
    public get literalNames(): (string | null)[] { return PklTsParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return PklTsParser.symbolicNames; }
    public get ruleNames(): string[] { return PklTsParser.ruleNames; }
    public get serializedATN(): number[] { return PklTsParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }


      /**
       * Returns true if and only if the next token to be consumed is not preceded by a newline or semicolon.
       */
      noNewlineOrSemicolon(): boolean {
        for (let i = this.inputStream.index - 1; i >= 0; i--) {
          let token = this.inputStream.get(i);
          let channel = token.channel;
          if (channel === PklTsLexer.DEFAULT_TOKEN_CHANNEL) return true;
          if (channel === PklTsLexer.NewlineSemicolonChannel) return false;
        }
        return true;
      }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, PklTsParser._ATN, PklTsParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public replInput(): ReplInputContext {
        let localContext = new ReplInputContext(this.context, this.state);
        this.enterRule(localContext, 0, PklTsParser.RULE_replInput);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4219074486) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1140867103) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 325633) !== 0)) {
                {
                {
                this.state = 75;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 68;
                    this.moduleDecl();
                    }
                    break;
                case 2:
                    {
                    this.state = 69;
                    this.importClause();
                    }
                    break;
                case 3:
                    {
                    this.state = 70;
                    this.clazz();
                    }
                    break;
                case 4:
                    {
                    this.state = 71;
                    this.typeAlias();
                    }
                    break;
                case 5:
                    {
                    this.state = 72;
                    this.classProperty();
                    }
                    break;
                case 6:
                    {
                    this.state = 73;
                    this.classMethod();
                    }
                    break;
                case 7:
                    {
                    this.state = 74;
                    this.expr(0);
                    }
                    break;
                }
                }
                }
                this.state = 81;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 82;
            this.match(PklTsParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprInput(): ExprInputContext {
        let localContext = new ExprInputContext(this.context, this.state);
        this.enterRule(localContext, 2, PklTsParser.RULE_exprInput);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 84;
            this.expr(0);
            this.state = 85;
            this.match(PklTsParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_(): ModuleContext {
        let localContext = new ModuleContext(this.context, this.state);
        this.enterRule(localContext, 4, PklTsParser.RULE_module);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 88;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 87;
                this.moduleDecl();
                }
                break;
            }
            this.state = 93;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15 || _la === 16) {
                {
                {
                this.state = 90;
                localContext._importClause = this.importClause();
                localContext._is.push(localContext._importClause);
                }
                }
                this.state = 95;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 104;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34616626) !== 0) || _la === 36 || _la === 58 || _la === 88 || _la === 91) {
                {
                {
                this.state = 100;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                case 1:
                    {
                    this.state = 96;
                    localContext._clazz = this.clazz();
                    localContext._cs.push(localContext._clazz);
                    }
                    break;
                case 2:
                    {
                    this.state = 97;
                    localContext._typeAlias = this.typeAlias();
                    localContext._ts.push(localContext._typeAlias);
                    }
                    break;
                case 3:
                    {
                    this.state = 98;
                    localContext._classProperty = this.classProperty();
                    localContext._ps.push(localContext._classProperty);
                    }
                    break;
                case 4:
                    {
                    this.state = 99;
                    localContext._classMethod = this.classMethod();
                    localContext._ms.push(localContext._classMethod);
                    }
                    break;
                }
                }
                }
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 107;
            this.match(PklTsParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleDecl(): ModuleDeclContext {
        let localContext = new ModuleDeclContext(this.context, this.state);
        this.enterRule(localContext, 6, PklTsParser.RULE_moduleDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 109;
                localContext._t = this.match(PklTsParser.DocComment);
                }
            }

            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 112;
                this.annotation();
                }
                }
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 118;
            this.moduleHeader();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleHeader(): ModuleHeaderContext {
        let localContext = new ModuleHeaderContext(this.context, this.state);
        this.enterRule(localContext, 8, PklTsParser.RULE_moduleHeader);
        let _la: number;
        try {
            this.state = 132;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PklTsParser.ABSTRACT:
            case PklTsParser.CONST:
            case PklTsParser.EXTERNAL:
            case PklTsParser.FIXED:
            case PklTsParser.HIDDEN_:
            case PklTsParser.LOCAL:
            case PklTsParser.MODULE:
            case PklTsParser.OPEN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 123;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                    {
                    {
                    this.state = 120;
                    this.modifier();
                    }
                    }
                    this.state = 125;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 126;
                this.match(PklTsParser.MODULE);
                this.state = 127;
                this.qualifiedIdentifier();
                this.state = 129;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 128;
                    this.moduleExtendsOrAmendsClause();
                    }
                    break;
                }
                }
                break;
            case PklTsParser.AMENDS:
            case PklTsParser.EXTENDS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 131;
                this.moduleExtendsOrAmendsClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleExtendsOrAmendsClause(): ModuleExtendsOrAmendsClauseContext {
        let localContext = new ModuleExtendsOrAmendsClauseContext(this.context, this.state);
        this.enterRule(localContext, 10, PklTsParser.RULE_moduleExtendsOrAmendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            localContext._t = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 7)) {
                localContext._t = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 135;
            this.stringConstant();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importClause(): ImportClauseContext {
        let localContext = new ImportClauseContext(this.context, this.state);
        this.enterRule(localContext, 12, PklTsParser.RULE_importClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            localContext._t = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 15 || _la === 16)) {
                localContext._t = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 138;
            this.stringConstant();
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 139;
                this.match(PklTsParser.AS);
                this.state = 140;
                this.match(PklTsParser.Identifier);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clazz(): ClazzContext {
        let localContext = new ClazzContext(this.context, this.state);
        this.enterRule(localContext, 14, PklTsParser.RULE_clazz);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 143;
                localContext._t = this.match(PklTsParser.DocComment);
                }
            }

            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 146;
                this.annotation();
                }
                }
                this.state = 151;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 152;
            this.classHeader();
            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 153;
                this.classBody();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classHeader(): ClassHeaderContext {
        let localContext = new ClassHeaderContext(this.context, this.state);
        this.enterRule(localContext, 16, PklTsParser.RULE_classHeader);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                {
                {
                this.state = 156;
                this.modifier();
                }
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 162;
            this.match(PklTsParser.CLASS);
            this.state = 163;
            this.match(PklTsParser.Identifier);
            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 61) {
                {
                this.state = 164;
                this.typeParameterList();
                }
            }

            this.state = 169;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                {
                this.state = 167;
                this.match(PklTsParser.EXTENDS);
                this.state = 168;
                this.type_(0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier(): ModifierContext {
        let localContext = new ModifierContext(this.context, this.state);
        this.enterRule(localContext, 18, PklTsParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            localContext._t = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0))) {
                localContext._t = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classBody(): ClassBodyContext {
        let localContext = new ClassBodyContext(this.context, this.state);
        this.enterRule(localContext, 20, PklTsParser.RULE_classBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 173;
            this.match(PklTsParser.LBRACE);
            this.state = 180;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 176;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
                    case 1:
                        {
                        this.state = 174;
                        localContext._classProperty = this.classProperty();
                        localContext._ps.push(localContext._classProperty);
                        }
                        break;
                    case 2:
                        {
                        this.state = 175;
                        localContext._classMethod = this.classMethod();
                        localContext._ms.push(localContext._classMethod);
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 182;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 183;
                localContext._err = this.match(PklTsParser.RBRACE);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAlias(): TypeAliasContext {
        let localContext = new TypeAliasContext(this.context, this.state);
        this.enterRule(localContext, 22, PklTsParser.RULE_typeAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 186;
                localContext._t = this.match(PklTsParser.DocComment);
                }
            }

            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 189;
                this.annotation();
                }
                }
                this.state = 194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 195;
            this.typeAliasHeader();
            this.state = 196;
            this.match(PklTsParser.ASSIGN);
            this.state = 197;
            this.type_(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAliasHeader(): TypeAliasHeaderContext {
        let localContext = new TypeAliasHeaderContext(this.context, this.state);
        this.enterRule(localContext, 24, PklTsParser.RULE_typeAliasHeader);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                {
                {
                this.state = 199;
                this.modifier();
                }
                }
                this.state = 204;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 205;
            this.match(PklTsParser.TYPE_ALIAS);
            this.state = 206;
            this.match(PklTsParser.Identifier);
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 61) {
                {
                this.state = 207;
                this.typeParameterList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classProperty(): ClassPropertyContext {
        let localContext = new ClassPropertyContext(this.context, this.state);
        this.enterRule(localContext, 26, PklTsParser.RULE_classProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 210;
                localContext._t = this.match(PklTsParser.DocComment);
                }
            }

            this.state = 216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 213;
                this.annotation();
                }
                }
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                {
                {
                this.state = 219;
                this.modifier();
                }
                }
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 225;
            this.match(PklTsParser.Identifier);
            this.state = 239;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                {
                this.state = 226;
                this.typeAnnotation();
                }
                break;
            case 2:
                {
                this.state = 228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 227;
                    this.typeAnnotation();
                    }
                }

                this.state = 237;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PklTsParser.ASSIGN:
                    {
                    this.state = 230;
                    this.match(PklTsParser.ASSIGN);
                    this.state = 231;
                    this.expr(0);
                    }
                    break;
                case PklTsParser.LBRACE:
                    {
                    this.state = 233;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 232;
                        this.objectBody();
                        }
                        }
                        this.state = 235;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 48);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classMethod(): ClassMethodContext {
        let localContext = new ClassMethodContext(this.context, this.state);
        this.enterRule(localContext, 28, PklTsParser.RULE_classMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 241;
                localContext._t = this.match(PklTsParser.DocComment);
                }
            }

            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 244;
                this.annotation();
                }
                }
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 250;
            this.methodHeader();
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 251;
                this.match(PklTsParser.ASSIGN);
                this.state = 252;
                this.expr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodHeader(): MethodHeaderContext {
        let localContext = new MethodHeaderContext(this.context, this.state);
        this.enterRule(localContext, 30, PklTsParser.RULE_methodHeader);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                {
                {
                this.state = 255;
                this.modifier();
                }
                }
                this.state = 260;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 261;
            this.match(PklTsParser.FUNCTION);
            this.state = 262;
            this.match(PklTsParser.Identifier);
            this.state = 264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 61) {
                {
                this.state = 263;
                this.typeParameterList();
                }
            }

            this.state = 266;
            this.parameterList();
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 267;
                this.typeAnnotation();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 32, PklTsParser.RULE_parameterList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 270;
            this.match(PklTsParser.LPAREN);
            this.state = 281;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                {
                this.state = 271;
                localContext._parameter = this.parameter();
                localContext._ts.push(localContext._parameter);
                this.state = 278;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 273;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 53) {
                            {
                            this.state = 272;
                            localContext._s53 = this.match(PklTsParser.COMMA);
                            localContext._errs.push(localContext._s53);
                            }
                        }

                        this.state = 275;
                        localContext._parameter = this.parameter();
                        localContext._ts.push(localContext._parameter);
                        }
                        }
                    }
                    this.state = 280;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
                }
                }
                break;
            }
            this.state = 284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 283;
                localContext._err = this.match(PklTsParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 34, PklTsParser.RULE_argumentList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            if (!(this.noNewlineOrSemicolon())) {
                throw this.createFailedPredicateException("this.noNewlineOrSemicolon()");
            }
            this.state = 287;
            this.match(PklTsParser.LPAREN);
            this.state = 298;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                {
                this.state = 288;
                localContext._expr = this.expr(0);
                localContext._es.push(localContext._expr);
                this.state = 295;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 290;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 53) {
                            {
                            this.state = 289;
                            localContext._s53 = this.match(PklTsParser.COMMA);
                            localContext._errs.push(localContext._s53);
                            }
                        }

                        this.state = 292;
                        localContext._expr = this.expr(0);
                        localContext._es.push(localContext._expr);
                        }
                        }
                    }
                    this.state = 297;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                }
                }
                break;
            }
            this.state = 301;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 300;
                localContext._err = this.match(PklTsParser.RPAREN);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotation(): AnnotationContext {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 36, PklTsParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.match(PklTsParser.AT);
            this.state = 304;
            this.type_(0);
            this.state = 306;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 305;
                this.objectBody();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedIdentifier(): QualifiedIdentifierContext {
        let localContext = new QualifiedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 38, PklTsParser.RULE_qualifiedIdentifier);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 308;
            localContext._Identifier = this.match(PklTsParser.Identifier);
            localContext._ts.push(localContext._Identifier);
            this.state = 313;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 309;
                    this.match(PklTsParser.DOT);
                    this.state = 310;
                    localContext._Identifier = this.match(PklTsParser.Identifier);
                    localContext._ts.push(localContext._Identifier);
                    }
                    }
                }
                this.state = 315;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAnnotation(): TypeAnnotationContext {
        let localContext = new TypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 40, PklTsParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.match(PklTsParser.COLON);
            this.state = 317;
            this.type_(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameterList(): TypeParameterListContext {
        let localContext = new TypeParameterListContext(this.context, this.state);
        this.enterRule(localContext, 42, PklTsParser.RULE_typeParameterList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 319;
            this.match(PklTsParser.LT);
            this.state = 320;
            localContext._typeParameter = this.typeParameter();
            localContext._ts.push(localContext._typeParameter);
            this.state = 327;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 322;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 53) {
                        {
                        this.state = 321;
                        localContext._s53 = this.match(PklTsParser.COMMA);
                        localContext._errs.push(localContext._s53);
                        }
                    }

                    this.state = 324;
                    localContext._typeParameter = this.typeParameter();
                    localContext._ts.push(localContext._typeParameter);
                    }
                    }
                }
                this.state = 329;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            }
            this.state = 331;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 330;
                localContext._err = this.match(PklTsParser.GT);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 44, PklTsParser.RULE_typeParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 334;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17 || _la === 26) {
                {
                this.state = 333;
                localContext._t = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 17 || _la === 26)) {
                    localContext._t = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 336;
            this.match(PklTsParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgumentList(): TypeArgumentListContext {
        let localContext = new TypeArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 46, PklTsParser.RULE_typeArgumentList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 338;
            this.match(PklTsParser.LT);
            this.state = 339;
            localContext._type_ = this.type_(0);
            localContext._ts.push(localContext._type_);
            this.state = 346;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 341;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 53) {
                        {
                        this.state = 340;
                        localContext._s53 = this.match(PklTsParser.COMMA);
                        localContext._errs.push(localContext._s53);
                        }
                    }

                    this.state = 343;
                    localContext._type_ = this.type_(0);
                    localContext._ts.push(localContext._type_);
                    }
                    }
                }
                this.state = 348;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            }
            this.state = 350;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                {
                this.state = 349;
                localContext._err = this.match(PklTsParser.GT);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public type_(): TypeContext;
    public type_(_p: number): TypeContext;
    public type_(_p?: number): TypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 48;
        this.enterRecursionRule(localContext, 48, PklTsParser.RULE_type, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 386;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                {
                localContext = new UnknownTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 353;
                this.match(PklTsParser.UNKNOWN);
                }
                break;
            case 2:
                {
                localContext = new NothingTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 354;
                this.match(PklTsParser.NOTHING);
                }
                break;
            case 3:
                {
                localContext = new ModuleTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 355;
                this.match(PklTsParser.MODULE);
                }
                break;
            case 4:
                {
                localContext = new StringLiteralTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 356;
                this.stringConstant();
                }
                break;
            case 5:
                {
                localContext = new DeclaredTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 357;
                this.qualifiedIdentifier();
                this.state = 359;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                case 1:
                    {
                    this.state = 358;
                    this.typeArgumentList();
                    }
                    break;
                }
                }
                break;
            case 6:
                {
                localContext = new ParenthesizedTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 361;
                this.match(PklTsParser.LPAREN);
                this.state = 362;
                this.type_(0);
                this.state = 364;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
                case 1:
                    {
                    this.state = 363;
                    (localContext as ParenthesizedTypeContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 7:
                {
                localContext = new DefaultUnionTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 366;
                this.match(PklTsParser.STAR);
                this.state = 367;
                (localContext as DefaultUnionTypeContext)._u = this.type_(3);
                }
                break;
            case 8:
                {
                localContext = new FunctionTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 368;
                (localContext as FunctionTypeContext)._t = this.match(PklTsParser.LPAREN);
                this.state = 379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 33619973) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 8705) !== 0)) {
                    {
                    this.state = 369;
                    (localContext as FunctionTypeContext)._type_ = this.type_(0);
                    (localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_);
                    this.state = 376;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 21 || _la === 23 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 66049) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 8705) !== 0)) {
                        {
                        {
                        this.state = 371;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 53) {
                            {
                            this.state = 370;
                            (localContext as FunctionTypeContext)._s53 = this.match(PklTsParser.COMMA);
                            (localContext as FunctionTypeContext)._errs.push((localContext as FunctionTypeContext)._s53);
                            }
                        }

                        this.state = 373;
                        (localContext as FunctionTypeContext)._type_ = this.type_(0);
                        (localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_);
                        }
                        }
                        this.state = 378;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 381;
                    (localContext as FunctionTypeContext)._err = this.match(PklTsParser.RPAREN);
                    }
                }

                this.state = 384;
                this.match(PklTsParser.ARROW);
                this.state = 385;
                (localContext as FunctionTypeContext)._r = this.type_(1);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 411;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 409;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
                    case 1:
                        {
                        localContext = new UnionTypeContext(new TypeContext(parentContext, parentState));
                        (localContext as UnionTypeContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_type);
                        this.state = 388;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 389;
                        this.match(PklTsParser.UNION);
                        this.state = 390;
                        (localContext as UnionTypeContext)._r = this.type_(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new NullableTypeContext(new TypeContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_type);
                        this.state = 391;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 392;
                        this.match(PklTsParser.QUESTION);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConstrainedTypeContext(new TypeContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_type);
                        this.state = 393;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 394;
                        if (!(this.noNewlineOrSemicolon())) {
                            throw this.createFailedPredicateException("this.noNewlineOrSemicolon()");
                        }
                        this.state = 395;
                        (localContext as ConstrainedTypeContext)._t = this.match(PklTsParser.LPAREN);
                        this.state = 396;
                        (localContext as ConstrainedTypeContext)._expr = this.expr(0);
                        (localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr);
                        this.state = 403;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 398;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 53) {
                                    {
                                    this.state = 397;
                                    (localContext as ConstrainedTypeContext)._s53 = this.match(PklTsParser.COMMA);
                                    (localContext as ConstrainedTypeContext)._errs.push((localContext as ConstrainedTypeContext)._s53);
                                    }
                                }

                                this.state = 400;
                                (localContext as ConstrainedTypeContext)._expr = this.expr(0);
                                (localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr);
                                }
                                }
                            }
                            this.state = 405;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
                        }
                        this.state = 407;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
                        case 1:
                            {
                            this.state = 406;
                            (localContext as ConstrainedTypeContext)._err = this.match(PklTsParser.RPAREN);
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 413;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public typedIdentifier(): TypedIdentifierContext {
        let localContext = new TypedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 50, PklTsParser.RULE_typedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.match(PklTsParser.Identifier);
            this.state = 416;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                {
                this.state = 415;
                this.typeAnnotation();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 52, PklTsParser.RULE_parameter);
        try {
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PklTsParser.UNDERSCORE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 418;
                this.match(PklTsParser.UNDERSCORE);
                }
                break;
            case PklTsParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 419;
                this.typedIdentifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 54;
        this.enterRecursionRule(localContext, 54, PklTsParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 525;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                localContext = new ThisExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 423;
                this.match(PklTsParser.THIS);
                }
                break;
            case 2:
                {
                localContext = new OuterExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 424;
                this.match(PklTsParser.OUTER);
                }
                break;
            case 3:
                {
                localContext = new ModuleExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 425;
                this.match(PklTsParser.MODULE);
                }
                break;
            case 4:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 426;
                this.match(PklTsParser.NULL);
                }
                break;
            case 5:
                {
                localContext = new TrueLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 427;
                this.match(PklTsParser.TRUE);
                }
                break;
            case 6:
                {
                localContext = new FalseLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 428;
                this.match(PklTsParser.FALSE);
                }
                break;
            case 7:
                {
                localContext = new IntLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 429;
                this.match(PklTsParser.IntLiteral);
                }
                break;
            case 8:
                {
                localContext = new FloatLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 430;
                this.match(PklTsParser.FloatLiteral);
                }
                break;
            case 9:
                {
                localContext = new ThrowExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 431;
                this.match(PklTsParser.THROW);
                this.state = 432;
                this.match(PklTsParser.LPAREN);
                this.state = 433;
                this.expr(0);
                this.state = 435;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
                case 1:
                    {
                    this.state = 434;
                    (localContext as ThrowExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 10:
                {
                localContext = new TraceExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 437;
                this.match(PklTsParser.TRACE);
                this.state = 438;
                this.match(PklTsParser.LPAREN);
                this.state = 439;
                this.expr(0);
                this.state = 441;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
                case 1:
                    {
                    this.state = 440;
                    (localContext as TraceExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 11:
                {
                localContext = new ImportExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 443;
                (localContext as ImportExprContext)._t = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 16)) {
                    (localContext as ImportExprContext)._t = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 444;
                this.match(PklTsParser.LPAREN);
                this.state = 445;
                this.stringConstant();
                this.state = 447;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                case 1:
                    {
                    this.state = 446;
                    (localContext as ImportExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 12:
                {
                localContext = new ReadExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 449;
                (localContext as ReadExprContext)._t = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
                    (localContext as ReadExprContext)._t = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 450;
                this.match(PklTsParser.LPAREN);
                this.state = 451;
                this.expr(0);
                this.state = 453;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
                case 1:
                    {
                    this.state = 452;
                    (localContext as ReadExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 13:
                {
                localContext = new UnqualifiedAccessExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 455;
                this.match(PklTsParser.Identifier);
                this.state = 457;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
                case 1:
                    {
                    this.state = 456;
                    this.argumentList();
                    }
                    break;
                }
                }
                break;
            case 14:
                {
                localContext = new SingleLineStringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 459;
                (localContext as SingleLineStringLiteralContext)._t = this.match(PklTsParser.SLQuote);
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 15) !== 0)) {
                    {
                    {
                    this.state = 460;
                    this.singleLineStringPart();
                    }
                    }
                    this.state = 465;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 466;
                (localContext as SingleLineStringLiteralContext)._t2 = this.match(PklTsParser.SLEndQuote);
                }
                break;
            case 15:
                {
                localContext = new MultiLineStringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 467;
                (localContext as MultiLineStringLiteralContext)._t = this.match(PklTsParser.MLQuote);
                this.state = 471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 31) !== 0)) {
                    {
                    {
                    this.state = 468;
                    this.multiLineStringPart();
                    }
                    }
                    this.state = 473;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 474;
                (localContext as MultiLineStringLiteralContext)._t2 = this.match(PklTsParser.MLEndQuote);
                }
                break;
            case 16:
                {
                localContext = new NewExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 475;
                (localContext as NewExprContext)._t = this.match(PklTsParser.NEW);
                this.state = 477;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 33619973) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 8705) !== 0)) {
                    {
                    this.state = 476;
                    this.type_(0);
                    }
                }

                this.state = 479;
                this.objectBody();
                }
                break;
            case 17:
                {
                localContext = new SuperAccessExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 480;
                this.match(PklTsParser.SUPER);
                this.state = 481;
                this.match(PklTsParser.DOT);
                this.state = 482;
                this.match(PklTsParser.Identifier);
                this.state = 484;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
                case 1:
                    {
                    this.state = 483;
                    this.argumentList();
                    }
                    break;
                }
                }
                break;
            case 18:
                {
                localContext = new SuperSubscriptExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 486;
                this.match(PklTsParser.SUPER);
                this.state = 487;
                (localContext as SuperSubscriptExprContext)._t = this.match(PklTsParser.LBRACK);
                this.state = 488;
                (localContext as SuperSubscriptExprContext)._e = this.expr(0);
                this.state = 490;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 489;
                    (localContext as SuperSubscriptExprContext)._err = this.match(PklTsParser.RBRACK);
                    }
                    break;
                }
                }
                break;
            case 19:
                {
                localContext = new UnaryMinusExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 492;
                this.match(PklTsParser.MINUS);
                this.state = 493;
                this.expr(16);
                }
                break;
            case 20:
                {
                localContext = new LogicalNotExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 494;
                this.match(PklTsParser.NOT);
                this.state = 495;
                this.expr(15);
                }
                break;
            case 21:
                {
                localContext = new IfExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 496;
                this.match(PklTsParser.IF);
                this.state = 497;
                this.match(PklTsParser.LPAREN);
                this.state = 498;
                (localContext as IfExprContext)._c = this.expr(0);
                this.state = 500;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 499;
                    (localContext as IfExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                }

                this.state = 502;
                (localContext as IfExprContext)._l = this.expr(0);
                this.state = 503;
                this.match(PklTsParser.ELSE);
                this.state = 504;
                (localContext as IfExprContext)._r = this.expr(4);
                }
                break;
            case 22:
                {
                localContext = new LetExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 506;
                this.match(PklTsParser.LET);
                this.state = 507;
                this.match(PklTsParser.LPAREN);
                this.state = 508;
                this.parameter();
                this.state = 509;
                this.match(PklTsParser.ASSIGN);
                this.state = 510;
                (localContext as LetExprContext)._l = this.expr(0);
                this.state = 512;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 511;
                    (localContext as LetExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                }

                this.state = 514;
                (localContext as LetExprContext)._r = this.expr(3);
                }
                break;
            case 23:
                {
                localContext = new FunctionLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 516;
                this.parameterList();
                this.state = 517;
                this.match(PklTsParser.ARROW);
                this.state = 518;
                this.expr(2);
                }
                break;
            case 24:
                {
                localContext = new ParenthesizedExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 520;
                this.match(PklTsParser.LPAREN);
                this.state = 521;
                this.expr(0);
                this.state = 523;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
                case 1:
                    {
                    this.state = 522;
                    (localContext as ParenthesizedExprContext)._err = this.match(PklTsParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 580;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 578;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
                    case 1:
                        {
                        localContext = new ExponentiationExprContext(new ExprContext(parentContext, parentState));
                        (localContext as ExponentiationExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 527;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 528;
                        (localContext as ExponentiationExprContext)._t = this.match(PklTsParser.POW);
                        this.state = 529;
                        (localContext as ExponentiationExprContext)._r = this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MultiplicativeExprContext(new ExprContext(parentContext, parentState));
                        (localContext as MultiplicativeExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 530;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 531;
                        (localContext as MultiplicativeExprContext)._t = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 15) !== 0))) {
                            (localContext as MultiplicativeExprContext)._t = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 532;
                        (localContext as MultiplicativeExprContext)._r = this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AdditiveExprContext(new ExprContext(parentContext, parentState));
                        (localContext as AdditiveExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 533;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 537;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
                        case 1:
                            {
                            this.state = 534;
                            (localContext as AdditiveExprContext)._t = this.match(PklTsParser.PLUS);
                            }
                            break;
                        case 2:
                            {
                            this.state = 535;
                            if (!(this.noNewlineOrSemicolon())) {
                                throw this.createFailedPredicateException("this.noNewlineOrSemicolon()");
                            }
                            this.state = 536;
                            (localContext as AdditiveExprContext)._t = this.match(PklTsParser.MINUS);
                            }
                            break;
                        }
                        this.state = 539;
                        (localContext as AdditiveExprContext)._r = this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ComparisonExprContext(new ExprContext(parentContext, parentState));
                        (localContext as ComparisonExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 540;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 541;
                        (localContext as ComparisonExprContext)._t = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 771) !== 0))) {
                            (localContext as ComparisonExprContext)._t = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 542;
                        (localContext as ComparisonExprContext)._r = this.expr(12);
                        }
                        break;
                    case 5:
                        {
                        localContext = new EqualityExprContext(new ExprContext(parentContext, parentState));
                        (localContext as EqualityExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 543;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 544;
                        (localContext as EqualityExprContext)._t = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 66 || _la === 67)) {
                            (localContext as EqualityExprContext)._t = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 545;
                        (localContext as EqualityExprContext)._r = this.expr(10);
                        }
                        break;
                    case 6:
                        {
                        localContext = new LogicalAndExprContext(new ExprContext(parentContext, parentState));
                        (localContext as LogicalAndExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 546;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 547;
                        (localContext as LogicalAndExprContext)._t = this.match(PklTsParser.AND);
                        this.state = 548;
                        (localContext as LogicalAndExprContext)._r = this.expr(9);
                        }
                        break;
                    case 7:
                        {
                        localContext = new LogicalOrExprContext(new ExprContext(parentContext, parentState));
                        (localContext as LogicalOrExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 549;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 550;
                        (localContext as LogicalOrExprContext)._t = this.match(PklTsParser.OR);
                        this.state = 551;
                        (localContext as LogicalOrExprContext)._r = this.expr(8);
                        }
                        break;
                    case 8:
                        {
                        localContext = new PipeExprContext(new ExprContext(parentContext, parentState));
                        (localContext as PipeExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 552;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 553;
                        (localContext as PipeExprContext)._t = this.match(PklTsParser.PIPE);
                        this.state = 554;
                        (localContext as PipeExprContext)._r = this.expr(7);
                        }
                        break;
                    case 9:
                        {
                        localContext = new NullCoalesceExprContext(new ExprContext(parentContext, parentState));
                        (localContext as NullCoalesceExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 555;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 556;
                        (localContext as NullCoalesceExprContext)._t = this.match(PklTsParser.COALESCE);
                        this.state = 557;
                        (localContext as NullCoalesceExprContext)._r = this.expr(5);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AmendExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 558;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 559;
                        this.objectBody();
                        }
                        break;
                    case 11:
                        {
                        localContext = new QualifiedAccessExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 560;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 561;
                        (localContext as QualifiedAccessExprContext)._t = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 54 || _la === 55)) {
                            (localContext as QualifiedAccessExprContext)._t = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 562;
                        this.match(PklTsParser.Identifier);
                        this.state = 564;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                        case 1:
                            {
                            this.state = 563;
                            this.argumentList();
                            }
                            break;
                        }
                        }
                        break;
                    case 12:
                        {
                        localContext = new SubscriptExprContext(new ExprContext(parentContext, parentState));
                        (localContext as SubscriptExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 566;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 567;
                        if (!(this.noNewlineOrSemicolon())) {
                            throw this.createFailedPredicateException("this.noNewlineOrSemicolon()");
                        }
                        this.state = 568;
                        (localContext as SubscriptExprContext)._t = this.match(PklTsParser.LBRACK);
                        this.state = 569;
                        (localContext as SubscriptExprContext)._r = this.expr(0);
                        this.state = 571;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                        case 1:
                            {
                            this.state = 570;
                            (localContext as SubscriptExprContext)._err = this.match(PklTsParser.RBRACK);
                            }
                            break;
                        }
                        }
                        break;
                    case 13:
                        {
                        localContext = new NonNullExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 573;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 574;
                        this.match(PklTsParser.NON_NULL);
                        }
                        break;
                    case 14:
                        {
                        localContext = new TypeTestExprContext(new ExprContext(parentContext, parentState));
                        (localContext as TypeTestExprContext)._l = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, PklTsParser.RULE_expr);
                        this.state = 575;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 576;
                        (localContext as TypeTestExprContext)._t = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 18)) {
                            (localContext as TypeTestExprContext)._t = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 577;
                        (localContext as TypeTestExprContext)._r = this.type_(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 582;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public objectBody(): ObjectBodyContext {
        let localContext = new ObjectBodyContext(this.context, this.state);
        this.enterRule(localContext, 56, PklTsParser.RULE_objectBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 583;
            this.match(PklTsParser.LBRACE);
            this.state = 596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context) ) {
            case 1:
                {
                this.state = 584;
                localContext._parameter = this.parameter();
                localContext._ps.push(localContext._parameter);
                this.state = 591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 53 || _la === 83 || _la === 88) {
                    {
                    {
                    this.state = 586;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 53) {
                        {
                        this.state = 585;
                        localContext._s53 = this.match(PklTsParser.COMMA);
                        localContext._errs.push(localContext._s53);
                        }
                    }

                    this.state = 588;
                    localContext._parameter = this.parameter();
                    localContext._ps.push(localContext._parameter);
                    }
                    }
                    this.state = 593;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 594;
                this.match(PklTsParser.ARROW);
                }
                break;
            }
            this.state = 601;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 91, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 598;
                    this.objectMember();
                    }
                    }
                }
                this.state = 603;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 91, this.context);
            }
            this.state = 605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 604;
                localContext._err = this.match(PklTsParser.RBRACE);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectMember(): ObjectMemberContext {
        let localContext = new ObjectMemberContext(this.context, this.state);
        this.enterRule(localContext, 58, PklTsParser.RULE_objectMember);
        let _la: number;
        try {
            let alternative: number;
            this.state = 692;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
            case 1:
                localContext = new ObjectPropertyContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 610;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34612514) !== 0)) {
                    {
                    {
                    this.state = 607;
                    this.modifier();
                    }
                    }
                    this.state = 612;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 613;
                this.match(PklTsParser.Identifier);
                this.state = 624;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PklTsParser.ASSIGN:
                case PklTsParser.COLON:
                    {
                    this.state = 615;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 64) {
                        {
                        this.state = 614;
                        this.typeAnnotation();
                        }
                    }

                    this.state = 617;
                    this.match(PklTsParser.ASSIGN);
                    this.state = 618;
                    this.expr(0);
                    }
                    break;
                case PklTsParser.LBRACE:
                    {
                    this.state = 620;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 619;
                            this.objectBody();
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 622;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 2:
                localContext = new ObjectMethodContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 626;
                this.methodHeader();
                this.state = 627;
                this.match(PklTsParser.ASSIGN);
                this.state = 628;
                this.expr(0);
                }
                break;
            case 3:
                localContext = new MemberPredicateContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 630;
                (localContext as MemberPredicateContext)._t = this.match(PklTsParser.LPRED);
                this.state = 631;
                (localContext as MemberPredicateContext)._k = this.expr(0);
                this.state = 633;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
                case 1:
                    {
                    this.state = 632;
                    (localContext as MemberPredicateContext)._err1 = this.match(PklTsParser.RBRACK);
                    }
                    break;
                }
                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 635;
                    (localContext as MemberPredicateContext)._err2 = this.match(PklTsParser.RBRACK);
                    }
                }

                this.state = 645;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PklTsParser.ASSIGN:
                    {
                    this.state = 638;
                    this.match(PklTsParser.ASSIGN);
                    this.state = 639;
                    (localContext as MemberPredicateContext)._v = this.expr(0);
                    }
                    break;
                case PklTsParser.LBRACE:
                    {
                    this.state = 641;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 640;
                            this.objectBody();
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 643;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 4:
                localContext = new ObjectEntryContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 647;
                (localContext as ObjectEntryContext)._t = this.match(PklTsParser.LBRACK);
                this.state = 648;
                (localContext as ObjectEntryContext)._k = this.expr(0);
                this.state = 650;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
                case 1:
                    {
                    this.state = 649;
                    (localContext as ObjectEntryContext)._err1 = this.match(PklTsParser.RBRACK);
                    }
                    break;
                }
                this.state = 653;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 652;
                    (localContext as ObjectEntryContext)._err2 = this.match(PklTsParser.RBRACK);
                    }
                }

                this.state = 662;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PklTsParser.ASSIGN:
                    {
                    this.state = 655;
                    this.match(PklTsParser.ASSIGN);
                    this.state = 656;
                    (localContext as ObjectEntryContext)._v = this.expr(0);
                    }
                    break;
                case PklTsParser.LBRACE:
                    {
                    this.state = 658;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 657;
                            this.objectBody();
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 660;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 5:
                localContext = new ObjectElementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 664;
                this.expr(0);
                }
                break;
            case 6:
                localContext = new ObjectSpreadContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 665;
                _la = this.tokenStream.LA(1);
                if(!(_la === 81 || _la === 82)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 666;
                this.expr(0);
                }
                break;
            case 7:
                localContext = new WhenGeneratorContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 667;
                this.match(PklTsParser.WHEN);
                this.state = 668;
                this.match(PklTsParser.LPAREN);
                this.state = 669;
                (localContext as WhenGeneratorContext)._e = this.expr(0);
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 670;
                    (localContext as WhenGeneratorContext)._err = this.match(PklTsParser.RPAREN);
                    }
                }

                {
                this.state = 673;
                (localContext as WhenGeneratorContext)._b1 = this.objectBody();
                this.state = 676;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
                case 1:
                    {
                    this.state = 674;
                    this.match(PklTsParser.ELSE);
                    this.state = 675;
                    (localContext as WhenGeneratorContext)._b2 = this.objectBody();
                    }
                    break;
                }
                }
                }
                break;
            case 8:
                localContext = new ForGeneratorContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 678;
                this.match(PklTsParser.FOR);
                this.state = 679;
                this.match(PklTsParser.LPAREN);
                this.state = 680;
                (localContext as ForGeneratorContext)._t1 = this.parameter();
                this.state = 683;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                    this.state = 681;
                    this.match(PklTsParser.COMMA);
                    this.state = 682;
                    (localContext as ForGeneratorContext)._t2 = this.parameter();
                    }
                }

                this.state = 685;
                this.match(PklTsParser.IN);
                this.state = 686;
                (localContext as ForGeneratorContext)._e = this.expr(0);
                this.state = 688;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 687;
                    (localContext as ForGeneratorContext)._err = this.match(PklTsParser.RPAREN);
                    }
                }

                this.state = 690;
                this.objectBody();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringConstant(): StringConstantContext {
        let localContext = new StringConstantContext(this.context, this.state);
        this.enterRule(localContext, 60, PklTsParser.RULE_stringConstant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 694;
            localContext._t = this.match(PklTsParser.SLQuote);
            this.state = 700;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 7) !== 0)) {
                {
                this.state = 698;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PklTsParser.SLCharacters:
                    {
                    this.state = 695;
                    localContext._SLCharacters = this.match(PklTsParser.SLCharacters);
                    localContext._ts.push(localContext._SLCharacters);
                    }
                    break;
                case PklTsParser.SLCharacterEscape:
                    {
                    this.state = 696;
                    localContext._SLCharacterEscape = this.match(PklTsParser.SLCharacterEscape);
                    localContext._ts.push(localContext._SLCharacterEscape);
                    }
                    break;
                case PklTsParser.SLUnicodeEscape:
                    {
                    this.state = 697;
                    localContext._SLUnicodeEscape = this.match(PklTsParser.SLUnicodeEscape);
                    localContext._ts.push(localContext._SLUnicodeEscape);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 702;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 703;
            localContext._t2 = this.match(PklTsParser.SLEndQuote);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleLineStringPart(): SingleLineStringPartContext {
        let localContext = new SingleLineStringPartContext(this.context, this.state);
        this.enterRule(localContext, 62, PklTsParser.RULE_singleLineStringPart);
        try {
            let alternative: number;
            this.state = 716;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PklTsParser.SLInterpolation:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 705;
                this.match(PklTsParser.SLInterpolation);
                this.state = 706;
                localContext._e = this.expr(0);
                this.state = 707;
                this.match(PklTsParser.RPAREN);
                }
                break;
            case PklTsParser.SLUnicodeEscape:
            case PklTsParser.SLCharacterEscape:
            case PklTsParser.SLCharacters:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 712;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        this.state = 712;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case PklTsParser.SLCharacters:
                            {
                            this.state = 709;
                            localContext._SLCharacters = this.match(PklTsParser.SLCharacters);
                            localContext._ts.push(localContext._SLCharacters);
                            }
                            break;
                        case PklTsParser.SLCharacterEscape:
                            {
                            this.state = 710;
                            localContext._SLCharacterEscape = this.match(PklTsParser.SLCharacterEscape);
                            localContext._ts.push(localContext._SLCharacterEscape);
                            }
                            break;
                        case PklTsParser.SLUnicodeEscape:
                            {
                            this.state = 711;
                            localContext._SLUnicodeEscape = this.match(PklTsParser.SLUnicodeEscape);
                            localContext._ts.push(localContext._SLUnicodeEscape);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 714;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 113, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiLineStringPart(): MultiLineStringPartContext {
        let localContext = new MultiLineStringPartContext(this.context, this.state);
        this.enterRule(localContext, 64, PklTsParser.RULE_multiLineStringPart);
        try {
            let alternative: number;
            this.state = 730;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PklTsParser.MLInterpolation:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 718;
                this.match(PklTsParser.MLInterpolation);
                this.state = 719;
                localContext._e = this.expr(0);
                this.state = 720;
                this.match(PklTsParser.RPAREN);
                }
                break;
            case PklTsParser.MLUnicodeEscape:
            case PklTsParser.MLCharacterEscape:
            case PklTsParser.MLNewline:
            case PklTsParser.MLCharacters:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 726;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        this.state = 726;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case PklTsParser.MLCharacters:
                            {
                            this.state = 722;
                            localContext._MLCharacters = this.match(PklTsParser.MLCharacters);
                            localContext._ts.push(localContext._MLCharacters);
                            }
                            break;
                        case PklTsParser.MLNewline:
                            {
                            this.state = 723;
                            localContext._MLNewline = this.match(PklTsParser.MLNewline);
                            localContext._ts.push(localContext._MLNewline);
                            }
                            break;
                        case PklTsParser.MLCharacterEscape:
                            {
                            this.state = 724;
                            localContext._MLCharacterEscape = this.match(PklTsParser.MLCharacterEscape);
                            localContext._ts.push(localContext._MLCharacterEscape);
                            }
                            break;
                        case PklTsParser.MLUnicodeEscape:
                            {
                            this.state = 725;
                            localContext._MLUnicodeEscape = this.match(PklTsParser.MLUnicodeEscape);
                            localContext._ts.push(localContext._MLUnicodeEscape);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 728;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 116, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reservedKeyword(): ReservedKeywordContext {
        let localContext = new ReservedKeywordContext(this.context, this.state);
        this.enterRule(localContext, 66, PklTsParser.RULE_reservedKeyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 732;
            _la = this.tokenStream.LA(1);
            if(!(_la === 5 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 127) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 17:
            return this.argumentList_sempred(localContext as ArgumentListContext, predIndex);
        case 24:
            return this.type_sempred(localContext as TypeContext, predIndex);
        case 27:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private argumentList_sempred(localContext: ArgumentListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.noNewlineOrSemicolon();
        }
        return true;
    }
    private type_sempred(localContext: TypeContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        case 2:
            return this.precpred(this.context, 5);
        case 3:
            return this.precpred(this.context, 4);
        case 4:
            return this.noNewlineOrSemicolon();
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.precpred(this.context, 14);
        case 6:
            return this.precpred(this.context, 13);
        case 7:
            return this.precpred(this.context, 12);
        case 8:
            return this.noNewlineOrSemicolon();
        case 9:
            return this.precpred(this.context, 11);
        case 10:
            return this.precpred(this.context, 9);
        case 11:
            return this.precpred(this.context, 8);
        case 12:
            return this.precpred(this.context, 7);
        case 13:
            return this.precpred(this.context, 6);
        case 14:
            return this.precpred(this.context, 5);
        case 15:
            return this.precpred(this.context, 22);
        case 16:
            return this.precpred(this.context, 19);
        case 17:
            return this.precpred(this.context, 18);
        case 18:
            return this.noNewlineOrSemicolon();
        case 19:
            return this.precpred(this.context, 17);
        case 20:
            return this.precpred(this.context, 10);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,105,735,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,76,8,0,5,0,78,8,0,10,0,12,
        0,81,9,0,1,0,1,0,1,1,1,1,1,1,1,2,3,2,89,8,2,1,2,5,2,92,8,2,10,2,
        12,2,95,9,2,1,2,1,2,1,2,1,2,3,2,101,8,2,5,2,103,8,2,10,2,12,2,106,
        9,2,1,2,1,2,1,3,3,3,111,8,3,1,3,5,3,114,8,3,10,3,12,3,117,9,3,1,
        3,1,3,1,4,5,4,122,8,4,10,4,12,4,125,9,4,1,4,1,4,1,4,3,4,130,8,4,
        1,4,3,4,133,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,142,8,6,1,7,3,7,
        145,8,7,1,7,5,7,148,8,7,10,7,12,7,151,9,7,1,7,1,7,3,7,155,8,7,1,
        8,5,8,158,8,8,10,8,12,8,161,9,8,1,8,1,8,1,8,3,8,166,8,8,1,8,1,8,
        3,8,170,8,8,1,9,1,9,1,10,1,10,1,10,3,10,177,8,10,5,10,179,8,10,10,
        10,12,10,182,9,10,1,10,3,10,185,8,10,1,11,3,11,188,8,11,1,11,5,11,
        191,8,11,10,11,12,11,194,9,11,1,11,1,11,1,11,1,11,1,12,5,12,201,
        8,12,10,12,12,12,204,9,12,1,12,1,12,1,12,3,12,209,8,12,1,13,3,13,
        212,8,13,1,13,5,13,215,8,13,10,13,12,13,218,9,13,1,13,5,13,221,8,
        13,10,13,12,13,224,9,13,1,13,1,13,1,13,3,13,229,8,13,1,13,1,13,1,
        13,4,13,234,8,13,11,13,12,13,235,3,13,238,8,13,3,13,240,8,13,1,14,
        3,14,243,8,14,1,14,5,14,246,8,14,10,14,12,14,249,9,14,1,14,1,14,
        1,14,3,14,254,8,14,1,15,5,15,257,8,15,10,15,12,15,260,9,15,1,15,
        1,15,1,15,3,15,265,8,15,1,15,1,15,3,15,269,8,15,1,16,1,16,1,16,3,
        16,274,8,16,1,16,5,16,277,8,16,10,16,12,16,280,9,16,3,16,282,8,16,
        1,16,3,16,285,8,16,1,17,1,17,1,17,1,17,3,17,291,8,17,1,17,5,17,294,
        8,17,10,17,12,17,297,9,17,3,17,299,8,17,1,17,3,17,302,8,17,1,18,
        1,18,1,18,3,18,307,8,18,1,19,1,19,1,19,5,19,312,8,19,10,19,12,19,
        315,9,19,1,20,1,20,1,20,1,21,1,21,1,21,3,21,323,8,21,1,21,5,21,326,
        8,21,10,21,12,21,329,9,21,1,21,3,21,332,8,21,1,22,3,22,335,8,22,
        1,22,1,22,1,23,1,23,1,23,3,23,342,8,23,1,23,5,23,345,8,23,10,23,
        12,23,348,9,23,1,23,3,23,351,8,23,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,3,24,360,8,24,1,24,1,24,1,24,3,24,365,8,24,1,24,1,24,1,24,1,
        24,1,24,3,24,372,8,24,1,24,5,24,375,8,24,10,24,12,24,378,9,24,3,
        24,380,8,24,1,24,3,24,383,8,24,1,24,1,24,3,24,387,8,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,399,8,24,1,24,5,24,
        402,8,24,10,24,12,24,405,9,24,1,24,3,24,408,8,24,5,24,410,8,24,10,
        24,12,24,413,9,24,1,25,1,25,3,25,417,8,25,1,26,1,26,3,26,421,8,26,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        3,27,436,8,27,1,27,1,27,1,27,1,27,3,27,442,8,27,1,27,1,27,1,27,1,
        27,3,27,448,8,27,1,27,1,27,1,27,1,27,3,27,454,8,27,1,27,1,27,3,27,
        458,8,27,1,27,1,27,5,27,462,8,27,10,27,12,27,465,9,27,1,27,1,27,
        1,27,5,27,470,8,27,10,27,12,27,473,9,27,1,27,1,27,1,27,3,27,478,
        8,27,1,27,1,27,1,27,1,27,1,27,3,27,485,8,27,1,27,1,27,1,27,1,27,
        3,27,491,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,501,8,
        27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,513,8,
        27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,524,8,27,3,
        27,526,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,
        27,538,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
        27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
        27,1,27,3,27,565,8,27,1,27,1,27,1,27,1,27,1,27,3,27,572,8,27,1,27,
        1,27,1,27,1,27,1,27,5,27,579,8,27,10,27,12,27,582,9,27,1,28,1,28,
        1,28,3,28,587,8,28,1,28,5,28,590,8,28,10,28,12,28,593,9,28,1,28,
        1,28,3,28,597,8,28,1,28,5,28,600,8,28,10,28,12,28,603,9,28,1,28,
        3,28,606,8,28,1,29,5,29,609,8,29,10,29,12,29,612,9,29,1,29,1,29,
        3,29,616,8,29,1,29,1,29,1,29,4,29,621,8,29,11,29,12,29,622,3,29,
        625,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,634,8,29,1,29,3,
        29,637,8,29,1,29,1,29,1,29,4,29,642,8,29,11,29,12,29,643,3,29,646,
        8,29,1,29,1,29,1,29,3,29,651,8,29,1,29,3,29,654,8,29,1,29,1,29,1,
        29,4,29,659,8,29,11,29,12,29,660,3,29,663,8,29,1,29,1,29,1,29,1,
        29,1,29,1,29,1,29,3,29,672,8,29,1,29,1,29,1,29,3,29,677,8,29,1,29,
        1,29,1,29,1,29,1,29,3,29,684,8,29,1,29,1,29,1,29,3,29,689,8,29,1,
        29,1,29,3,29,693,8,29,1,30,1,30,1,30,1,30,5,30,699,8,30,10,30,12,
        30,702,9,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,4,31,713,
        8,31,11,31,12,31,714,3,31,717,8,31,1,32,1,32,1,32,1,32,1,32,1,32,
        1,32,1,32,4,32,727,8,32,11,32,12,32,728,3,32,731,8,32,1,33,1,33,
        1,33,0,2,48,54,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,12,2,0,2,2,
        7,7,1,0,15,16,7,0,1,1,5,5,8,8,10,10,13,13,20,20,25,25,2,0,17,17,
        26,26,1,0,28,30,1,0,75,78,2,0,60,61,68,69,1,0,66,67,1,0,54,55,2,
        0,3,3,18,18,1,0,81,82,2,0,5,5,39,45,876,0,79,1,0,0,0,2,84,1,0,0,
        0,4,88,1,0,0,0,6,110,1,0,0,0,8,132,1,0,0,0,10,134,1,0,0,0,12,137,
        1,0,0,0,14,144,1,0,0,0,16,159,1,0,0,0,18,171,1,0,0,0,20,173,1,0,
        0,0,22,187,1,0,0,0,24,202,1,0,0,0,26,211,1,0,0,0,28,242,1,0,0,0,
        30,258,1,0,0,0,32,270,1,0,0,0,34,286,1,0,0,0,36,303,1,0,0,0,38,308,
        1,0,0,0,40,316,1,0,0,0,42,319,1,0,0,0,44,334,1,0,0,0,46,338,1,0,
        0,0,48,386,1,0,0,0,50,414,1,0,0,0,52,420,1,0,0,0,54,525,1,0,0,0,
        56,583,1,0,0,0,58,692,1,0,0,0,60,694,1,0,0,0,62,716,1,0,0,0,64,730,
        1,0,0,0,66,732,1,0,0,0,68,76,3,6,3,0,69,76,3,12,6,0,70,76,3,14,7,
        0,71,76,3,22,11,0,72,76,3,26,13,0,73,76,3,28,14,0,74,76,3,54,27,
        0,75,68,1,0,0,0,75,69,1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,75,72,
        1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,
        78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,
        0,0,0,82,83,5,0,0,1,83,1,1,0,0,0,84,85,3,54,27,0,85,86,5,0,0,1,86,
        3,1,0,0,0,87,89,3,6,3,0,88,87,1,0,0,0,88,89,1,0,0,0,89,93,1,0,0,
        0,90,92,3,12,6,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,
        1,0,0,0,94,104,1,0,0,0,95,93,1,0,0,0,96,101,3,14,7,0,97,101,3,22,
        11,0,98,101,3,26,13,0,99,101,3,28,14,0,100,96,1,0,0,0,100,97,1,0,
        0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,103,1,0,0,0,102,100,1,0,0,
        0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,
        0,106,104,1,0,0,0,107,108,5,0,0,1,108,5,1,0,0,0,109,111,5,91,0,0,
        110,109,1,0,0,0,110,111,1,0,0,0,111,115,1,0,0,0,112,114,3,36,18,
        0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,
        0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,3,8,4,0,119,7,1,0,0,0,
        120,122,3,18,9,0,121,120,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,
        123,124,1,0,0,0,124,126,1,0,0,0,125,123,1,0,0,0,126,127,5,21,0,0,
        127,129,3,38,19,0,128,130,3,10,5,0,129,128,1,0,0,0,129,130,1,0,0,
        0,130,133,1,0,0,0,131,133,3,10,5,0,132,123,1,0,0,0,132,131,1,0,0,
        0,133,9,1,0,0,0,134,135,7,0,0,0,135,136,3,60,30,0,136,11,1,0,0,0,
        137,138,7,1,0,0,138,141,3,60,30,0,139,140,5,3,0,0,140,142,5,88,0,
        0,141,139,1,0,0,0,141,142,1,0,0,0,142,13,1,0,0,0,143,145,5,91,0,
        0,144,143,1,0,0,0,144,145,1,0,0,0,145,149,1,0,0,0,146,148,3,36,18,
        0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,
        0,150,152,1,0,0,0,151,149,1,0,0,0,152,154,3,16,8,0,153,155,3,20,
        10,0,154,153,1,0,0,0,154,155,1,0,0,0,155,15,1,0,0,0,156,158,3,18,
        9,0,157,156,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,
        0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,163,5,4,0,0,163,165,5,88,
        0,0,164,166,3,42,21,0,165,164,1,0,0,0,165,166,1,0,0,0,166,169,1,
        0,0,0,167,168,5,7,0,0,168,170,3,48,24,0,169,167,1,0,0,0,169,170,
        1,0,0,0,170,17,1,0,0,0,171,172,7,2,0,0,172,19,1,0,0,0,173,180,5,
        48,0,0,174,177,3,26,13,0,175,177,3,28,14,0,176,174,1,0,0,0,176,175,
        1,0,0,0,177,179,1,0,0,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,
        1,0,0,0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,185,
        5,49,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,21,1,0,0,0,186,188,
        5,91,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,192,1,0,0,0,189,191,
        3,36,18,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,
        1,0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,196,3,24,12,0,196,197,
        5,59,0,0,197,198,3,48,24,0,198,23,1,0,0,0,199,201,3,18,9,0,200,199,
        1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,205,
        1,0,0,0,204,202,1,0,0,0,205,206,5,36,0,0,206,208,5,88,0,0,207,209,
        3,42,21,0,208,207,1,0,0,0,208,209,1,0,0,0,209,25,1,0,0,0,210,212,
        5,91,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,216,1,0,0,0,213,215,
        3,36,18,0,214,213,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,
        1,0,0,0,217,222,1,0,0,0,218,216,1,0,0,0,219,221,3,18,9,0,220,219,
        1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,
        1,0,0,0,224,222,1,0,0,0,225,239,5,88,0,0,226,240,3,40,20,0,227,229,
        3,40,20,0,228,227,1,0,0,0,228,229,1,0,0,0,229,237,1,0,0,0,230,231,
        5,59,0,0,231,238,3,54,27,0,232,234,3,56,28,0,233,232,1,0,0,0,234,
        235,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,
        230,1,0,0,0,237,233,1,0,0,0,238,240,1,0,0,0,239,226,1,0,0,0,239,
        228,1,0,0,0,240,27,1,0,0,0,241,243,5,91,0,0,242,241,1,0,0,0,242,
        243,1,0,0,0,243,247,1,0,0,0,244,246,3,36,18,0,245,244,1,0,0,0,246,
        249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,
        247,1,0,0,0,250,253,3,30,15,0,251,252,5,59,0,0,252,254,3,54,27,0,
        253,251,1,0,0,0,253,254,1,0,0,0,254,29,1,0,0,0,255,257,3,18,9,0,
        256,255,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,
        259,261,1,0,0,0,260,258,1,0,0,0,261,262,5,12,0,0,262,264,5,88,0,
        0,263,265,3,42,21,0,264,263,1,0,0,0,264,265,1,0,0,0,265,266,1,0,
        0,0,266,268,3,32,16,0,267,269,3,40,20,0,268,267,1,0,0,0,268,269,
        1,0,0,0,269,31,1,0,0,0,270,281,5,46,0,0,271,278,3,52,26,0,272,274,
        5,53,0,0,273,272,1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,277,
        3,52,26,0,276,273,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,
        1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,281,271,1,0,0,0,281,282,
        1,0,0,0,282,284,1,0,0,0,283,285,5,47,0,0,284,283,1,0,0,0,284,285,
        1,0,0,0,285,33,1,0,0,0,286,287,4,17,0,0,287,298,5,46,0,0,288,295,
        3,54,27,0,289,291,5,53,0,0,290,289,1,0,0,0,290,291,1,0,0,0,291,292,
        1,0,0,0,292,294,3,54,27,0,293,290,1,0,0,0,294,297,1,0,0,0,295,293,
        1,0,0,0,295,296,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,298,288,
        1,0,0,0,298,299,1,0,0,0,299,301,1,0,0,0,300,302,5,47,0,0,301,300,
        1,0,0,0,301,302,1,0,0,0,302,35,1,0,0,0,303,304,5,58,0,0,304,306,
        3,48,24,0,305,307,3,56,28,0,306,305,1,0,0,0,306,307,1,0,0,0,307,
        37,1,0,0,0,308,313,5,88,0,0,309,310,5,54,0,0,310,312,5,88,0,0,311,
        309,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,
        39,1,0,0,0,315,313,1,0,0,0,316,317,5,64,0,0,317,318,3,48,24,0,318,
        41,1,0,0,0,319,320,5,61,0,0,320,327,3,44,22,0,321,323,5,53,0,0,322,
        321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,326,3,44,22,0,325,
        322,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,
        331,1,0,0,0,329,327,1,0,0,0,330,332,5,60,0,0,331,330,1,0,0,0,331,
        332,1,0,0,0,332,43,1,0,0,0,333,335,7,3,0,0,334,333,1,0,0,0,334,335,
        1,0,0,0,335,336,1,0,0,0,336,337,5,88,0,0,337,45,1,0,0,0,338,339,
        5,61,0,0,339,346,3,48,24,0,340,342,5,53,0,0,341,340,1,0,0,0,341,
        342,1,0,0,0,342,343,1,0,0,0,343,345,3,48,24,0,344,341,1,0,0,0,345,
        348,1,0,0,0,346,344,1,0,0,0,346,347,1,0,0,0,347,350,1,0,0,0,348,
        346,1,0,0,0,349,351,5,60,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,
        47,1,0,0,0,352,353,6,24,-1,0,353,387,5,37,0,0,354,387,5,23,0,0,355,
        387,5,21,0,0,356,387,3,60,30,0,357,359,3,38,19,0,358,360,3,46,23,
        0,359,358,1,0,0,0,359,360,1,0,0,0,360,387,1,0,0,0,361,362,5,46,0,
        0,362,364,3,48,24,0,363,365,5,47,0,0,364,363,1,0,0,0,364,365,1,0,
        0,0,365,387,1,0,0,0,366,367,5,75,0,0,367,387,3,48,24,3,368,379,5,
        46,0,0,369,376,3,48,24,0,370,372,5,53,0,0,371,370,1,0,0,0,371,372,
        1,0,0,0,372,373,1,0,0,0,373,375,3,48,24,0,374,371,1,0,0,0,375,378,
        1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,380,1,0,0,0,378,376,
        1,0,0,0,379,369,1,0,0,0,379,380,1,0,0,0,380,382,1,0,0,0,381,383,
        5,47,0,0,382,381,1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,385,
        5,65,0,0,385,387,3,48,24,1,386,352,1,0,0,0,386,354,1,0,0,0,386,355,
        1,0,0,0,386,356,1,0,0,0,386,357,1,0,0,0,386,361,1,0,0,0,386,366,
        1,0,0,0,386,368,1,0,0,0,387,411,1,0,0,0,388,389,10,2,0,0,389,390,
        5,79,0,0,390,410,3,48,24,3,391,392,10,5,0,0,392,410,5,63,0,0,393,
        394,10,4,0,0,394,395,4,24,4,0,395,396,5,46,0,0,396,403,3,54,27,0,
        397,399,5,53,0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,400,1,0,0,0,
        400,402,3,54,27,0,401,398,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,
        0,403,404,1,0,0,0,404,407,1,0,0,0,405,403,1,0,0,0,406,408,5,47,0,
        0,407,406,1,0,0,0,407,408,1,0,0,0,408,410,1,0,0,0,409,388,1,0,0,
        0,409,391,1,0,0,0,409,393,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,
        0,411,412,1,0,0,0,412,49,1,0,0,0,413,411,1,0,0,0,414,416,5,88,0,
        0,415,417,3,40,20,0,416,415,1,0,0,0,416,417,1,0,0,0,417,51,1,0,0,
        0,418,421,5,83,0,0,419,421,3,50,25,0,420,418,1,0,0,0,420,419,1,0,
        0,0,421,53,1,0,0,0,422,423,6,27,-1,0,423,526,5,32,0,0,424,526,5,
        27,0,0,425,526,5,21,0,0,426,526,5,24,0,0,427,526,5,35,0,0,428,526,
        5,9,0,0,429,526,5,86,0,0,430,526,5,87,0,0,431,432,5,33,0,0,432,433,
        5,46,0,0,433,435,3,54,27,0,434,436,5,47,0,0,435,434,1,0,0,0,435,
        436,1,0,0,0,436,526,1,0,0,0,437,438,5,34,0,0,438,439,5,46,0,0,439,
        441,3,54,27,0,440,442,5,47,0,0,441,440,1,0,0,0,441,442,1,0,0,0,442,
        526,1,0,0,0,443,444,7,1,0,0,444,445,5,46,0,0,445,447,3,60,30,0,446,
        448,5,47,0,0,447,446,1,0,0,0,447,448,1,0,0,0,448,526,1,0,0,0,449,
        450,7,4,0,0,450,451,5,46,0,0,451,453,3,54,27,0,452,454,5,47,0,0,
        453,452,1,0,0,0,453,454,1,0,0,0,454,526,1,0,0,0,455,457,5,88,0,0,
        456,458,3,34,17,0,457,456,1,0,0,0,457,458,1,0,0,0,458,526,1,0,0,
        0,459,463,5,84,0,0,460,462,3,62,31,0,461,460,1,0,0,0,462,465,1,0,
        0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,466,1,0,0,0,465,463,1,0,
        0,0,466,526,5,95,0,0,467,471,5,85,0,0,468,470,3,64,32,0,469,468,
        1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,474,
        1,0,0,0,473,471,1,0,0,0,474,526,5,100,0,0,475,477,5,22,0,0,476,478,
        3,48,24,0,477,476,1,0,0,0,477,478,1,0,0,0,478,479,1,0,0,0,479,526,
        3,56,28,0,480,481,5,31,0,0,481,482,5,54,0,0,482,484,5,88,0,0,483,
        485,3,34,17,0,484,483,1,0,0,0,484,485,1,0,0,0,485,526,1,0,0,0,486,
        487,5,31,0,0,487,488,5,50,0,0,488,490,3,54,27,0,489,491,5,51,0,0,
        490,489,1,0,0,0,490,491,1,0,0,0,491,526,1,0,0,0,492,493,5,73,0,0,
        493,526,3,54,27,16,494,495,5,62,0,0,495,526,3,54,27,15,496,497,5,
        14,0,0,497,498,5,46,0,0,498,500,3,54,27,0,499,501,5,47,0,0,500,499,
        1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,503,3,54,27,0,503,504,
        5,6,0,0,504,505,3,54,27,4,505,526,1,0,0,0,506,507,5,19,0,0,507,508,
        5,46,0,0,508,509,3,52,26,0,509,510,5,59,0,0,510,512,3,54,27,0,511,
        513,5,47,0,0,512,511,1,0,0,0,512,513,1,0,0,0,513,514,1,0,0,0,514,
        515,3,54,27,3,515,526,1,0,0,0,516,517,3,32,16,0,517,518,5,65,0,0,
        518,519,3,54,27,2,519,526,1,0,0,0,520,521,5,46,0,0,521,523,3,54,
        27,0,522,524,5,47,0,0,523,522,1,0,0,0,523,524,1,0,0,0,524,526,1,
        0,0,0,525,422,1,0,0,0,525,424,1,0,0,0,525,425,1,0,0,0,525,426,1,
        0,0,0,525,427,1,0,0,0,525,428,1,0,0,0,525,429,1,0,0,0,525,430,1,
        0,0,0,525,431,1,0,0,0,525,437,1,0,0,0,525,443,1,0,0,0,525,449,1,
        0,0,0,525,455,1,0,0,0,525,459,1,0,0,0,525,467,1,0,0,0,525,475,1,
        0,0,0,525,480,1,0,0,0,525,486,1,0,0,0,525,492,1,0,0,0,525,494,1,
        0,0,0,525,496,1,0,0,0,525,506,1,0,0,0,525,516,1,0,0,0,525,520,1,
        0,0,0,526,580,1,0,0,0,527,528,10,14,0,0,528,529,5,74,0,0,529,579,
        3,54,27,14,530,531,10,13,0,0,531,532,7,5,0,0,532,579,3,54,27,14,
        533,537,10,12,0,0,534,538,5,72,0,0,535,536,4,27,8,0,536,538,5,73,
        0,0,537,534,1,0,0,0,537,535,1,0,0,0,538,539,1,0,0,0,539,579,3,54,
        27,13,540,541,10,11,0,0,541,542,7,6,0,0,542,579,3,54,27,12,543,544,
        10,9,0,0,544,545,7,7,0,0,545,579,3,54,27,10,546,547,10,8,0,0,547,
        548,5,70,0,0,548,579,3,54,27,9,549,550,10,7,0,0,550,551,5,71,0,0,
        551,579,3,54,27,8,552,553,10,6,0,0,553,554,5,80,0,0,554,579,3,54,
        27,7,555,556,10,5,0,0,556,557,5,56,0,0,557,579,3,54,27,5,558,559,
        10,22,0,0,559,579,3,56,28,0,560,561,10,19,0,0,561,562,7,8,0,0,562,
        564,5,88,0,0,563,565,3,34,17,0,564,563,1,0,0,0,564,565,1,0,0,0,565,
        579,1,0,0,0,566,567,10,18,0,0,567,568,4,27,18,0,568,569,5,50,0,0,
        569,571,3,54,27,0,570,572,5,51,0,0,571,570,1,0,0,0,571,572,1,0,0,
        0,572,579,1,0,0,0,573,574,10,17,0,0,574,579,5,57,0,0,575,576,10,
        10,0,0,576,577,7,9,0,0,577,579,3,48,24,0,578,527,1,0,0,0,578,530,
        1,0,0,0,578,533,1,0,0,0,578,540,1,0,0,0,578,543,1,0,0,0,578,546,
        1,0,0,0,578,549,1,0,0,0,578,552,1,0,0,0,578,555,1,0,0,0,578,558,
        1,0,0,0,578,560,1,0,0,0,578,566,1,0,0,0,578,573,1,0,0,0,578,575,
        1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,55,1,
        0,0,0,582,580,1,0,0,0,583,596,5,48,0,0,584,591,3,52,26,0,585,587,
        5,53,0,0,586,585,1,0,0,0,586,587,1,0,0,0,587,588,1,0,0,0,588,590,
        3,52,26,0,589,586,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,
        1,0,0,0,592,594,1,0,0,0,593,591,1,0,0,0,594,595,5,65,0,0,595,597,
        1,0,0,0,596,584,1,0,0,0,596,597,1,0,0,0,597,601,1,0,0,0,598,600,
        3,58,29,0,599,598,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,602,
        1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,0,604,606,5,49,0,0,605,604,
        1,0,0,0,605,606,1,0,0,0,606,57,1,0,0,0,607,609,3,18,9,0,608,607,
        1,0,0,0,609,612,1,0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,611,613,
        1,0,0,0,612,610,1,0,0,0,613,624,5,88,0,0,614,616,3,40,20,0,615,614,
        1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,618,5,59,0,0,618,625,
        3,54,27,0,619,621,3,56,28,0,620,619,1,0,0,0,621,622,1,0,0,0,622,
        620,1,0,0,0,622,623,1,0,0,0,623,625,1,0,0,0,624,615,1,0,0,0,624,
        620,1,0,0,0,625,693,1,0,0,0,626,627,3,30,15,0,627,628,5,59,0,0,628,
        629,3,54,27,0,629,693,1,0,0,0,630,631,5,52,0,0,631,633,3,54,27,0,
        632,634,5,51,0,0,633,632,1,0,0,0,633,634,1,0,0,0,634,636,1,0,0,0,
        635,637,5,51,0,0,636,635,1,0,0,0,636,637,1,0,0,0,637,645,1,0,0,0,
        638,639,5,59,0,0,639,646,3,54,27,0,640,642,3,56,28,0,641,640,1,0,
        0,0,642,643,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,646,1,0,
        0,0,645,638,1,0,0,0,645,641,1,0,0,0,646,693,1,0,0,0,647,648,5,50,
        0,0,648,650,3,54,27,0,649,651,5,51,0,0,650,649,1,0,0,0,650,651,1,
        0,0,0,651,653,1,0,0,0,652,654,5,51,0,0,653,652,1,0,0,0,653,654,1,
        0,0,0,654,662,1,0,0,0,655,656,5,59,0,0,656,663,3,54,27,0,657,659,
        3,56,28,0,658,657,1,0,0,0,659,660,1,0,0,0,660,658,1,0,0,0,660,661,
        1,0,0,0,661,663,1,0,0,0,662,655,1,0,0,0,662,658,1,0,0,0,663,693,
        1,0,0,0,664,693,3,54,27,0,665,666,7,10,0,0,666,693,3,54,27,0,667,
        668,5,38,0,0,668,669,5,46,0,0,669,671,3,54,27,0,670,672,5,47,0,0,
        671,670,1,0,0,0,671,672,1,0,0,0,672,673,1,0,0,0,673,676,3,56,28,
        0,674,675,5,6,0,0,675,677,3,56,28,0,676,674,1,0,0,0,676,677,1,0,
        0,0,677,693,1,0,0,0,678,679,5,11,0,0,679,680,5,46,0,0,680,683,3,
        52,26,0,681,682,5,53,0,0,682,684,3,52,26,0,683,681,1,0,0,0,683,684,
        1,0,0,0,684,685,1,0,0,0,685,686,5,17,0,0,686,688,3,54,27,0,687,689,
        5,47,0,0,688,687,1,0,0,0,688,689,1,0,0,0,689,690,1,0,0,0,690,691,
        3,56,28,0,691,693,1,0,0,0,692,610,1,0,0,0,692,626,1,0,0,0,692,630,
        1,0,0,0,692,647,1,0,0,0,692,664,1,0,0,0,692,665,1,0,0,0,692,667,
        1,0,0,0,692,678,1,0,0,0,693,59,1,0,0,0,694,700,5,84,0,0,695,699,
        5,99,0,0,696,699,5,98,0,0,697,699,5,97,0,0,698,695,1,0,0,0,698,696,
        1,0,0,0,698,697,1,0,0,0,699,702,1,0,0,0,700,698,1,0,0,0,700,701,
        1,0,0,0,701,703,1,0,0,0,702,700,1,0,0,0,703,704,5,95,0,0,704,61,
        1,0,0,0,705,706,5,96,0,0,706,707,3,54,27,0,707,708,5,47,0,0,708,
        717,1,0,0,0,709,713,5,99,0,0,710,713,5,98,0,0,711,713,5,97,0,0,712,
        709,1,0,0,0,712,710,1,0,0,0,712,711,1,0,0,0,713,714,1,0,0,0,714,
        712,1,0,0,0,714,715,1,0,0,0,715,717,1,0,0,0,716,705,1,0,0,0,716,
        712,1,0,0,0,717,63,1,0,0,0,718,719,5,101,0,0,719,720,3,54,27,0,720,
        721,5,47,0,0,721,731,1,0,0,0,722,727,5,105,0,0,723,727,5,104,0,0,
        724,727,5,103,0,0,725,727,5,102,0,0,726,722,1,0,0,0,726,723,1,0,
        0,0,726,724,1,0,0,0,726,725,1,0,0,0,727,728,1,0,0,0,728,726,1,0,
        0,0,728,729,1,0,0,0,729,731,1,0,0,0,730,718,1,0,0,0,730,726,1,0,
        0,0,731,65,1,0,0,0,732,733,7,11,0,0,733,67,1,0,0,0,118,75,79,88,
        93,100,104,110,115,123,129,132,141,144,149,154,159,165,169,176,180,
        184,187,192,202,208,211,216,222,228,235,237,239,242,247,253,258,
        264,268,273,278,281,284,290,295,298,301,306,313,322,327,331,334,
        341,346,350,359,364,371,376,379,382,386,398,403,407,409,411,416,
        420,435,441,447,453,457,463,471,477,484,490,500,512,523,525,537,
        564,571,578,580,586,591,596,601,605,610,615,622,624,633,636,643,
        645,650,653,660,662,671,676,683,688,692,698,700,712,714,716,726,
        728,730
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PklTsParser.__ATN) {
            PklTsParser.__ATN = new antlr.ATNDeserializer().deserialize(PklTsParser._serializedATN);
        }

        return PklTsParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PklTsParser.literalNames, PklTsParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PklTsParser.vocabulary;
    }

    private static readonly decisionsToDFA = PklTsParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ReplInputContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(PklTsParser.EOF, 0)!;
    }
    public moduleDecl(): ModuleDeclContext[];
    public moduleDecl(i: number): ModuleDeclContext | null;
    public moduleDecl(i?: number): ModuleDeclContext[] | ModuleDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModuleDeclContext);
        }

        return this.getRuleContext(i, ModuleDeclContext);
    }
    public importClause(): ImportClauseContext[];
    public importClause(i: number): ImportClauseContext | null;
    public importClause(i?: number): ImportClauseContext[] | ImportClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportClauseContext);
        }

        return this.getRuleContext(i, ImportClauseContext);
    }
    public clazz(): ClazzContext[];
    public clazz(i: number): ClazzContext | null;
    public clazz(i?: number): ClazzContext[] | ClazzContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClazzContext);
        }

        return this.getRuleContext(i, ClazzContext);
    }
    public typeAlias(): TypeAliasContext[];
    public typeAlias(i: number): TypeAliasContext | null;
    public typeAlias(i?: number): TypeAliasContext[] | TypeAliasContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeAliasContext);
        }

        return this.getRuleContext(i, TypeAliasContext);
    }
    public classProperty(): ClassPropertyContext[];
    public classProperty(i: number): ClassPropertyContext | null;
    public classProperty(i?: number): ClassPropertyContext[] | ClassPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassPropertyContext);
        }

        return this.getRuleContext(i, ClassPropertyContext);
    }
    public classMethod(): ClassMethodContext[];
    public classMethod(i: number): ClassMethodContext | null;
    public classMethod(i?: number): ClassMethodContext[] | ClassMethodContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassMethodContext);
        }

        return this.getRuleContext(i, ClassMethodContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_replInput;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterReplInput) {
             listener.enterReplInput(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitReplInput) {
             listener.exitReplInput(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitReplInput) {
            return visitor.visitReplInput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprInputContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(PklTsParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_exprInput;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterExprInput) {
             listener.enterExprInput(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitExprInput) {
             listener.exitExprInput(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitExprInput) {
            return visitor.visitExprInput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleContext extends antlr.ParserRuleContext {
    public _importClause?: ImportClauseContext;
    public _is: ImportClauseContext[] = [];
    public _clazz?: ClazzContext;
    public _cs: ClazzContext[] = [];
    public _typeAlias?: TypeAliasContext;
    public _ts: TypeAliasContext[] = [];
    public _classProperty?: ClassPropertyContext;
    public _ps: ClassPropertyContext[] = [];
    public _classMethod?: ClassMethodContext;
    public _ms: ClassMethodContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(PklTsParser.EOF, 0)!;
    }
    public moduleDecl(): ModuleDeclContext | null {
        return this.getRuleContext(0, ModuleDeclContext);
    }
    public importClause(): ImportClauseContext[];
    public importClause(i: number): ImportClauseContext | null;
    public importClause(i?: number): ImportClauseContext[] | ImportClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportClauseContext);
        }

        return this.getRuleContext(i, ImportClauseContext);
    }
    public clazz(): ClazzContext[];
    public clazz(i: number): ClazzContext | null;
    public clazz(i?: number): ClazzContext[] | ClazzContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClazzContext);
        }

        return this.getRuleContext(i, ClazzContext);
    }
    public typeAlias(): TypeAliasContext[];
    public typeAlias(i: number): TypeAliasContext | null;
    public typeAlias(i?: number): TypeAliasContext[] | TypeAliasContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeAliasContext);
        }

        return this.getRuleContext(i, TypeAliasContext);
    }
    public classProperty(): ClassPropertyContext[];
    public classProperty(i: number): ClassPropertyContext | null;
    public classProperty(i?: number): ClassPropertyContext[] | ClassPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassPropertyContext);
        }

        return this.getRuleContext(i, ClassPropertyContext);
    }
    public classMethod(): ClassMethodContext[];
    public classMethod(i: number): ClassMethodContext | null;
    public classMethod(i?: number): ClassMethodContext[] | ClassMethodContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassMethodContext);
        }

        return this.getRuleContext(i, ClassMethodContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_module;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModule) {
             listener.enterModule(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModule) {
             listener.exitModule(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleDeclContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public moduleHeader(): ModuleHeaderContext {
        return this.getRuleContext(0, ModuleHeaderContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public DocComment(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DocComment, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_moduleDecl;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModuleDecl) {
             listener.enterModuleDecl(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModuleDecl) {
             listener.exitModuleDecl(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModuleDecl) {
            return visitor.visitModuleDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MODULE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.MODULE, 0);
    }
    public qualifiedIdentifier(): QualifiedIdentifierContext | null {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public moduleExtendsOrAmendsClause(): ModuleExtendsOrAmendsClauseContext | null {
        return this.getRuleContext(0, ModuleExtendsOrAmendsClauseContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_moduleHeader;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModuleHeader) {
             listener.enterModuleHeader(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModuleHeader) {
             listener.exitModuleHeader(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModuleHeader) {
            return visitor.visitModuleHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleExtendsOrAmendsClauseContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringConstant(): StringConstantContext {
        return this.getRuleContext(0, StringConstantContext)!;
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.EXTENDS, 0);
    }
    public AMENDS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.AMENDS, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_moduleExtendsOrAmendsClause;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModuleExtendsOrAmendsClause) {
             listener.enterModuleExtendsOrAmendsClause(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModuleExtendsOrAmendsClause) {
             listener.exitModuleExtendsOrAmendsClause(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModuleExtendsOrAmendsClause) {
            return visitor.visitModuleExtendsOrAmendsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImportClauseContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringConstant(): StringConstantContext {
        return this.getRuleContext(0, StringConstantContext)!;
    }
    public IMPORT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IMPORT, 0);
    }
    public IMPORT_GLOB(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IMPORT_GLOB, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.AS, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.Identifier, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_importClause;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterImportClause) {
             listener.enterImportClause(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitImportClause) {
             listener.exitImportClause(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitImportClause) {
            return visitor.visitImportClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClazzContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classHeader(): ClassHeaderContext {
        return this.getRuleContext(0, ClassHeaderContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public classBody(): ClassBodyContext | null {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public DocComment(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DocComment, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_clazz;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterClazz) {
             listener.enterClazz(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitClazz) {
             listener.exitClazz(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitClazz) {
            return visitor.visitClazz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(PklTsParser.CLASS, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public typeParameterList(): TypeParameterListContext | null {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.EXTENDS, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_classHeader;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterClassHeader) {
             listener.enterClassHeader(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitClassHeader) {
             listener.exitClassHeader(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitClassHeader) {
            return visitor.visitClassHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.EXTERNAL, 0);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ABSTRACT, 0);
    }
    public OPEN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.OPEN, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.LOCAL, 0);
    }
    public HIDDEN_(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.HIDDEN_, 0);
    }
    public FIXED(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.FIXED, 0);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.CONST, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_modifier;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModifier) {
             listener.enterModifier(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModifier) {
             listener.exitModifier(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassBodyContext extends antlr.ParserRuleContext {
    public _classProperty?: ClassPropertyContext;
    public _ps: ClassPropertyContext[] = [];
    public _classMethod?: ClassMethodContext;
    public _ms: ClassMethodContext[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RBRACE, 0);
    }
    public classProperty(): ClassPropertyContext[];
    public classProperty(i: number): ClassPropertyContext | null;
    public classProperty(i?: number): ClassPropertyContext[] | ClassPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassPropertyContext);
        }

        return this.getRuleContext(i, ClassPropertyContext);
    }
    public classMethod(): ClassMethodContext[];
    public classMethod(i: number): ClassMethodContext | null;
    public classMethod(i?: number): ClassMethodContext[] | ClassMethodContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassMethodContext);
        }

        return this.getRuleContext(i, ClassMethodContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_classBody;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterClassBody) {
             listener.enterClassBody(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitClassBody) {
             listener.exitClassBody(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAliasContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeAliasHeader(): TypeAliasHeaderContext {
        return this.getRuleContext(0, TypeAliasHeaderContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ASSIGN, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public DocComment(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DocComment, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeAlias;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeAlias) {
             listener.enterTypeAlias(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeAlias) {
             listener.exitTypeAlias(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAliasHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE_ALIAS(): antlr.TerminalNode {
        return this.getToken(PklTsParser.TYPE_ALIAS, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public typeParameterList(): TypeParameterListContext | null {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeAliasHeader;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeAliasHeader) {
             listener.enterTypeAliasHeader(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeAliasHeader) {
             listener.exitTypeAliasHeader(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeAliasHeader) {
            return visitor.visitTypeAliasHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassPropertyContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public DocComment(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DocComment, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ASSIGN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public objectBody(): ObjectBodyContext[];
    public objectBody(i: number): ObjectBodyContext | null;
    public objectBody(i?: number): ObjectBodyContext[] | ObjectBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectBodyContext);
        }

        return this.getRuleContext(i, ObjectBodyContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_classProperty;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterClassProperty) {
             listener.enterClassProperty(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitClassProperty) {
             listener.exitClassProperty(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitClassProperty) {
            return visitor.visitClassProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassMethodContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodHeader(): MethodHeaderContext {
        return this.getRuleContext(0, MethodHeaderContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ASSIGN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public DocComment(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DocComment, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_classMethod;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterClassMethod) {
             listener.enterClassMethod(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitClassMethod) {
             listener.exitClassMethod(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitClassMethod) {
            return visitor.visitClassMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCTION(): antlr.TerminalNode {
        return this.getToken(PklTsParser.FUNCTION, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public typeParameterList(): TypeParameterListContext | null {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_methodHeader;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterMethodHeader) {
             listener.enterMethodHeader(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitMethodHeader) {
             listener.exitMethodHeader(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitMethodHeader) {
            return visitor.visitMethodHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public _parameter?: ParameterContext;
    public _ts: ParameterContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_parameterList;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public _expr?: ExprContext;
    public _es: ExprContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_argumentList;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterArgumentList) {
             listener.enterArgumentList(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitArgumentList) {
             listener.exitArgumentList(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(PklTsParser.AT, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public objectBody(): ObjectBodyContext | null {
        return this.getRuleContext(0, ObjectBodyContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_annotation;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterAnnotation) {
             listener.enterAnnotation(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitAnnotation) {
             listener.exitAnnotation(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedIdentifierContext extends antlr.ParserRuleContext {
    public _Identifier?: Token | null;
    public _ts: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode[];
    public Identifier(i: number): antlr.TerminalNode | null;
    public Identifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.Identifier);
    	} else {
    		return this.getToken(PklTsParser.Identifier, i);
    	}
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.DOT);
    	} else {
    		return this.getToken(PklTsParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_qualifiedIdentifier;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterQualifiedIdentifier) {
             listener.enterQualifiedIdentifier(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitQualifiedIdentifier) {
             listener.exitQualifiedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(PklTsParser.COLON, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeAnnotation;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeAnnotation) {
             listener.enterTypeAnnotation(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeAnnotation) {
             listener.exitTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParameterListContext extends antlr.ParserRuleContext {
    public _typeParameter?: TypeParameterContext;
    public _ts: TypeParameterContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LT, 0)!;
    }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext | null;
    public typeParameter(i?: number): TypeParameterContext[] | TypeParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }

        return this.getRuleContext(i, TypeParameterContext);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.GT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeParameterList;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeParameterList) {
             listener.enterTypeParameterList(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeParameterList) {
             listener.exitTypeParameterList(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameterList) {
            return visitor.visitTypeParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParameterContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IN, 0);
    }
    public OUT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.OUT, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeParameter;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeParameter) {
             listener.enterTypeParameter(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeParameter) {
             listener.exitTypeParameter(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentListContext extends antlr.ParserRuleContext {
    public _type_?: TypeContext;
    public _ts: TypeContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LT, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.GT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typeArgumentList;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeArgumentList) {
             listener.enterTypeArgumentList(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeArgumentList) {
             listener.exitTypeArgumentList(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArgumentList) {
            return visitor.visitTypeArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_type;
    }
    public override copyFrom(ctx: TypeContext): void {
        super.copyFrom(ctx);
    }
}
export class DefaultUnionTypeContext extends TypeContext {
    public _u?: TypeContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(PklTsParser.STAR, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterDefaultUnionType) {
             listener.enterDefaultUnionType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitDefaultUnionType) {
             listener.exitDefaultUnionType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitDefaultUnionType) {
            return visitor.visitDefaultUnionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODULE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.MODULE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModuleType) {
             listener.enterModuleType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModuleType) {
             listener.exitModuleType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModuleType) {
            return visitor.visitModuleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stringConstant(): StringConstantContext {
        return this.getRuleContext(0, StringConstantContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterStringLiteralType) {
             listener.enterStringLiteralType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitStringLiteralType) {
             listener.exitStringLiteralType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteralType) {
            return visitor.visitStringLiteralType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NothingTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOTHING(): antlr.TerminalNode {
        return this.getToken(PklTsParser.NOTHING, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNothingType) {
             listener.enterNothingType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNothingType) {
             listener.exitNothingType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNothingType) {
            return visitor.visitNothingType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullableTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public QUESTION(): antlr.TerminalNode {
        return this.getToken(PklTsParser.QUESTION, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNullableType) {
             listener.enterNullableType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNullableType) {
             listener.exitNullableType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNullableType) {
            return visitor.visitNullableType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedTypeContext extends TypeContext {
    public _err?: Token | null;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterParenthesizedType) {
             listener.enterParenthesizedType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitParenthesizedType) {
             listener.exitParenthesizedType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedType) {
            return visitor.visitParenthesizedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeclaredTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedIdentifier(): QualifiedIdentifierContext {
        return this.getRuleContext(0, QualifiedIdentifierContext)!;
    }
    public typeArgumentList(): TypeArgumentListContext | null {
        return this.getRuleContext(0, TypeArgumentListContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterDeclaredType) {
             listener.enterDeclaredType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitDeclaredType) {
             listener.exitDeclaredType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitDeclaredType) {
            return visitor.visitDeclaredType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionTypeContext extends TypeContext {
    public _t?: Token | null;
    public _type_?: TypeContext;
    public _ps: TypeContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public _r?: TypeContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ARROW, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterFunctionType) {
             listener.enterFunctionType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitFunctionType) {
             listener.exitFunctionType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstrainedTypeContext extends TypeContext {
    public _t?: Token | null;
    public _expr?: ExprContext;
    public _es: ExprContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterConstrainedType) {
             listener.enterConstrainedType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitConstrainedType) {
             listener.exitConstrainedType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitConstrainedType) {
            return visitor.visitConstrainedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnknownTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UNKNOWN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.UNKNOWN, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterUnknownType) {
             listener.enterUnknownType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitUnknownType) {
             listener.exitUnknownType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitUnknownType) {
            return visitor.visitUnknownType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnionTypeContext extends TypeContext {
    public _l?: TypeContext;
    public _r?: TypeContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(PklTsParser.UNION, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterUnionType) {
             listener.enterUnionType(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitUnionType) {
             listener.exitUnionType(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitUnionType) {
            return visitor.visitUnionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_typedIdentifier;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypedIdentifier) {
             listener.enterTypedIdentifier(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypedIdentifier) {
             listener.exitTypedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypedIdentifier) {
            return visitor.visitTypedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.UNDERSCORE, 0);
    }
    public typedIdentifier(): TypedIdentifierContext | null {
        return this.getRuleContext(0, TypedIdentifierContext);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_parameter;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class NewExprContext extends ExprContext {
    public _t?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public objectBody(): ObjectBodyContext {
        return this.getRuleContext(0, ObjectBodyContext)!;
    }
    public NEW(): antlr.TerminalNode {
        return this.getToken(PklTsParser.NEW, 0)!;
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNewExpr) {
             listener.enterNewExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNewExpr) {
             listener.exitNewExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNewExpr) {
            return visitor.visitNewExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ThisExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public THIS(): antlr.TerminalNode {
        return this.getToken(PklTsParser.THIS, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterThisExpr) {
             listener.enterThisExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitThisExpr) {
             listener.exitThisExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitThisExpr) {
            return visitor.visitThisExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PipeExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public PIPE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.PIPE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterPipeExpr) {
             listener.enterPipeExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitPipeExpr) {
             listener.exitPipeExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitPipeExpr) {
            return visitor.visitPipeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExponentiationExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public POW(): antlr.TerminalNode {
        return this.getToken(PklTsParser.POW, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterExponentiationExpr) {
             listener.enterExponentiationExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitExponentiationExpr) {
             listener.exitExponentiationExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitExponentiationExpr) {
            return visitor.visitExponentiationExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LBRACK, 0)!;
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RBRACK, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterSubscriptExpr) {
             listener.enterSubscriptExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitSubscriptExpr) {
             listener.exitSubscriptExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitSubscriptExpr) {
            return visitor.visitSubscriptExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnqualifiedAccessExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterUnqualifiedAccessExpr) {
             listener.enterUnqualifiedAccessExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitUnqualifiedAccessExpr) {
             listener.exitUnqualifiedAccessExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitUnqualifiedAccessExpr) {
            return visitor.visitUnqualifiedAccessExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TrueLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.TRUE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTrueLiteral) {
             listener.enterTrueLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTrueLiteral) {
             listener.exitTrueLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTrueLiteral) {
            return visitor.visitTrueLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.MINUS, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterAdditiveExpr) {
             listener.enterAdditiveExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitAdditiveExpr) {
             listener.exitAdditiveExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitAdditiveExpr) {
            return visitor.visitAdditiveExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LetExprContext extends ExprContext {
    public _l?: ExprContext;
    public _err?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LET, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public parameter(): ParameterContext {
        return this.getRuleContext(0, ParameterContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ASSIGN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterLetExpr) {
             listener.enterLetExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitLetExpr) {
             listener.exitLetExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitLetExpr) {
            return visitor.visitLetExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalNotExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(PklTsParser.NOT, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterLogicalNotExpr) {
             listener.enterLogicalNotExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitLogicalNotExpr) {
             listener.exitLogicalNotExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNotExpr) {
            return visitor.visitLogicalNotExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FalseLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.FALSE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterFalseLiteral) {
             listener.enterFalseLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitFalseLiteral) {
             listener.exitFalseLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitFalseLiteral) {
            return visitor.visitFalseLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryMinusExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(PklTsParser.MINUS, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterUnaryMinusExpr) {
             listener.enterUnaryMinusExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitUnaryMinusExpr) {
             listener.exitUnaryMinusExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryMinusExpr) {
            return visitor.visitUnaryMinusExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExprContext extends ExprContext {
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterParenthesizedExpr) {
             listener.enterParenthesizedExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitParenthesizedExpr) {
             listener.exitParenthesizedExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpr) {
            return visitor.visitParenthesizedExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FloatLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FloatLiteral(): antlr.TerminalNode {
        return this.getToken(PklTsParser.FloatLiteral, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterFloatLiteral) {
             listener.enterFloatLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitFloatLiteral) {
             listener.exitFloatLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfExprContext extends ExprContext {
    public _c?: ExprContext;
    public _err?: Token | null;
    public _l?: ExprContext;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(PklTsParser.IF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ELSE, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterIfExpr) {
             listener.enterIfExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitIfExpr) {
             listener.exitIfExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODULE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.MODULE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterModuleExpr) {
             listener.enterModuleExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitModuleExpr) {
             listener.exitModuleExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitModuleExpr) {
            return visitor.visitModuleExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ImportExprContext extends ExprContext {
    public _t?: Token | null;
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public stringConstant(): StringConstantContext {
        return this.getRuleContext(0, StringConstantContext)!;
    }
    public IMPORT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IMPORT, 0);
    }
    public IMPORT_GLOB(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IMPORT_GLOB, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterImportExpr) {
             listener.enterImportExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitImportExpr) {
             listener.exitImportExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitImportExpr) {
            return visitor.visitImportExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleLineStringLiteralContext extends ExprContext {
    public _t?: Token | null;
    public _t2?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SLQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SLQuote, 0)!;
    }
    public SLEndQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SLEndQuote, 0)!;
    }
    public singleLineStringPart(): SingleLineStringPartContext[];
    public singleLineStringPart(i: number): SingleLineStringPartContext | null;
    public singleLineStringPart(i?: number): SingleLineStringPartContext[] | SingleLineStringPartContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleLineStringPartContext);
        }

        return this.getRuleContext(i, SingleLineStringPartContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterSingleLineStringLiteral) {
             listener.enterSingleLineStringLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitSingleLineStringLiteral) {
             listener.exitSingleLineStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitSingleLineStringLiteral) {
            return visitor.visitSingleLineStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ThrowExprContext extends ExprContext {
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public THROW(): antlr.TerminalNode {
        return this.getToken(PklTsParser.THROW, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterThrowExpr) {
             listener.enterThrowExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitThrowExpr) {
             listener.exitThrowExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitThrowExpr) {
            return visitor.visitThrowExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(PklTsParser.NULL, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(PklTsParser.AND, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterLogicalAndExpr) {
             listener.enterLogicalAndExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitLogicalAndExpr) {
             listener.exitLogicalAndExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalAndExpr) {
            return visitor.visitLogicalAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IntLiteral(): antlr.TerminalNode {
        return this.getToken(PklTsParser.IntLiteral, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterIntLiteral) {
             listener.enterIntLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitIntLiteral) {
             listener.exitIntLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitIntLiteral) {
            return visitor.visitIntLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReadExprContext extends ExprContext {
    public _t?: Token | null;
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public READ(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.READ, 0);
    }
    public READ_OR_NULL(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.READ_OR_NULL, 0);
    }
    public READ_GLOB(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.READ_GLOB, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterReadExpr) {
             listener.enterReadExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitReadExpr) {
             listener.exitReadExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitReadExpr) {
            return visitor.visitReadExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullCoalesceExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COALESCE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.COALESCE, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNullCoalesceExpr) {
             listener.enterNullCoalesceExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNullCoalesceExpr) {
             listener.exitNullCoalesceExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNullCoalesceExpr) {
            return visitor.visitNullCoalesceExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.GT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.LTE, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.GTE, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterComparisonExpr) {
             listener.enterComparisonExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitComparisonExpr) {
             listener.exitComparisonExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonExpr) {
            return visitor.visitComparisonExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiLineStringLiteralContext extends ExprContext {
    public _t?: Token | null;
    public _t2?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MLQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.MLQuote, 0)!;
    }
    public MLEndQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.MLEndQuote, 0)!;
    }
    public multiLineStringPart(): MultiLineStringPartContext[];
    public multiLineStringPart(i: number): MultiLineStringPartContext | null;
    public multiLineStringPart(i?: number): MultiLineStringPartContext[] | MultiLineStringPartContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringPartContext);
        }

        return this.getRuleContext(i, MultiLineStringPartContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterMultiLineStringLiteral) {
             listener.enterMultiLineStringLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitMultiLineStringLiteral) {
             listener.exitMultiLineStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitMultiLineStringLiteral) {
            return visitor.visitMultiLineStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(PklTsParser.OR, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterLogicalOrExpr) {
             listener.enterLogicalOrExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitLogicalOrExpr) {
             listener.exitLogicalOrExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalOrExpr) {
            return visitor.visitLogicalOrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeTestExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: TypeContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.IS, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.AS, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTypeTestExpr) {
             listener.enterTypeTestExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTypeTestExpr) {
             listener.exitTypeTestExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTypeTestExpr) {
            return visitor.visitTypeTestExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SuperSubscriptExprContext extends ExprContext {
    public _t?: Token | null;
    public _e?: ExprContext;
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SUPER(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SUPER, 0)!;
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LBRACK, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RBRACK, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterSuperSubscriptExpr) {
             listener.enterSuperSubscriptExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitSuperSubscriptExpr) {
             listener.exitSuperSubscriptExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitSuperSubscriptExpr) {
            return visitor.visitSuperSubscriptExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SuperAccessExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SUPER(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SUPER, 0)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(PklTsParser.DOT, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterSuperAccessExpr) {
             listener.enterSuperAccessExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitSuperAccessExpr) {
             listener.exitSuperAccessExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitSuperAccessExpr) {
            return visitor.visitSuperAccessExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ARROW, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterFunctionLiteral) {
             listener.enterFunctionLiteral(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitFunctionLiteral) {
             listener.exitFunctionLiteral(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionLiteral) {
            return visitor.visitFunctionLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OuterExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OUTER(): antlr.TerminalNode {
        return this.getToken(PklTsParser.OUTER, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterOuterExpr) {
             listener.enterOuterExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitOuterExpr) {
             listener.exitOuterExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitOuterExpr) {
            return visitor.visitOuterExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.STAR, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DIV, 0);
    }
    public INT_DIV(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.INT_DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.MOD, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterMultiplicativeExpr) {
             listener.enterMultiplicativeExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitMultiplicativeExpr) {
             listener.exitMultiplicativeExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitMultiplicativeExpr) {
            return visitor.visitMultiplicativeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedAccessExprContext extends ExprContext {
    public _t?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DOT, 0);
    }
    public QDOT(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.QDOT, 0);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterQualifiedAccessExpr) {
             listener.enterQualifiedAccessExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitQualifiedAccessExpr) {
             listener.exitQualifiedAccessExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedAccessExpr) {
            return visitor.visitQualifiedAccessExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TraceExprContext extends ExprContext {
    public _err?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRACE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.TRACE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterTraceExpr) {
             listener.enterTraceExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitTraceExpr) {
             listener.exitTraceExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitTraceExpr) {
            return visitor.visitTraceExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExprContext extends ExprContext {
    public _l?: ExprContext;
    public _t?: Token | null;
    public _r?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.EQUAL, 0);
    }
    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.NOT_EQUAL, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterEqualityExpr) {
             listener.enterEqualityExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitEqualityExpr) {
             listener.exitEqualityExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitEqualityExpr) {
            return visitor.visitEqualityExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AmendExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public objectBody(): ObjectBodyContext {
        return this.getRuleContext(0, ObjectBodyContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterAmendExpr) {
             listener.enterAmendExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitAmendExpr) {
             listener.exitAmendExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitAmendExpr) {
            return visitor.visitAmendExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonNullExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public NON_NULL(): antlr.TerminalNode {
        return this.getToken(PklTsParser.NON_NULL, 0)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterNonNullExpr) {
             listener.enterNonNullExpr(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitNonNullExpr) {
             listener.exitNonNullExpr(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitNonNullExpr) {
            return visitor.visitNonNullExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectBodyContext extends antlr.ParserRuleContext {
    public _parameter?: ParameterContext;
    public _ps: ParameterContext[] = [];
    public _s53?: Token | null;
    public _errs: antlr.Token[] = [];
    public _err?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LBRACE, 0)!;
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ARROW, 0);
    }
    public objectMember(): ObjectMemberContext[];
    public objectMember(i: number): ObjectMemberContext | null;
    public objectMember(i?: number): ObjectMemberContext[] | ObjectMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectMemberContext);
        }

        return this.getRuleContext(i, ObjectMemberContext);
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RBRACE, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.COMMA);
    	} else {
    		return this.getToken(PklTsParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_objectBody;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectBody) {
             listener.enterObjectBody(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectBody) {
             listener.exitObjectBody(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectBody) {
            return visitor.visitObjectBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_objectMember;
    }
    public override copyFrom(ctx: ObjectMemberContext): void {
        super.copyFrom(ctx);
    }
}
export class WhenGeneratorContext extends ObjectMemberContext {
    public _e?: ExprContext;
    public _err?: Token | null;
    public _b1?: ObjectBodyContext;
    public _b2?: ObjectBodyContext;
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.WHEN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public objectBody(): ObjectBodyContext[];
    public objectBody(i: number): ObjectBodyContext | null;
    public objectBody(i?: number): ObjectBodyContext[] | ObjectBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectBodyContext);
        }

        return this.getRuleContext(i, ObjectBodyContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ELSE, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterWhenGenerator) {
             listener.enterWhenGenerator(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitWhenGenerator) {
             listener.exitWhenGenerator(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitWhenGenerator) {
            return visitor.visitWhenGenerator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberPredicateContext extends ObjectMemberContext {
    public _t?: Token | null;
    public _k?: ExprContext;
    public _err1?: Token | null;
    public _err2?: Token | null;
    public _v?: ExprContext;
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPRED(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPRED, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ASSIGN, 0);
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.RBRACK);
    	} else {
    		return this.getToken(PklTsParser.RBRACK, i);
    	}
    }
    public objectBody(): ObjectBodyContext[];
    public objectBody(i: number): ObjectBodyContext | null;
    public objectBody(i?: number): ObjectBodyContext[] | ObjectBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectBodyContext);
        }

        return this.getRuleContext(i, ObjectBodyContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterMemberPredicate) {
             listener.enterMemberPredicate(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitMemberPredicate) {
             listener.exitMemberPredicate(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitMemberPredicate) {
            return visitor.visitMemberPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectSpreadContext extends ObjectMemberContext {
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SPREAD(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.SPREAD, 0);
    }
    public QSPREAD(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.QSPREAD, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectSpread) {
             listener.enterObjectSpread(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectSpread) {
             listener.exitObjectSpread(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectSpread) {
            return visitor.visitObjectSpread(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForGeneratorContext extends ObjectMemberContext {
    public _t1?: ParameterContext;
    public _t2?: ParameterContext;
    public _e?: ExprContext;
    public _err?: Token | null;
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(PklTsParser.FOR, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LPAREN, 0)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.IN, 0)!;
    }
    public objectBody(): ObjectBodyContext {
        return this.getRuleContext(0, ObjectBodyContext)!;
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.COMMA, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterForGenerator) {
             listener.enterForGenerator(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitForGenerator) {
             listener.exitForGenerator(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitForGenerator) {
            return visitor.visitForGenerator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectPropertyContext extends ObjectMemberContext {
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(PklTsParser.Identifier, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ASSIGN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public objectBody(): ObjectBodyContext[];
    public objectBody(i: number): ObjectBodyContext | null;
    public objectBody(i?: number): ObjectBodyContext[] | ObjectBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectBodyContext);
        }

        return this.getRuleContext(i, ObjectBodyContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectProperty) {
             listener.enterObjectProperty(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectProperty) {
             listener.exitObjectProperty(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectProperty) {
            return visitor.visitObjectProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectElementContext extends ObjectMemberContext {
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectElement) {
             listener.enterObjectElement(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectElement) {
             listener.exitObjectElement(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectElement) {
            return visitor.visitObjectElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectMethodContext extends ObjectMemberContext {
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public methodHeader(): MethodHeaderContext {
        return this.getRuleContext(0, MethodHeaderContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(PklTsParser.ASSIGN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectMethod) {
             listener.enterObjectMethod(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectMethod) {
             listener.exitObjectMethod(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectMethod) {
            return visitor.visitObjectMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectEntryContext extends ObjectMemberContext {
    public _t?: Token | null;
    public _k?: ExprContext;
    public _err1?: Token | null;
    public _err2?: Token | null;
    public _v?: ExprContext;
    public constructor(ctx: ObjectMemberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(PklTsParser.LBRACK, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.ASSIGN, 0);
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.RBRACK);
    	} else {
    		return this.getToken(PklTsParser.RBRACK, i);
    	}
    }
    public objectBody(): ObjectBodyContext[];
    public objectBody(i: number): ObjectBodyContext | null;
    public objectBody(i?: number): ObjectBodyContext[] | ObjectBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectBodyContext);
        }

        return this.getRuleContext(i, ObjectBodyContext);
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterObjectEntry) {
             listener.enterObjectEntry(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitObjectEntry) {
             listener.exitObjectEntry(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitObjectEntry) {
            return visitor.visitObjectEntry(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringConstantContext extends antlr.ParserRuleContext {
    public _t?: Token | null;
    public _SLCharacters?: Token | null;
    public _ts: antlr.Token[] = [];
    public _SLCharacterEscape?: Token | null;
    public _SLUnicodeEscape?: Token | null;
    public _t2?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SLQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SLQuote, 0)!;
    }
    public SLEndQuote(): antlr.TerminalNode {
        return this.getToken(PklTsParser.SLEndQuote, 0)!;
    }
    public SLCharacters(): antlr.TerminalNode[];
    public SLCharacters(i: number): antlr.TerminalNode | null;
    public SLCharacters(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLCharacters);
    	} else {
    		return this.getToken(PklTsParser.SLCharacters, i);
    	}
    }
    public SLCharacterEscape(): antlr.TerminalNode[];
    public SLCharacterEscape(i: number): antlr.TerminalNode | null;
    public SLCharacterEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLCharacterEscape);
    	} else {
    		return this.getToken(PklTsParser.SLCharacterEscape, i);
    	}
    }
    public SLUnicodeEscape(): antlr.TerminalNode[];
    public SLUnicodeEscape(i: number): antlr.TerminalNode | null;
    public SLUnicodeEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLUnicodeEscape);
    	} else {
    		return this.getToken(PklTsParser.SLUnicodeEscape, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_stringConstant;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterStringConstant) {
             listener.enterStringConstant(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitStringConstant) {
             listener.exitStringConstant(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitStringConstant) {
            return visitor.visitStringConstant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleLineStringPartContext extends antlr.ParserRuleContext {
    public _e?: ExprContext;
    public _SLCharacters?: Token | null;
    public _ts: antlr.Token[] = [];
    public _SLCharacterEscape?: Token | null;
    public _SLUnicodeEscape?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SLInterpolation(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.SLInterpolation, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public SLCharacters(): antlr.TerminalNode[];
    public SLCharacters(i: number): antlr.TerminalNode | null;
    public SLCharacters(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLCharacters);
    	} else {
    		return this.getToken(PklTsParser.SLCharacters, i);
    	}
    }
    public SLCharacterEscape(): antlr.TerminalNode[];
    public SLCharacterEscape(i: number): antlr.TerminalNode | null;
    public SLCharacterEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLCharacterEscape);
    	} else {
    		return this.getToken(PklTsParser.SLCharacterEscape, i);
    	}
    }
    public SLUnicodeEscape(): antlr.TerminalNode[];
    public SLUnicodeEscape(i: number): antlr.TerminalNode | null;
    public SLUnicodeEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.SLUnicodeEscape);
    	} else {
    		return this.getToken(PklTsParser.SLUnicodeEscape, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_singleLineStringPart;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterSingleLineStringPart) {
             listener.enterSingleLineStringPart(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitSingleLineStringPart) {
             listener.exitSingleLineStringPart(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitSingleLineStringPart) {
            return visitor.visitSingleLineStringPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiLineStringPartContext extends antlr.ParserRuleContext {
    public _e?: ExprContext;
    public _MLCharacters?: Token | null;
    public _ts: antlr.Token[] = [];
    public _MLNewline?: Token | null;
    public _MLCharacterEscape?: Token | null;
    public _MLUnicodeEscape?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MLInterpolation(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.MLInterpolation, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RPAREN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public MLCharacters(): antlr.TerminalNode[];
    public MLCharacters(i: number): antlr.TerminalNode | null;
    public MLCharacters(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.MLCharacters);
    	} else {
    		return this.getToken(PklTsParser.MLCharacters, i);
    	}
    }
    public MLNewline(): antlr.TerminalNode[];
    public MLNewline(i: number): antlr.TerminalNode | null;
    public MLNewline(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.MLNewline);
    	} else {
    		return this.getToken(PklTsParser.MLNewline, i);
    	}
    }
    public MLCharacterEscape(): antlr.TerminalNode[];
    public MLCharacterEscape(i: number): antlr.TerminalNode | null;
    public MLCharacterEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.MLCharacterEscape);
    	} else {
    		return this.getToken(PklTsParser.MLCharacterEscape, i);
    	}
    }
    public MLUnicodeEscape(): antlr.TerminalNode[];
    public MLUnicodeEscape(i: number): antlr.TerminalNode | null;
    public MLUnicodeEscape(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PklTsParser.MLUnicodeEscape);
    	} else {
    		return this.getToken(PklTsParser.MLUnicodeEscape, i);
    	}
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_multiLineStringPart;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterMultiLineStringPart) {
             listener.enterMultiLineStringPart(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitMultiLineStringPart) {
             listener.exitMultiLineStringPart(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitMultiLineStringPart) {
            return visitor.visitMultiLineStringPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROTECTED(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.PROTECTED, 0);
    }
    public OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.OVERRIDE, 0);
    }
    public RECORD(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.RECORD, 0);
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.DELETE, 0);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.CASE, 0);
    }
    public SWITCH(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.SWITCH, 0);
    }
    public VARARG(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.VARARG, 0);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(PklTsParser.CONST, 0);
    }
    public override get ruleIndex(): number {
        return PklTsParser.RULE_reservedKeyword;
    }
    public override enterRule(listener: PklTsParserListener): void {
        if(listener.enterReservedKeyword) {
             listener.enterReservedKeyword(this);
        }
    }
    public override exitRule(listener: PklTsParserListener): void {
        if(listener.exitReservedKeyword) {
             listener.exitReservedKeyword(this);
        }
    }
    public override accept<Result>(visitor: PklTsParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeyword) {
            return visitor.visitReservedKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

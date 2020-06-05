// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var Raw = { };

function parse(value) {
  return {
          nonrecursiveInput: value.nonrecursiveInput
        };
}

function serialize(value) {
  return {
          nonrecursiveInput: value.nonrecursiveInput
        };
}

function serializeInputObjectEmbeddedInput(inp) {
  var a = inp.field;
  return {
          field: a !== undefined ? a : undefined
        };
}

function serializeInputObjectNonrecursiveInput(inp) {
  var a = inp.nullableArray;
  var a$1 = inp.field;
  var a$2 = inp.enum;
  var a$3 = inp.embeddedInput;
  var a$4 = inp.custom;
  return {
          nonNullableField: inp.nonNullableField,
          nullableArray: a !== undefined ? $$Array.map((function (b) {
                    if (b !== undefined) {
                      return b;
                    }
                    
                  }), a) : undefined,
          field: a$1 !== undefined ? a$1 : undefined,
          enum: a$2 !== undefined ? (
              a$2 !== 225952583 ? (
                  a$2 >= 382368628 ? "SECOND" : "FIRST"
                ) : "THIRD"
            ) : undefined,
          embeddedInput: a$3 !== undefined ? $$Array.map((function (b) {
                    if (b !== undefined) {
                      return serializeInputObjectEmbeddedInput(Caml_option.valFromOption(b));
                    }
                    
                  }), a$3) : undefined,
          custom: a$4 !== undefined ? Caml_option.valFromOption(a$4) : undefined
        };
}

function serializeVariables(inp) {
  return {
          arg: serializeInputObjectNonrecursiveInput(inp.arg)
        };
}

function makeVariables(arg, param) {
  return serializeVariables({
              arg: arg
            });
}

function makeInputObjectNonrecursiveInput(nonNullableField, nullableArray, field, $$enum, embeddedInput, custom, param) {
  return {
          nonNullableField: nonNullableField,
          nullableArray: nullableArray,
          field: field,
          enum: $$enum,
          embeddedInput: embeddedInput,
          custom: custom
        };
}

function makeInputObjectEmbeddedInput(field, param) {
  return {
          field: field
        };
}

var Z__INTERNAL = {
  _graphql_NonrecursiveInput_49: 0,
  graphql_module: 0
};

var MyQuery = {
  Raw: Raw,
  query: "query ($arg: NonrecursiveInput!)  {\nnonrecursiveInput(arg: $arg)  \n}\n",
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  serializeInputObjectNonrecursiveInput: serializeInputObjectNonrecursiveInput,
  serializeInputObjectEmbeddedInput: serializeInputObjectEmbeddedInput,
  makeVariables: makeVariables,
  makeInputObjectNonrecursiveInput: makeInputObjectNonrecursiveInput,
  makeInputObjectEmbeddedInput: makeInputObjectEmbeddedInput,
  Z__INTERNAL: Z__INTERNAL
};

exports.MyQuery = MyQuery;
/* No side effect */

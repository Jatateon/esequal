// jshint esversion: 6, node: true
"use strict";
if (typeof require !== 'undefined' && typeof equal === 'undefined') {
    var equal = require( './esequal' );
}
console.log('equal()');

console.log( 'must be a function' );
console.assert( typeof equal === 'function' );
console.assert( equal.length === 3 );
console.assert( equal.name === 'equal' );
console.log('-- Ok');

console.log( 'should make strict comparison' );
console.assert(  equal( "", "" ) );
console.assert(  equal( "", "" ) === equal.VALUE_AND_TYPE );
console.assert( !equal( "Hello", "hello" ) );
console.assert(  equal( "Hello", "hello" ) === equal.NOT_EQUAL );
console.assert(  equal( "Hello", "Hello" ) );
console.assert(  equal( "Hello", "Hello" ) === equal.VALUE_AND_TYPE );
console.assert(  equal( true, true ) );
console.assert(  equal( true, true ) === equal.VALUE_AND_TYPE );
console.assert(  equal( false, false ) );
console.assert(  equal( false, false ) === equal.VALUE_AND_TYPE );
console.assert( !equal( true, false ) );
console.assert(  equal( true, false ) === equal.NOT_EQUAL);
console.assert( !equal( true, 1 ) );
console.assert(  equal( true, 1 ) === equal.NOT_EQUAL );
console.assert( !equal( true, 0 ) );
console.assert(  equal( true, 0 ) === equal.NOT_EQUAL );
console.assert( !equal( true, "hello" ) );
console.assert(  equal( true, "hello" ) === equal.NOT_EQUAL );
console.assert( !equal( true, '' ) );
console.assert(  equal( true, '' ) === equal.NOT_EQUAL );
console.assert( !equal( false, 0 ) );
console.assert(  equal( false, 0 ) === equal.NOT_EQUAL );
console.assert( !equal( false, "" ) );
console.assert(  equal( false, "" ) === equal.NOT_EQUAL );
console.assert( !equal( false, "hello" ) );
console.assert(  equal( false, "hello" ) === equal.NOT_EQUAL );
console.assert( !equal( null, 0 ) );
console.assert(  equal( null, 0 ) === equal.NOT_EQUAL );
console.assert(  equal( null, null ) );
console.assert(  equal( null, null ) === equal.VALUE_AND_TYPE );
console.assert( !equal( null, "null" ) );
console.assert(  equal( null, "null" ) === equal.NOT_EQUAL );
console.assert(  equal( 1, 1 ) );
console.assert(  equal( 1, 1 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( 1, 0 ) );
console.assert(  equal( 1, 0 ) === equal.NOT_EQUAL );
console.assert( !equal( 1, "1" ) );
console.assert(  equal( 1, "1" ) === equal.NOT_EQUAL );
console.assert( !equal( 1, "0" )  );
console.assert(  equal( 1, "0" ) === equal.NOT_EQUAL );
console.assert( !equal( 1.0001, 1.00009 ) );
console.assert(  equal( 1.0001, 1.00009 ) === equal.NOT_EQUAL );
console.assert(  equal( 1.0001, 1.0001 ) );
console.assert(  equal( 1.0001, 1.0001 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( 1.0001, '1.00009' ) );
console.assert(  equal( 1.0001, '1.00009' ) === equal.NOT_EQUAL );
console.assert( !equal( 1.0001, '1.0001' ) );
console.assert(  equal( 1.0001, '1.0001' ) === equal.NOT_EQUAL );
console.assert(  equal( undefined, undefined ) );
console.assert(  equal( undefined, undefined ) === equal.VALUE_AND_TYPE );
console.assert( !equal( undefined, "" ) );
console.assert(  equal( undefined, "" ) === equal.NOT_EQUAL );
console.assert( !equal( undefined, 1 ) );
console.assert(  equal( undefined, 1 ) === equal.NOT_EQUAL );
console.assert( !equal( undefined, false ) );
console.assert(  equal( undefined, false ) === equal.NOT_EQUAL );
console.assert( !equal( undefined, null ) );
console.assert(  equal( undefined, null ) === equal.NOT_EQUAL );
console.assert( !equal( undefined, {} ) );
console.assert(  equal( undefined, {} ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'should make a non strict comparison with the "nonStrict" options is true' );
console.assert( !equal( true, false, {nonStrict: true}  ) );
console.assert(  equal( true, 1, {nonStrict: true}  ) );
console.assert(  equal( true, 1, {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( true, 0, {nonStrict: true}  ) );
console.assert( !equal( true, -1, {nonStrict: true}  ) );
console.assert( !equal( true, "true", {nonStrict: true}  ) );
console.assert( !equal( true, "false", {nonStrict: true}  ) );
console.assert(  equal( true, "1", {nonStrict: true}  ) );
console.assert(  equal( true, "1", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( true, "0", {nonStrict: true}  ) );
console.assert( !equal( true, "-1", {nonStrict: true}  ) );
console.assert( !equal( true, "", {nonStrict: true}  ) );
console.assert( !equal( true, null, {nonStrict: true}  ) );
console.assert( !equal( true, undefined, {nonStrict: true}  ) );
console.assert( !equal( true, Infinity, {nonStrict: true}  ) );
console.assert( !equal( true, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( true, [], {nonStrict: true}  ) );
console.assert( !equal( true, {}, {nonStrict: true}  ) );
console.assert( !equal( true, [[]], {nonStrict: true}  ) );
console.assert( !equal( true, [0], {nonStrict: true}  ) );
console.assert(  equal( true, [1], {nonStrict: true}  ) );
console.assert(  equal( true, [1], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( true, NaN, {nonStrict: true}  ) );
console.assert( !equal( false, 1, {nonStrict: true}  ) );
console.assert(  equal( false, 0, {nonStrict: true}  ) );
console.assert(  equal( false, 0, {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( false, -1, {nonStrict: true}  ) );
console.assert( !equal( false, "true", {nonStrict: true}  ) );
console.assert( !equal( false, "false", {nonStrict: true}  ) );
console.assert( !equal( false, "1", {nonStrict: true}  ) );
console.assert(  equal( false, "0", {nonStrict: true}  ) );
console.assert(  equal( false, "0", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( false, "-1", {nonStrict: true}  ) );
console.assert(  equal( false, "", {nonStrict: true}  ) );
console.assert(  equal( false, "", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( false, null, {nonStrict: true}  ) );
console.assert( !equal( false, undefined, {nonStrict: true}  ) );
console.assert( !equal( false, Infinity, {nonStrict: true}  ) );
console.assert( !equal( false, -Infinity, {nonStrict: true}  ) );
console.assert(  equal( false, [], {nonStrict: true}  ) );
console.assert(  equal( false, [], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( false, {}, {nonStrict: true}  ) );
console.assert(  equal( false, [[]], {nonStrict: true} ) );
console.assert(  equal( false, [[]], {nonStrict: true} )  === equal.VALUE );
console.assert(  equal( false, [0], {nonStrict: true}  ) );
console.assert(  equal( false, [0], {nonStrict: true}  )  === equal.VALUE );
console.assert( !equal( false, [1], {nonStrict: true}  ) );
console.assert( !equal( false, NaN, {nonStrict: true}  ) );
console.assert( !equal( 1, 0, {nonStrict: true}  ) );
console.assert( !equal( 1, -1, {nonStrict: true}  ) );
console.assert( !equal( 1, "true", {nonStrict: true}  ) );
console.assert( !equal( 1, "false", {nonStrict: true}  ) );
console.assert(  equal( 1, "1", {nonStrict: true}  ) );
console.assert(  equal( 1, "1", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 1, "0", {nonStrict: true}  ) );
console.assert( !equal( 1, "-1", {nonStrict: true}  ) );
console.assert( !equal( 1, "", {nonStrict: true}  ) );
console.assert( !equal( 1, null, {nonStrict: true}  ) );
console.assert( !equal( 1, undefined, {nonStrict: true}  ) );
console.assert( !equal( 1, Infinity, {nonStrict: true}  ) );
console.assert( !equal( 1, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( 1, [], {nonStrict: true}  ) );
console.assert( !equal( 1, {}, {nonStrict: true}  ) );
console.assert( !equal( 1, [[]], {nonStrict: true}  ) );
console.assert( !equal( 1, [0], {nonStrict: true}  ) );
console.assert(  equal( 1, [1], {nonStrict: true}  ) );
console.assert(  equal( 1, [1], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 1, NaN, {nonStrict: true}  ) );
console.assert( !equal( 0, -1, {nonStrict: true}  ) );
console.assert( !equal( 0, "true", {nonStrict: true}  ) );
console.assert( !equal( 0, "false", {nonStrict: true}  ) );
console.assert( !equal( 0, "1", {nonStrict: true}  ) );
console.assert(  equal( 0, "0", {nonStrict: true}  ) );
console.assert(  equal( 0, "0", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 0, "-1", {nonStrict: true}  ) );
console.assert(  equal( 0, "", {nonStrict: true}  ) );
console.assert(  equal( 0, "", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 0, null, {nonStrict: true}  ) );
console.assert( !equal( 0, undefined, {nonStrict: true}  ) );
console.assert( !equal( 0, Infinity, {nonStrict: true}  ) );
console.assert( !equal( 0, -Infinity, {nonStrict: true}  ) );
console.assert(  equal( 0, [], {nonStrict: true}  ) );
console.assert(  equal( 0, [], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 0, {}, {nonStrict: true}  ) );
console.assert(  equal( 0, [[]], {nonStrict: true}  ) );
console.assert(  equal( 0, [[]], {nonStrict: true}  ) === equal.VALUE );
console.assert(  equal( 0, [0], {nonStrict: true}  ) );
console.assert(  equal( 0, [0], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( 0, [1], {nonStrict: true}  ) );
console.assert( !equal( 0, NaN, {nonStrict: true}  ) );
console.assert( !equal( -1, "true", {nonStrict: true}  ) );
console.assert( !equal( -1, "false", {nonStrict: true}  ) );
console.assert( !equal( -1, "1", {nonStrict: true}  ) );
console.assert( !equal( -1, "0", {nonStrict: true}  ) );
console.assert(  equal( -1, "-1", {nonStrict: true}  ) );
console.assert(  equal( -1, "-1", {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( -1, "", {nonStrict: true}  ) );
console.assert( !equal( -1, null, {nonStrict: true}  ) );
console.assert( !equal( -1, undefined, {nonStrict: true}  ) );
console.assert( !equal( -1, Infinity, {nonStrict: true}  ) );
console.assert( !equal( -1, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( -1, [], {nonStrict: true}  ) );
console.assert( !equal( -1, {}, {nonStrict: true}  ) );
console.assert( !equal( -1, [[]], {nonStrict: true}  ) );
console.assert( !equal( -1, [0], {nonStrict: true}  ) );
console.assert( !equal( -1, [1], {nonStrict: true}  ) );
console.assert( !equal( -1, NaN, {nonStrict: true}  ) );
console.assert( !equal( "true", "false", {nonStrict: true}  ) );
console.assert( !equal( "true", "1", {nonStrict: true}  ) );
console.assert( !equal( "true", "0", {nonStrict: true}  ) );
console.assert( !equal( "true", "-1", {nonStrict: true}  ) );
console.assert( !equal( "true", "", {nonStrict: true}  ) );
console.assert( !equal( "true", null, {nonStrict: true}  ) );
console.assert( !equal( "true", undefined, {nonStrict: true}  ) );
console.assert( !equal( "true", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "true", -Infinity, {nonStrict: true}  ) );
console.assert( !equal( "true", [], {nonStrict: true}  ) );
console.assert( !equal( "true", {}, {nonStrict: true}  ) );
console.assert( !equal( "true", [[]], {nonStrict: true}  ) );
console.assert( !equal( "true", [0], {nonStrict: true}  ) );
console.assert( !equal( "true", [1], {nonStrict: true}  ) );
console.assert( !equal( "true", NaN, {nonStrict: true}  ) );
console.assert( !equal( "false", "1", {nonStrict: true}  ) );
console.assert( !equal( "false", "0", {nonStrict: true}  ) );
console.assert( !equal( "false", "-1", {nonStrict: true}  ) );
console.assert( !equal( "false", "", {nonStrict: true}  ) );
console.assert( !equal( "false", null, {nonStrict: true}  ) );
console.assert( !equal( "false", undefined, {nonStrict: true}  ) );
console.assert( !equal( "false", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "false", -Infinity, {nonStrict: true}  ) );
console.assert( !equal( "false", [], {nonStrict: true}  ) );
console.assert( !equal( "false", {}, {nonStrict: true}  ) );
console.assert( !equal( "false", [[]], {nonStrict: true}  ) );
console.assert( !equal( "false", [0], {nonStrict: true}  ) );
console.assert( !equal( "false", [1], {nonStrict: true}  ) );
console.assert( !equal( "false", NaN, {nonStrict: true}  ) );
console.assert( !equal( "1", "0", {nonStrict: true}  ) );
console.assert( !equal( "1", "-1", {nonStrict: true}  ) );
console.assert( !equal( "1", "", {nonStrict: true}  ) );
console.assert( !equal( "1", null, {nonStrict: true}  ) );
console.assert( !equal( "1", undefined, {nonStrict: true}  ) );
console.assert( !equal( "1", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "1", -Infinity, {nonStrict: true}  ) );
console.assert( !equal( "1", [], {nonStrict: true}  ) );
console.assert( !equal( "1", {}, {nonStrict: true}  ) );
console.assert( !equal( "1", [[]], {nonStrict: true}  ) );
console.assert( !equal( "1", [0], {nonStrict: true}  ) );
console.assert(  equal( "1", [1], {nonStrict: true}  ) );
console.assert(  equal( "1", [1], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( "1", NaN, {nonStrict: true}  ) );
console.assert( !equal( "0", "-1", {nonStrict: true}  ) );
console.assert( !equal( "0", "", {nonStrict: true}  ) );
console.assert( !equal( "0", null, {nonStrict: true}  ) );
console.assert( !equal( "0", undefined, {nonStrict: true}  ) );
console.assert( !equal( "0", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "0", -Infinity, {nonStrict: true}  ) );
console.assert( !equal( "0", [], {nonStrict: true}  ) );
console.assert( !equal( "0", {}, {nonStrict: true}  ) );
console.assert( !equal( "0", [[]], {nonStrict: true}  ) );
console.assert(  equal( "0", [0], {nonStrict: true}  ) );
console.assert(  equal( "0", [0], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( "0", [1], {nonStrict: true}  ) );
console.assert( !equal( "0", NaN, {nonStrict: true}  ) );
console.assert( !equal( "-1", "", {nonStrict: true}  ) );
console.assert( !equal( "-1", null, {nonStrict: true}  ) );
console.assert( !equal( "-1", undefined, {nonStrict: true}  ) );
console.assert( !equal( "-1", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "-1", -Infinity, {nonStrict: true}  ) );
console.assert( !equal( "-1", [], {nonStrict: true}  ) );
console.assert( !equal( "-1", {}, {nonStrict: true}  ) );
console.assert( !equal( "-1", [[]], {nonStrict: true}  ) );
console.assert( !equal( "-1", [0], {nonStrict: true}  ) );
console.assert( !equal( "-1", [1], {nonStrict: true}  ) );
console.assert( !equal( "-1", NaN, {nonStrict: true}  ) );
console.assert( !equal( "", null, {nonStrict: true}  ) );
console.assert( !equal( "", undefined, {nonStrict: true}  ) );
console.assert( !equal( "", Infinity, {nonStrict: true}  ) );
console.assert( !equal( "", -Infinity, {nonStrict: true}  ) );
console.assert(  equal( "", [], {nonStrict: true}  ) );
console.assert(  equal( "", [], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( "", {}, {nonStrict: true}  ) );
console.assert(  equal( "", [[]], {nonStrict: true}  ) );
console.assert(  equal( "", [[]], {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( "", [0], {nonStrict: true}  ) );
console.assert( !equal( "", [1], {nonStrict: true}  ) );
console.assert( !equal( "", NaN, {nonStrict: true}  ) );
console.assert(  equal( null, undefined, {nonStrict: true}  ) );
console.assert(  equal( null, undefined, {nonStrict: true}  ) === equal.VALUE );
console.assert( !equal( null, Infinity, {nonStrict: true}  ) );
console.assert( !equal( null, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( null, [], {nonStrict: true}  ) );
console.assert( !equal( null, {}, {nonStrict: true}  ) );
console.assert( !equal( null, [[]], {nonStrict: true}  ) );
console.assert( !equal( null, [0], {nonStrict: true}  ) );
console.assert( !equal( null, [1], {nonStrict: true}  ) );
console.assert( !equal( null, NaN, {nonStrict: true}  ) );
console.assert( !equal( undefined, Infinity, {nonStrict: true}  ) );
console.assert( !equal( undefined, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( undefined, [], {nonStrict: true}  ) );
console.assert( !equal( undefined, {}, {nonStrict: true}  ) );
console.assert( !equal( undefined, [[]], {nonStrict: true}  ) );
console.assert( !equal( undefined, [0], {nonStrict: true}  ) );
console.assert( !equal( undefined, [1], {nonStrict: true}  ) );
console.assert( !equal( undefined, NaN, {nonStrict: true}  ) );
console.assert( !equal( Infinity, -Infinity, {nonStrict: true}  ) );
console.assert( !equal( Infinity, [], {nonStrict: true}  ) );
console.assert( !equal( Infinity, {}, {nonStrict: true}  ) );
console.assert( !equal( Infinity, [[]], {nonStrict: true}  ) );
console.assert( !equal( Infinity, [0], {nonStrict: true}  ) );
console.assert( !equal( Infinity, [1], {nonStrict: true}  ) );
console.assert( !equal( Infinity, NaN, {nonStrict: true}  ) );
console.assert( !equal( -Infinity, [], {nonStrict: true}  ) );
console.assert( !equal( -Infinity, {}, {nonStrict: true}  ) );
console.assert( !equal( -Infinity, [[]], {nonStrict: true}  ) );
console.assert( !equal( -Infinity, [0], {nonStrict: true}  ) );
console.assert( !equal( -Infinity, [1], {nonStrict: true}  ) );
console.assert( !equal( -Infinity, NaN, {nonStrict: true}  ) );
console.assert( !equal( [], [[]], {nonStrict: true}  ) );
console.assert( !equal( [], [0], {nonStrict: true}  ) );
console.assert( !equal( [], [1], {nonStrict: true}  ) );
console.assert( !equal( [], NaN, {nonStrict: true}  ) );
console.assert( !equal( {}, [[]], {nonStrict: true}  ) );
console.assert( !equal( {}, [0], {nonStrict: true}  ) );
console.assert( !equal( {}, [1], {nonStrict: true}  ) );
console.assert( !equal( {}, NaN, {nonStrict: true}  ) );
console.assert( !equal( [[]], [1], {nonStrict: true}  ) );
console.assert( !equal( [[]], NaN, {nonStrict: true}  ) );
console.assert( !equal( [0], [1], {nonStrict: true}  ) );
console.assert( !equal( [0], NaN, {nonStrict: true}  ) );
console.assert( !equal( [1], NaN, {nonStrict: true}  ) );
console.log( '-- Ok' );

console.log( 'NaN vs NaN should be true');
console.assert(  equal( NaN, NaN ) );
console.assert(  equal( NaN, NaN ) === equal.VALUE_AND_TYPE );
console.assert(  equal( NaN, NaN, {nonStrict: true} ) );
console.assert(  equal( NaN, NaN, {nonStrict: true} ) === equal.VALUE_AND_TYPE );
console.log( '-- Ok' );

console.log( 'Date should be compared by its internal number' );
var date1   = new Date();
var date2   = date1;
var date3   = new Date( '2015-01-01' );
var date4   = new Date( date1.getTime() );
console.assert(  equal( date1, date2 ) );
console.assert(  equal( date1, date2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( date1, date3 ) );
console.assert(  equal( date1, date3 ) === equal.NOT_EQUAL );
console.assert(  equal( date1, date4 ) );
console.assert(  equal( date1, date4 ) === equal.VALUE_AND_TYPE );
console.log( '-- Ok' );

console.log( 'String wrapper should be compared as a string' );
// jshint -W053
var string1 = new String( 'hello' );
var string2 = string1;
var string3 = new String( 'other' );
var string4 = new String( 'hello' );
// jshint -W053
var string5 = 'hello';
var string6 = 'HELLO';
var string7 = 'HELLO';
console.assert(  equal( string1, string2 ) );
console.assert(  equal( string1, string2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( string1, string3 ) );
console.assert(  equal( string1, string3 ) === equal.NOT_EQUAL );
console.assert(  equal( string1, string4 ) );
console.assert(  equal( string1, string4 ) === equal.VALUE_AND_TYPE );
console.assert(  equal( string1, string5 ) );
console.assert(  equal( string1, string5 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( string1, string6 ) );
console.assert(  equal( string1, string6 ) === equal.NOT_EQUAL );
console.assert(  equal( string6, string7 ) );
console.assert(  equal( string6, string7 ) === equal.VALUE_AND_TYPE );
console.log( '-- Ok' );

console.log( 'Number wrapper should be compared as a number' );
// jshint -W053
var number1 = new Number( 10.10 );
var number2 = number1;
var number3 = new Number( 20.20 );
var number4 = new Number( 10.10 );
// jshint +W053
var number5 = 10.10;
var number6 = 10;
var number7 = 10;
console.assert(  equal( number1, number2 ) );
console.assert(  equal( number1, number2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( number1, number3 ) );
console.assert(  equal( number1, number3 ) === equal.NOT_EQUAL );
console.assert(  equal( number1, number4 ) );
console.assert(  equal( number1, number4 ) === equal.VALUE_AND_TYPE );
console.assert(  equal( number1, number5 ) );
console.assert(  equal( number1, number5 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( number1, number6 ) );
console.assert(  equal( number1, number6 ) === equal.NOT_EQUAL );
console.assert(  equal( number6, number7 ) );
console.assert(  equal( number6, number7 ) === equal.VALUE_AND_TYPE );
console.log( '-- Ok' );

console.log( 'Boolean wrapper should be compared as a boolean' );
// jshint -W053
var boolean1 = new Boolean( false );
var boolean2 = boolean1;
var boolean3 = new Boolean( true );
var boolean4 = new Boolean( false );
// jshint +W053
var boolean5 = false;
var boolean6 = true;
var boolean7 = true;
console.assert(  equal( boolean1, boolean2 ) );
console.assert(  equal( boolean1, boolean2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( boolean1, boolean3 ) );
console.assert(  equal( boolean1, boolean3 ) === equal.NOT_EQUAL );
console.assert(  equal( boolean1, boolean4 ) );
console.assert(  equal( boolean1, boolean4 ) === equal.VALUE_AND_TYPE );
console.assert(  equal( boolean1, boolean5 ) );
console.assert(  equal( boolean1, boolean5 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( boolean1, boolean6 ) );
console.assert(  equal( boolean1, boolean6 ) === equal.NOT_EQUAL );
console.assert(  equal( boolean6, boolean7 ) );
console.assert(  equal( boolean6, boolean7 ) === equal.VALUE_AND_TYPE );
console.log( '-- Ok' );

console.log( 'Date should be compare with number when "nonStrict" option is true' );
var date5 = new Date();
var numDate = date5.valueOf();
console.assert( !equal( date5, numDate  ) );
console.assert(  equal( date5, numDate  ) === equal.NOT_EQUAL );
console.assert(  equal( date5, numDate, {nonStrict: true}  ) );
console.assert(  equal( date5, numDate, {nonStrict: true}  ) === equal.VALUE );
console.log( '-- Ok' );

console.log( 'Number amd String wrappers should be compared when "nonStrict" option is true' );
// jshint -W053
var number10 = new Number( 99 );
var number11 = 99;
var string10 = new String( "99" );
var string11 = "99";
// jshint +W053
console.assert( !equal( number10, string10 ) );
console.assert(  equal( number10, string10 ) === equal.NOT_EQUAL );
console.assert(  equal( number10, string10, {nonStrict: true} ) );
console.assert(  equal( number10, string10, {nonStrict: true} ) === equal.VALUE );
console.assert( !equal( number10, string11 ) );
console.assert(  equal( number10, string11 ) === equal.NOT_EQUAL );
console.assert(  equal( number10, string11, {nonStrict: true} ) );
console.assert(  equal( number10, string11, {nonStrict: true} ) === equal.VALUE );
console.log( '-- Ok' );

console.log( 'Two simple objects should be compared by its properties' );
var obj1 = {a: 0, b: 1, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11};
var obj2 = obj1;
var obj3 = {a: 1, b: 1, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11};
var obj4 = {a: 0, b: 1, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, m: 11};
var obj5 = {a: 0, b: 1, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11};
console.assert(  equal( obj1, obj2 ) );
console.assert(  equal( obj1, obj2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3 ) );
console.assert(  equal( obj1, obj3 ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4 ) );
console.assert(  equal( obj1, obj4 ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5 ) );
console.assert(  equal( obj1, obj5 ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( obj1, obj2, {privateProperties: true} ) );
console.assert(  equal( obj1, obj2, {privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3, {privateProperties: true} ) );
console.assert(  equal( obj1, obj3, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4, {privateProperties: true} ) );
console.assert(  equal( obj1, obj4, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5, {privateProperties: true} ) );
console.assert(  equal( obj1, obj5, {privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( obj1, obj2, {nonEnumerableProperties: true} ) );
console.assert(  equal( obj1, obj2, {nonEnumerableProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3, {nonEnumerableProperties: true} ) );
console.assert(  equal( obj1, obj3, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4, {nonEnumerableProperties: true} ) );
console.assert(  equal( obj1, obj4, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5, {nonEnumerableProperties: true} ) );
console.assert(  equal( obj1, obj5, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( obj1, obj2, {allProperties: true} ) );
console.assert(  equal( obj1, obj2, {allProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3, {allProperties: true} ) );
console.assert(  equal( obj1, obj3, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4, {allProperties: true} ) );
console.assert(  equal( obj1, obj4, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5, {allProperties: true} ) );
console.assert(  equal( obj1, obj5, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( obj1, obj2, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj2, {nonEnumerableProperties: true, privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj3, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj4, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj5, {nonEnumerableProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( obj1, obj2, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj2, {allProperties: true, privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( obj1, obj3, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj3, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( obj1, obj4, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj4, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( obj1, obj5, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( obj1, obj5, {allProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.log( '-- Ok' );

console.log( 'The object constructor should is revelant for the comparison' );
var emptyObject1 = {};
var emptyObject2 = emptyObject1;
var emptyObject3 = {a: null};
var emptyObject4 = Object.create( {} );
var emptyObject5 = Object.create( null );
console.assert(  equal( emptyObject1, emptyObject2 ) );
console.assert(  equal( emptyObject1, emptyObject2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( emptyObject1, emptyObject3 ) );
console.assert(  equal( emptyObject1, emptyObject3 ) === equal.NOT_EQUAL );
console.assert(  equal( emptyObject1, emptyObject4 ) );
console.assert(  equal( emptyObject1, emptyObject4 ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( emptyObject1, emptyObject5 ) );
console.assert(  equal( emptyObject1, emptyObject5 ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'Two deep objects should be compared by its properties' );
var nestedObject1  = {o1: {a: 1, b: true, c: 'hello', d: {n: [99]}}, o2: [0, 1, 2, 3]};
var nestedObject2  = nestedObject1;
var nestedObject3  = {o1: {a: 1, b: true, c: 'hello', d: {n: [100]}}, o2: [0, 1, 2, 3]};
var nestedObject4  = {o1: {a: 1, b: true, c: 'hello', d: {n: [99]}}, o2: [0, 1, 2, 3]};
var nestedObject5  = Object.create( null );
nestedObject5.o1   = {a: 1, b: true, c: 'hello'};
nestedObject5.o1.d = {n: [99]};
nestedObject5.o2   = [0, 1, 2, 3];
console.assert(  equal( nestedObject1, nestedObject2 ) );
console.assert(  equal( nestedObject1, nestedObject2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( nestedObject1, nestedObject3 ) );
console.assert(  equal( nestedObject1, nestedObject3 ) === equal.NOT_EQUAL );
console.assert(  equal( nestedObject1, nestedObject4 ) );
console.assert(  equal( nestedObject1, nestedObject4 ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( nestedObject1, nestedObject5 ) );
console.assert(  equal( nestedObject1, nestedObject5 ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'Two simple arrays should be compared by its content' );
var array1 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var array2 = array1;
var array3 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 10];
var array4 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
var array5 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.assert(  equal( array1, array2 ) );
console.assert(  equal( array1, array2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3 ) );
console.assert(  equal( array1, array3 ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4 ) );
console.assert(  equal( array1, array4 ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5 ) );
console.assert(  equal( array1, array5 ) === equal.PROPERTIES_AND_TYPE );
var tmpDate = new Date(  );
var multi1  = [0, true, false, tmpDate, [0, 1, 2, 3], {a: 1}, 'hello', [[true, false], [{b: 2}, {b: 3}]]];
var multi2  = multi1;
var multi3  = [0, true, false, tmpDate, [0, 1, 2, 3], {a: 1}, 'hello', [[true, false], [{b: 2}, {b: 4}]]];
var multi4  = [0, 1, 2, 3, 4, 5, 6, 7];
var multi5  = [0, true, false, tmpDate, [0, 1, 2, 3], {a: 1}, 'hello', [[true, false], [{b: 2}, {b: 3}]]];
console.assert(  equal( multi1, multi2 ) );
console.assert(  equal( multi1, multi2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( multi1, multi3 ) );
console.assert(  equal( multi1, multi3 ) === equal.NOT_EQUAL );
console.assert( !equal( multi1, multi4 ) );
console.assert(  equal( multi1, multi4 ) === equal.NOT_EQUAL );
console.assert(  equal( multi1, multi5 ) );
console.assert(  equal( multi1, multi5 ) === equal.PROPERTIES_AND_TYPE);
console.assert(  equal( array1, array2, {nonEnumerableProperties: true} ) );
console.assert(  equal( array1, array2, {nonEnumerableProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3, {nonEnumerableProperties: true} ) );
console.assert(  equal( array1, array3, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4, {nonEnumerableProperties: true} ) );
console.assert(  equal( array1, array4, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5, {nonEnumerableProperties: true} ) );
console.assert(  equal( array1, array5, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( array1, array2, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array2, {nonEnumerableProperties: true, privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array3, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array4, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array5, {nonEnumerableProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( array1, array2, {allProperties: true} ) );
console.assert(  equal( array1, array2, {allProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3, {allProperties: true} ) );
console.assert(  equal( array1, array3, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4, {allProperties: true} ) );
console.assert(  equal( array1, array4, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5, {allProperties: true} ) );
console.assert(  equal( array1, array5, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( array1, array2, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array2, {allProperties: true, privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array3, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array4, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( array1, array5, {allProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( array1, array2, {privateProperties: true} ) );
console.assert(  equal( array1, array2, {privateProperties: true} ) === equal.VALUE_AND_TYPE );
console.assert( !equal( array1, array3, {privateProperties: true} ) );
console.assert(  equal( array1, array3, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( array1, array4, {privateProperties: true} ) );
console.assert(  equal( array1, array4, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array1, array5, {privateProperties: true} ) );
console.assert(  equal( array1, array5, {privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.log( '-- Ok' );

console.log('Two arrays should be compared by its content and properties');
var arrObj1 = [ 1, 2, 3, 4, 5];
arrObj1.property = 'hello';
var arrObj2 = [ 1, 2, 3, 4, 5];
arrObj2.property = 'hello';
var arrObj3 = [1,2,3,4,5];
arrObj3.property = 'Bye';
var arrObj4 = [1,2,3,4,5];
console.assert(  equal( arrObj1, arrObj2 ) );
console.assert(  equal( arrObj1, arrObj2 ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( arrObj1, arrObj3 ) );
console.assert( !equal( arrObj1, arrObj4 ) );
console.log('-- Ok');

console.log( 'Sparse array must be managed without problems' );
// jshint -W128
var sparse1 = [0, , 3, , 5, , 7, , 9, , 11];
// jshint +W128
var sparse2 = sparse1;
var sparse3 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
var sparse4 = [0, undefined, 3, undefined, 5, undefined, 7, undefined, 9, undefined, 11];
var sparse5 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
delete sparse5[1];
delete sparse5[3];
delete sparse5[5];
delete sparse5[7];
delete sparse5[9];
console.assert(  equal( sparse1, sparse2 ) );
console.assert(  equal( sparse1, sparse2 ) === equal.VALUE_AND_TYPE );
console.assert( !equal( sparse1, sparse3 ) );
console.assert(  equal( sparse1, sparse3 ) === equal.NOT_EQUAL );
console.assert( !equal( sparse1, sparse4 ) );
console.assert(  equal( sparse1, sparse4 ) === equal.NOT_EQUAL );
console.assert(  equal( sparse1, sparse5 ) );
console.assert(  equal( sparse1, sparse5 ) === equal.PROPERTIES_AND_TYPE );
console.log( '-- Ok' );

console.log( 'An Array and an Array Like are equal only when nonStrict options is true' );
var array10    = [0, 1, 2];
var arrayLike1 = {'0': 0, '1': 1, '2': 2};
Object.defineProperty( arrayLike1, 'length', {enumerable: false, configurable: false, writable: true, value: 3} );
var arrayLike2 = {'0': 0, '1': 1, '2': 2, 'length': 3};
console.assert( !equal( array10, arrayLike1 ) );
console.assert(  equal( array10, arrayLike1 ) === equal.NOT_EQUAL );
console.assert(  equal( array10, arrayLike1, {nonStrict: true} ) );
console.assert(  equal( array10, arrayLike1, {nonStrict: true} ) === equal.PROPERTIES );
console.assert( !equal( array10, arrayLike2, {nonStrict: true} ) );
console.assert(  equal( array10, arrayLike2, {nonStrict: true} ) === equal.NOT_EQUAL );
console.assert(  equal( array10, arrayLike1, {nonStrict: true, checkPropertyDescritors: true} ) );
console.assert(  equal( array10, arrayLike1, {nonStrict: true, checkPropertyDescritors: true} ) === equal.PROPERTIES );
console.assert( !equal( array10, arrayLike2, {nonStrict: true, checkPropertyDescritors: true} ) );
console.assert(  equal( array10, arrayLike2, {nonStrict: true, checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'Objects from function constructor with private properties (obj._b)' );
function Constructor1( a ) {
    this.a = a;
    this._b = a * 2;
}
function Constructor2( a ) {
    this.a = a;
    this._b = a * 2;
}
function Constructor3( a ) {
    this.a = a;
    this._b = a * 3;
}
var instance11  = new Constructor1( 1 );
var instance11b = instance11;
var instance11d = new Constructor1( 1 );
var instance12  = new Constructor1( 2 );
var instance21  = new Constructor2( 1 );
var instance22  = new Constructor2( 2 );
var instance31  = new Constructor3( 1 );
var instance32  = new Constructor3( 2 );
console.assert(  equal( instance11, instance11b ) );
console.assert(  equal( instance11, instance11b ) === equal.VALUE_AND_TYPE );
console.assert(  equal( instance11, instance11d ) );
console.assert(  equal( instance11, instance11d ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( instance11, instance21 ) );
console.assert(  equal( instance11, instance21 ) === equal.NOT_EQUAL );
console.assert(  equal( instance11, instance21, {nonStrict: true} ) );
console.assert(  equal( instance11, instance21, {nonStrict: true} ) === equal.PROPERTIES );
console.assert(  equal( instance11, instance21, {nonStrict: true, privateProperties: true} ) );
console.assert(  equal( instance11, instance21, {nonStrict: true, privateProperties: true} ) === equal.PROPERTIES );
console.assert( !equal( instance11, instance31 ) );
console.assert(  equal( instance11, instance31 ) === equal.NOT_EQUAL );
console.assert(  equal( instance11, instance31, {nonStrict: true} ) );
console.assert(  equal( instance11, instance31, {nonStrict: true} ) === equal.PROPERTIES );
console.assert( !equal( instance11, instance31, {nonStrict: true, privateProperties: true} ) );
console.assert(  equal( instance11, instance31, {nonStrict: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( instance11, instance12 ) );
console.assert(  equal( instance11, instance12 ) === equal.NOT_EQUAL );
console.assert( !equal( instance21, instance22 ) );
console.assert(  equal( instance21, instance22 ) === equal.NOT_EQUAL );
console.assert( !equal( instance12, instance22 ) );
console.assert(  equal( instance12, instance22 ) === equal.NOT_EQUAL );
console.assert(  equal( instance12, instance22, {nonStrict: true} ) );
console.assert(  equal( instance12, instance22, {nonStrict: true} ) === equal.PROPERTIES );
console.assert(  equal( instance12, instance22, {nonStrict: true, privateProperties: true} ) );
console.assert(  equal( instance12, instance22, {nonStrict: true, privateProperties: true} ) === equal.PROPERTIES );
console.assert( !equal( instance12, instance32 ) );
console.assert(  equal( instance12, instance32 ) === equal.NOT_EQUAL );
console.assert(  equal( instance12, instance32, {nonStrict: true} ) );
console.assert(  equal( instance12, instance32, {nonStrict: true} ) === equal.PROPERTIES );
console.assert( !equal( instance12, instance32, {nonStrict: true, privateProperties: true} ) );
console.assert(  equal( instance12, instance32, {nonStrict: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'Object with enumerate and not enumerate properties' );
var notEnumerable = {};
Object.defineProperties( notEnumerable, {
    "a": {value: 1, enumerable: false},
    "b": {value: 2, enumerable: false},
    "_d": {value: 3, enumerable: false}
});
var enumarableEmpty = {_d: 3};
var enumerable      = {a: 1, b: 2, _d: 3};
console.assert( !equal( notEnumerable, enumerable ) );
console.assert(  equal( notEnumerable, enumerable ) === equal.NOT_EQUAL );
console.assert(  equal( notEnumerable, enumarableEmpty ) );
console.assert(  equal( notEnumerable, enumarableEmpty ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notEnumerable, enumerable, {checkPropertyDescritors: true} ) );
console.assert(  equal( notEnumerable, enumerable, {checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.assert( !equal( enumerable, enumarableEmpty ) );
console.assert(  equal( enumerable, enumarableEmpty ) === equal.NOT_EQUAL );
console.assert(  equal( {}, enumarableEmpty ) );
console.assert(  equal( {}, enumarableEmpty ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( notEnumerable, enumerable, {nonEnumerableProperties: true} ) );
console.assert(  equal( notEnumerable, enumerable, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notEnumerable, enumarableEmpty, {nonEnumerableProperties: true} ) );
console.assert(  equal( notEnumerable, enumarableEmpty, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( enumerable, enumarableEmpty, {nonEnumerableProperties: true} ) );
console.assert(  equal( enumerable, enumarableEmpty, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( {}, enumarableEmpty, {nonEnumerableProperties: true} ) );
console.assert(  equal( {}, enumarableEmpty, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( notEnumerable, enumerable, {privateProperties: true, nonEnumerableProperties: true} ) );
console.assert(  equal( notEnumerable, enumerable, {privateProperties: true, nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notEnumerable, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) );
console.assert(  equal( notEnumerable, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( enumerable, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) );
console.assert(  equal( enumerable, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( {}, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) );
console.assert(  equal( {}, enumarableEmpty, {privateProperties: true, nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( notEnumerable, enumerable, {allProperties: true} ) );
console.assert(  equal( notEnumerable, enumerable, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notEnumerable, enumarableEmpty, {allProperties: true} ) );
console.assert(  equal( notEnumerable, enumarableEmpty, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( enumerable, enumarableEmpty, {allProperties: true} ) );
console.assert(  equal( enumerable, enumarableEmpty, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert(  equal( {}, enumarableEmpty, {allProperties: true} ) );
console.assert(  equal( {}, enumarableEmpty, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( notEnumerable, enumerable, {privateProperties: true, allProperties: true} ) );
console.assert(  equal( notEnumerable, enumerable, {privateProperties: true, allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notEnumerable, enumarableEmpty, {privateProperties: true, allProperties: true} ) );
console.assert(  equal( notEnumerable, enumarableEmpty, {privateProperties: true, allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( enumerable, enumarableEmpty, {privateProperties: true, allProperties: true} ) );
console.assert(  equal( enumerable, enumarableEmpty, {privateProperties: true, allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( {}, enumarableEmpty, {privateProperties: true, allProperties: true} ) );
console.assert(  equal( {}, enumarableEmpty, {privateProperties: true, allProperties: true} ) === equal.NOT_EQUAL );
console.log( '-- Ok' );

console.log( 'Objects from class properties created in different levels' );
let priv = new WeakMap();
class Parent  {
    constructor(x) {
        this._x = x;
        priv.set(this, {});
    }
    get a() {
        return priv.get(this).a;
    }
    set a(value) {
        let tmp = priv.get(this);
        tmp.a = value;
        priv.set(this, tmp);
    }
}
class Child extends Parent {
    constructor(x, y) {
        super(x);
        this.y = y;
        priv.set(this, {});
    }
    get b() {
        return priv.get(this).b;
    }
    set b(value) {
        let tmp = priv.get(this);
        tmp.b = value;
        priv.set(this, tmp);
    }
}
var c1 = new Child(10, 20);
c1.a = 1;
c1.b = 2;
var c2 = new Child(10, 20);
c2.a = 1;
c2.b = 2;
var c3 = new Child(-10, 20);
c3.a = 0;
c3.b = 2;
var c4 = new Child(10, -20);
c4.a = 1;
c4.b = 0;
console.assert(  equal( c1, c2 ) );
console.assert(  equal( c1, c2 ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c2, {nonEnumerableProperties: true} ) );
console.assert(  equal( c1, c2, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c2, {allProperties: true} ) );
console.assert(  equal( c1, c2, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c2, {privateProperties: true} ) );
console.assert(  equal( c1, c2, {privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c2, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c2, {nonEnumerableProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c2, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c2, {allProperties: true, privateProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c3 ) );
console.assert(  equal( c1, c3 ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( c1, c3, {nonEnumerableProperties: true} ) );
console.assert(  equal( c1, c3, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( c1, c3, {allProperties: true} ) );
console.assert(  equal( c1, c3, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c3, {privateProperties: true} ) );
console.assert(  equal( c1, c3, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c3, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c3, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c3, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c3, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4 ) );
console.assert(  equal( c1, c4 ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4, {nonEnumerableProperties: true} ) );
console.assert(  equal( c1, c4, {nonEnumerableProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4, {allProperties: true} ) );
console.assert(  equal( c1, c4, {allProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4, {privateProperties: true} ) );
console.assert(  equal( c1, c4, {privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4, {nonEnumerableProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c4, {nonEnumerableProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.assert( !equal( c1, c4, {allProperties: true, privateProperties: true} ) );
console.assert(  equal( c1, c4, {allProperties: true, privateProperties: true} ) === equal.NOT_EQUAL );
console.log( '-- Ok' );


console.log( 'Object with writable and not writable, configurable and not configurable properties ' );
var notWritable = {};
Object.defineProperties( notWritable, {a: {value: 1, writable: false, enumerable: true}, b: {value: 2, writable: false, enumerable: true}} );
var writable      = {a: 1, b: 2};
console.assert(  equal( notWritable, writable ) );
console.assert(  equal( notWritable, writable ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notWritable, writable, {checkPropertyDescritors: true} ) );
console.assert(  equal( notWritable, writable, {checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.assert(  equal( notWritable, writable, {nonEnumerableProperties: true} ) );
console.assert(  equal( notWritable, writable, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( notWritable, writable, {allProperties: true} ) );
console.assert(  equal( notWritable, writable, {allProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notWritable, writable, {nonEnumerableProperties: true, checkPropertyDescritors: true} ) );
console.assert(  equal( notWritable, writable, {nonEnumerableProperties: true, checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.assert( !equal( notWritable, writable, {allProperties: true, checkPropertyDescritors: true} ) );
console.assert(  equal( notWritable, writable, {allProperties: true, checkPropertyDescritors: true} ) === equal.NOT_EQUAL );

var notConfigurable = {};
Object.defineProperties( notConfigurable, {a: {value: 1, configurable: false, enumerable: true}, b: {value: 2, configurable: false, enumerable: true}} );
var configurable      = {a: 1, b: 2};
console.assert(  equal( notConfigurable, configurable ) );
console.assert(  equal( notConfigurable, configurable ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notConfigurable, configurable, {checkPropertyDescritors: true} ) );
console.assert(  equal( notConfigurable, configurable, {checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.assert(  equal( notConfigurable, configurable, {nonEnumerableProperties: true} ) );
console.assert(  equal( notConfigurable, configurable, {nonEnumerableProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert(  equal( notConfigurable, configurable, {allPublicProperties: true} ) );
console.assert(  equal( notConfigurable, configurable, {allPublicProperties: true} ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( notConfigurable, configurable, {nonEnumerableProperties: true, checkPropertyDescritors: true} ) );
console.assert(  equal( notConfigurable, configurable, {nonEnumerableProperties: true, checkPropertyDescritors: true} ) === equal.NOT_EQUAL );
console.assert( !equal( notConfigurable, configurable, {allPublicProperties: true, checkPropertyDescritors: true} ) );
console.assert(  equal( notConfigurable, configurable, {allPublicProperties: true, checkPropertyDescritors: true} ) === equal.NOT_EQUAL);
console.log( '-- Ok' );

console.log( 'Object with self reference (circular reference)' );
var circular1 = {
    a: [1,2,3],
    b: new Date(2016, 11, 24),
    c: "Hello",
    d: {
        a: [1,2,3]
    }
};
circular1.e   = circular1;
var circular2 = circular1;
var circular3 = {
    a: [1,2,3],
    b: new Date(2016, 11, 24),
    c: "Hello",
    d: {
        a: [1,2,3]
    }
};
circular3.e   = circular3;
var circular4 = {
    a: [1,2,3],
    b: new Date(2016, 11, 24),
    c: "Hello",
    d: {
        a: [1,2,3]
    },
    e: {}
};
console.assert(  equal( circular1, circular2 ) );
console.assert(  equal( circular1, circular2 ) === equal.VALUE_AND_TYPE );
console.assert(  equal( circular1, circular3 ) );
console.assert(  equal( circular1, circular3 ) === equal.PROPERTIES_AND_TYPE );
console.assert( !equal( circular1, circular4 ) );
console.assert(  equal( circular1, circular4 ) === equal.NOT_EQUAL );
var ref1 = {
    a: 1
};
var ref2 = {
    a: 1
};
var ref3 = {
    a: 1
}
ref1.parent = ref3;
ref2.parent = ref1;
ref3.parent = ref2;
ref1.child = ref2;
ref2.child = ref3;
ref3.child = ref1;
console.assert(  equal( ref1, ref2 ) );
console.assert(  equal( ref1, ref2 ) === equal.PROPERTIES_AND_TYPE );
console.log( '--- Ok' );


if (typeof process !== 'undefined' && typeof process.exit !== 'undefined') {
    process.exit( 0 );
}
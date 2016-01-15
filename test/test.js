'use strict';

// MODULES //

var test = require( 'tape' );
var lpad = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof lpad === 'function', 'main export is a function' );
	t.end();
});

test( 'if the first argument is not a string primitive, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			lpad( value, 10 );
		};
	}
});

test( 'if the second argument is not a nonnegative integer, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		Math.PI,
		-5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			lpad( 'beep', value );
		};
	}
});

test( 'if the third argument is not a string primitive, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			lpad( 'beep', 10, value );
		};
	}
});

test( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		lpad( 'beep', 1e300 );
	}
});

test( 'if provided an empty pad string, the function throws an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		lpad( 'beep', 10, '' );
	}
});

test( 'by default, the function left pads a string with spaces', function test( t ) {
	var str = lpad( 'a', 5 );
	t.equal( str, '    a', 'left padded with spaces' );
	t.end();
});

test( 'the function supports left padding a string with a custom pad string', function test( t ) {
	var str = lpad( 'beep', 10, 'b' );
	t.equal( str, 'bbbbbbbeep', 'left padded to desired length' );
	t.end();
});

test( 'the function left pads a string such that an output string may exceed the specified length (minimum bound)', function test( t ) {
	var str = lpad( 'a', 5, 'beepboop' );
	t.equal( str, 'beepboopa', 'left padded and length exceeds minimum length' );
	t.end();
});

test( 'if the specified string length is less than or equal to the input string length, the function returns the input string', function test( t ) {
	t.equal( lpad( 'boop', 2, 'beep' ), 'boop', 'returns input string (<)' );
	t.equal( lpad( 'boop', 4, 'beep' ), 'boop', 'returns input string (=)' );
	t.end();
});

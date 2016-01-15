'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );
var isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );
var ceil = require( 'math-ceil' );
var repeat = require( 'utils-repeat-string' );


// CONSTANTS //

var MAX_SAFE_INTEGER = 9007199254740991; // 2**53 - 1


// LEFT PAD //

/**
* FUNCTION: lpad( str, len[, pad] )
*	Left pads a string such that the padded string has a length of at least `len`.
*
* @param {String} str - string to pad
* @param {Number} len - minimum string length
* @param {String} [pad=' '] - string used to pad
* @returns {String} padded string
*/
function lpad( str, len, pad ) {
	var n;
	var p;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `' + str + '`.' );
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be a nonnegative integer. Value: `' + len + '`.' );
	}
	if ( arguments.length > 2 ) {
		p = pad;
		if ( !isString( p ) ) {
			throw new TypeError( 'invalid input argument. Third argument must be a string. Value: `' + p + '`.' );
		}
		if ( p.length === 0 ) {
			throw new RangeError( 'invalid input argument. Pad string must not be an empty string.' );
		}
	} else {
		p = ' ';
	}
	if ( len > MAX_SAFE_INTEGER ) {
		throw new RangeError( 'invalid input argument. Output string length exceeds maximum allowed string length.' );
	}
	n = ( len - str.length ) / p.length;
	if ( n <= 0 ) {
		return str;
	}
	n = ceil( n );
	return repeat( p, n ) + str;
} // end FUNCTION lpad()


// EXPORTS //

module.exports = lpad;

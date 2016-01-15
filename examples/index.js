'use strict';

var round = require( 'math-round' );
var lpad = require( './../lib' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	n = round( Math.random()*10 ) + str.length;
	console.log( lpad( str, n, 'b' ) );
}


const assert = require( "assert" );
const ntrsect = require( "./ntrsect.js" );

assert.deepEqual( ntrsect( [ 1, 2, 3, 4, 5 ], [ 6, 7, 1, 2, 3 ] ),
	[ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

console.log( "ok" );

"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ntrsect",
              			"path": "ntrsect/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ntrsect.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"ntrsect": "ntrsect",
              			"path": "path"
              		}
              	@end-include
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("ntrsect", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ntrsect( [ 1, 2, 3, 4, 5 ], [ 6, 7, 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( ntrsect( [ 1, 2, 3, 4, 5 ], [ 6, 7, 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [1, 2, 3]);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLG1EQUFWLEVBQStELFlBQU87QUFDckVJLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEM7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQSxDQXRCRDs7QUF3QkEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm50cnNlY3RcIixcblx0XHRcdFwicGF0aFwiOiBcIm50cnNlY3QvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL250cnNlY3QuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm50cnNlY3RcIjogXCJudHJzZWN0XCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwibnRyc2VjdFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgbnRyc2VjdCggWyAxLCAyLCAzLCA0LCA1IF0sIFsgNiwgNywgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBudHJzZWN0KCBbIDEsIDIsIDMsIDQsIDUgXSwgWyA2LCA3LCAxLCAyLCAzIF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyAxLCAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map

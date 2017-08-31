"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "ntrsect",
              			"path": "ntrsect/ntrsect.js",
              			"file": "ntrsect.js",
              			"module": "ntrsect",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ntrsect.git",
              			"test": "ntrsect-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get common elements of two lists.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"doubt": "doubt",
              			"een": "een",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var arid = require("arid");
var doubt = require("doubt");
var een = require("een");
var raze = require("raze");
var truly = require("truly");

var ntrsect = function ntrsect(source, target) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"source:required": "[*]",
                                                			"target:required": "[*]"
                                                		}
                                                	@end-meta-configuration
                                                */

	if (!doubt(source, AS_ARRAY)) {
		source = [source].map(truly);
	}

	if (!doubt(target, AS_ARRAY)) {
		target = [target].map(truly);
	}

	source = raze(source);

	target = raze(target);

	if (arid(source) && arid(target)) {
		return [];
	}

	if (arid(source)) {
		return target;
	}

	if (arid(target)) {
		return source;
	}

	return source.filter(function (element) {return een(target, element);});
};

module.exports = ntrsect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50cnNlY3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImRvdWJ0IiwiZWVuIiwicmF6ZSIsInRydWx5IiwibnRyc2VjdCIsInNvdXJjZSIsInRhcmdldCIsIkFTX0FSUkFZIiwibWFwIiwiZmlsdGVyIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE1BQU1GLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQztBQUNqRDs7Ozs7Ozs7O0FBU0EsS0FBSSxDQUFDTixNQUFPSyxNQUFQLEVBQWVFLFFBQWYsQ0FBTCxFQUFnQztBQUMvQkYsV0FBUyxDQUFFQSxNQUFGLEVBQVdHLEdBQVgsQ0FBZ0JMLEtBQWhCLENBQVQ7QUFDQTs7QUFFRCxLQUFJLENBQUNILE1BQU9NLE1BQVAsRUFBZUMsUUFBZixDQUFMLEVBQWdDO0FBQy9CRCxXQUFTLENBQUVBLE1BQUYsRUFBV0UsR0FBWCxDQUFnQkwsS0FBaEIsQ0FBVDtBQUNBOztBQUVERSxVQUFTSCxLQUFNRyxNQUFOLENBQVQ7O0FBRUFDLFVBQVNKLEtBQU1JLE1BQU4sQ0FBVDs7QUFFQSxLQUFJUixLQUFNTyxNQUFOLEtBQWtCUCxLQUFNUSxNQUFOLENBQXRCLEVBQXNDO0FBQ3JDLFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlSLEtBQU1PLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPQyxNQUFQO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTVEsTUFBTixDQUFKLEVBQW9CO0FBQ25CLFNBQU9ELE1BQVA7QUFDQTs7QUFFRCxRQUFPQSxPQUFPSSxNQUFQLENBQWUsVUFBRUMsT0FBRixVQUFlVCxJQUFLSyxNQUFMLEVBQWFJLE9BQWIsQ0FBZixFQUFmLENBQVA7QUFDQSxDQW5DRDs7QUFxQ0FDLE9BQU9DLE9BQVAsR0FBaUJSLE9BQWpCIiwiZmlsZSI6Im50cnNlY3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJzZWN0XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm50cnNlY3QvbnRyc2VjdC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJudHJzZWN0LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibnRyc2VjdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udHJzZWN0LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJudHJzZWN0LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0R2V0IGNvbW1vbiBlbGVtZW50cyBvZiB0d28gbGlzdHMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiIClcclxuXHJcbmNvbnN0IG50cnNlY3QgPSBmdW5jdGlvbiBudHJzZWN0KCBzb3VyY2UsIHRhcmdldCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFwiWypdXCIsXHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCJbKl1cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIHNvdXJjZSwgQVNfQVJSQVkgKSApe1xyXG5cdFx0c291cmNlID0gWyBzb3VyY2UgXS5tYXAoIHRydWx5ICk7XHJcblx0fVxyXG5cclxuXHRpZiggIWRvdWJ0KCB0YXJnZXQsIEFTX0FSUkFZICkgKXtcclxuXHRcdHRhcmdldCA9IFsgdGFyZ2V0IF0ubWFwKCB0cnVseSApO1xyXG5cdH1cclxuXHJcblx0c291cmNlID0gcmF6ZSggc291cmNlICk7XHJcblxyXG5cdHRhcmdldCA9IHJhemUoIHRhcmdldCApO1xyXG5cclxuXHRpZiggYXJpZCggc291cmNlICkgJiYgYXJpZCggdGFyZ2V0ICkgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRpZiggYXJpZCggc291cmNlICkgKXtcclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG5cclxuXHRpZiggYXJpZCggdGFyZ2V0ICkgKXtcclxuXHRcdHJldHVybiBzb3VyY2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc291cmNlLmZpbHRlciggKCBlbGVtZW50ICkgPT4gZWVuKCB0YXJnZXQsIGVsZW1lbnQgKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBudHJzZWN0O1xyXG4iXX0=
//# sourceMappingURL=ntrsect.support.js.map

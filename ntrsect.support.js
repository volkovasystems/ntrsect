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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50cnNlY3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImRvdWJ0IiwiZWVuIiwicmF6ZSIsInRydWx5IiwibnRyc2VjdCIsInNvdXJjZSIsInRhcmdldCIsIkFTX0FSUkFZIiwibWFwIiwiZmlsdGVyIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE1BQU1GLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQztBQUNqRDs7Ozs7Ozs7O0FBU0EsS0FBSSxDQUFDTixNQUFPSyxNQUFQLEVBQWVFLFFBQWYsQ0FBTCxFQUFnQztBQUMvQkYsV0FBUyxDQUFFQSxNQUFGLEVBQVdHLEdBQVgsQ0FBZ0JMLEtBQWhCLENBQVQ7QUFDQTs7QUFFRCxLQUFJLENBQUNILE1BQU9NLE1BQVAsRUFBZUMsUUFBZixDQUFMLEVBQWdDO0FBQy9CRCxXQUFTLENBQUVBLE1BQUYsRUFBV0UsR0FBWCxDQUFnQkwsS0FBaEIsQ0FBVDtBQUNBOztBQUVERSxVQUFTSCxLQUFNRyxNQUFOLENBQVQ7O0FBRUFDLFVBQVNKLEtBQU1JLE1BQU4sQ0FBVDs7QUFFQSxLQUFJUixLQUFNTyxNQUFOLEtBQWtCUCxLQUFNUSxNQUFOLENBQXRCLEVBQXNDO0FBQ3JDLFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlSLEtBQU1PLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPQyxNQUFQO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTVEsTUFBTixDQUFKLEVBQW9CO0FBQ25CLFNBQU9ELE1BQVA7QUFDQTs7QUFFRCxRQUFPQSxPQUFPSSxNQUFQLENBQWUsVUFBRUMsT0FBRixVQUFlVCxJQUFLSyxNQUFMLEVBQWFJLE9BQWIsQ0FBZixFQUFmLENBQVA7QUFDQSxDQW5DRDs7QUFxQ0FDLE9BQU9DLE9BQVAsR0FBaUJSLE9BQWpCIiwiZmlsZSI6Im50cnNlY3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnRyc2VjdFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibnRyc2VjdC9udHJzZWN0LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJudHJzZWN0LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm50cnNlY3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL250cnNlY3QuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJudHJzZWN0LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0R2V0IGNvbW1vbiBlbGVtZW50cyBvZiB0d28gbGlzdHMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiIClcblxuY29uc3QgbnRyc2VjdCA9IGZ1bmN0aW9uIG50cnNlY3QoIHNvdXJjZSwgdGFyZ2V0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFwiWypdXCIsXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiWypdXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIHNvdXJjZSwgQVNfQVJSQVkgKSApe1xuXHRcdHNvdXJjZSA9IFsgc291cmNlIF0ubWFwKCB0cnVseSApO1xuXHR9XG5cblx0aWYoICFkb3VidCggdGFyZ2V0LCBBU19BUlJBWSApICl7XG5cdFx0dGFyZ2V0ID0gWyB0YXJnZXQgXS5tYXAoIHRydWx5ICk7XG5cdH1cblxuXHRzb3VyY2UgPSByYXplKCBzb3VyY2UgKTtcblxuXHR0YXJnZXQgPSByYXplKCB0YXJnZXQgKTtcblxuXHRpZiggYXJpZCggc291cmNlICkgJiYgYXJpZCggdGFyZ2V0ICkgKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG5cblx0aWYoIGFyaWQoIHNvdXJjZSApICl7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGlmKCBhcmlkKCB0YXJnZXQgKSApe1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRyZXR1cm4gc291cmNlLmZpbHRlciggKCBlbGVtZW50ICkgPT4gZWVuKCB0YXJnZXQsIGVsZW1lbnQgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBudHJzZWN0O1xuIl19
//# sourceMappingURL=ntrsect.support.js.map

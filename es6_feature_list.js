var ES6_LIST = [
{
	name : "let",
	func : "let num = 1;"
},
{
	name : "const",
	func : "const num = 1;"
},
{
	name : "destructuring",
	func : "var x = 1; var y = 1; [x, y] = [y, x];"
},
{
	name : "tpl",
	func : "var name = 'pi'; var str = `my name is ${name}`;"
},
{
	name : "str_ext",
	func : "var str = 'pi';var value;for(value of str);str.codePointAt(0);String.fromCodePoint(0x20BB7);str.charAt(0);'\u01D1'.normalize() === '\u004F\u030C'.normalize();str.startsWith('pi');str.endsWith('pi');str.includes('pi');str.repeat(3);"
},
{
	name : "number_ext",
	func : "Number.isFinite(Infinity);Number.isNaN(NaN);Number.parseInt('12.34');Number.parseFloat('123.45');Number.isInteger(12.3);Number.EPSILON.toFixed(20);Number.isSafeInteger(3);"
},

{
	name : "array_ext",
	func : "var arrayLike = {'0': 'a','1': 'b','2': 'c',length: 3};Array.from(arrayLike); Array.of(1, 2, 3);[1, 2, 3, 4, 5].copyWithin(0, 3, 4);[1,2,3,4].find(function(){return true;});[1,2,3,4].findIndex(function(){return true;});[1, 2, 3].fill(7, 1, 2);for (var index of [1, 2].keys()) {};for (var [index, elem] of [1, 2].entries()){};"
},
{
	name : "math_ext",
	func : "Math.trunc(4.1);Math.sign(5);Math.cbrt(0);Math.clz32(0);Math.imul(2, 4);Math.fround(0);Math.hypot(3, 4);Math.expm1(0);Math.log1p(1);Math.log10(2);Math.log2(3);Math.sinh(1);Math.cosh(1);Math.tanh(1);Math.asinh(1);Math.acosh(1);Math.atanh(1);"
},
{
	name : "...",
	func : "var a = [1,2,3];var b = [3,2,...a];"
},
{
	name : "rest",
	func : "var arr = [1,2,3];var func = function(a,b,c){};func(...arr);"
},
{
	name : "=>",
	func : "var func = ()=>{};func();"
},
{
	name : "for...of",
	func : "var a = [3,2,1];var b;for(b of a){};"
},
{
	name : "symbol",
	func : "var a = Symbol();"
},
{
	name : "set",
	func : "var s = new Set([1,2,3,3,3]);"
},
{
	name : "map",
	func : "var m = new Map([['name','tangmin'],['id','12345']]);"
},
{
	name : "generator",
	func : "function* func(){var y = yield 1;return y;}"
},
{
	name : "class",
	func : "class Father{};class Child extends Father{};var child = new Child();"
}
];
var assert = require('assert');

// assert.equal(1,true,'truthy');
// assert.notEqual(1, true, 'truthy');
//sert.ok('This is a string' ,'string that are not empty  are truthy');
//assert.ok(0, 'Zero is  not truthy');
// var mythrows  = function(arg)
// {

// };
/*
var mythrows;
assert.throws(
	mythrows = function(){
		var a = 1/1;
		throw new Error("throws.");	
});
assert.doesNotThrow(
	mythrows = function(){
		var a = 1/1;
		throw new Error("doesNotThrow");	
});
mythrows();
*/

var vm = require('vm');
vm.runInThisContext("1+1");

var e = 0;
var v = 0;
eval('e = e+1');
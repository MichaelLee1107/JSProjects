// angular.module('app').service('otherWiseService', ['$location','$document', '$timeout','$localStorage','$rootScope','$sessionStorage', function ($location,$document, $timeout,$localStorage,$rootScope,$sessionStorage) {
// 	this.otherwise = '/access/adminLogin';
//   }]);




//var str = 'zho--';

// var regex = new RegExp("^([a-zA-Z0-9])$");
// console.log(regex.test('国'));

// const isChinese = (str) => {
//     if (escape(str).indexOf('%u') < 0) {
//         return false;
//     }
//     return true;
// };
// console.log(isChinese('zho---'));



var NameSpace = {};
NameSpace.Hello = new function() {
  var self = this;
  var name = 'world';
  self.sayHello = function(_name) {
    return 'Hello ' + (_name || name);
  };
};
console.log(NameSpace.Hello.sayHello());
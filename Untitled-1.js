/**
 * FileName    : Untitled-1.js
 * ProjectName : JSProjects
 * Author      : liwenbin
 * Created Date: 2018-12-09 21:12:38
 * Description : 
 * -----
 * Last Modified: michaellee
 * Modified By  : liwenbin (liwenbin@ehz.cn>)
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

var _ = require('lodash');
var express = require('express');
var app = express();

let temp1 = [{
    "moduleName": "email"
}, {
    "moduleName": "EsbServer"
}, {
    "moduleName": "ESBSystem"
}, {
    "moduleName": "fileStorage"
}, {
    "moduleName": "mqttSystem"
}, {
    "moduleName": "osSystem",
     "flag":12
}, {
    "moduleName": "projectManage",
    "flag":12
}];

var ejs = require('ejs');
let str = "Hello <%= supplies[0] %>";
var data='{"title":"cleaning","supplies":["mop","broom","duster"]}';
console.log(ejs.render(str,JSON.parse(data)));


var obj = {'0':{'a':0},'1':'b','2':'c'};

Object.keys(obj).forEach(function(key){

     console.log(key,obj[key]);
     if(key==0){
     	delete obj[key];
     }

});
console.log(obj)



var a = 23322;
if( typeof a || a != 123 && a!=345){
	console.log(true);
}else{
	console.log(false);
}

const attrNames = ['name','tags','location','ico'];
console.log(_.includes(attrNames,'sdfsdf'));




/**
 * FileName    : test1.js
 * ProjectName : JSProjects
 * Author      : liwenbin
 * Created Date: 2018-12-04 15:14:58
 * Description : 
 * -----
 * Last Modified: michaellee
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */


function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
} 
console.log(getIPAdress());
try{
  var a = b;
if(a){
  console.log(true);
}else{
  console.log(false);
}
}catch(wee){

}


var _ = require('lodash');
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
   { 'user': 'fred',   'age': 33, 'active': false }
];

const items = _.filter(users, { 'age': 36});
const items1 = _.filter(users, { 'age': 33 });
const items2 = _.filter(users, function(o){
    return o.age == 33 || o.age == 36
});
//console.log(items);
console.log(items2);

var moment = require('moment');
console.log(moment('01:23:00','HH:mm:ss').isValid());

console.log(new Date().getTime());
console.log(moment(1552471780).format('YYYY-MM-DD HH:mm:ss'));


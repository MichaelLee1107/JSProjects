
//-------------------------------------------------------------
// var http = require('http');
// http.createServer(function(req,res)
// {
// 	console.log("reeedd")
// 	res.writeHead(200, {'conent-type':'text/plain'});
// 	res.end("hello world!\n");
// }).listen(8184,"127.0.0.1");
// console.log("server running at http://127.0.0.1:8184");

//-------------------------------------------------------------

// var net = require('net');
// var chatServer = net.createServer();
// var clientList = [];
// chatServer.on('connection', function(client){
// 	//sept1
// 	//client.write('hi!\n');
// 	//client.write('bye!\n');
// 	//client.end();

// 	//setp2
// 	// client.write('hi!\n');
// 	// clientList.push(client);
// 	// client.on('data',function(data){
// 	// 	for (var i = 0; i < clientList.lenght; i++) {
// 	// 		clientList[i].write(data);
// 	// 	}
// 	// 	//console.log(data.toString());
// 	// })

// 	//setp3
// 	client.name = client.remoteAddress + ":"+client.remotePort;
// 	client.write('hi!'+client.name+'!\n');
// 	clientList.push(client);

// 	client.on('data',function(data){
// 		broadcast(data,client);
// 		//console.log(data.toString());
// 	})

// 	client.on('error', function(err){
// 		console.log(e);
// 	})

// 	client.on('end', function(){
// 		console.log(client.name+" Quit!");
// 		clientList.splice(clientList.indexOf(client),1)
// 	})

// 	function broadcast(message,client){
// 		var cleanup = [];
// 		for (var i = 0; i < clientList.length; i+=1) {
// 			if(client == clientList[i]){
// 				if(clientList[i].writable){
// 					clientList[i].write(client.name+" say "+ message);
// 				} else{
// 					cleanup.push(clientList[i]);
// 					clientList[i].destroy();
// 				}
// 			}
// 		}
// 		//������������'
// 		for( var i = 0; i< cleanup.length; i++){
// 			clientList.splice(clientList.indexOf(clientList[i]),1);
// 			console.log("Destory: "+client.name);
// 		}

// 	}

// })
// chatServer.listen(9000);

var msg = "hello world";
console.log(msg);
//var msg = 'hello;


const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const fields = ['中国', 'price', 'color'];
const myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];
 
// const json2csvParser = new Json2csvParser({ fields });
// const csv = json2csvParser.parse(myCars);
// fs.writeFileSync("1.csv", csv,'utf8');
// console.log(csv);



// var xlsx = require('xlsx');
 var cry = require('./crypto');
 var key = "1234567890";
 //var key2 = "2e8ada6381822f8f";
 var key2 = "2e8ada6381822f8f";
 var data = "2e8ada6381822f8f";//"1530729814233";
// var encode = cry.ENCODE_AES128(key, data);
 var encode = "6aLbQaRry8LZwY6DdVvOXSgvB7m0k6D/5oj4x5tADLPqbGmu0mdw7Io6kH5H/0kP0I4MczMaWSji95z6xISwhKTxmCHDLyMPwVJoEyT8NQc="
 var decode = cry.DECODE_AES128(key2, encode);
 console.log(encode);
 console.log(decode); 



var moment = require('moment');
var dt = moment(new Date()).format('YYYY-MM-DD hh:mm:ss:ms');
console.log(dt);

// //console.log(__dirname);  // 当前文件所在的绝对路径。
// console.log(__filename);
// var throw1 = function(){
//     console.log('=======================');
//     throw new Error('1222');
// }
// throw1();


process.on('uncaughtException', function (err) {
  console.log(err.stack);
  console.log('----------------------')
  console.log(err.stack);
});
var path    = require('path');
var defpath = path.join(__dirname,'../');
console.log(defpath)
var temp = defpath.slice(1,defpath.length-1).toString().split('/') ;

//var temp = defpath.toString().split("/");
//var len = temp.length;
//console.log(temp);
console.log(temp[temp.length-1]);
console.log(process.getegid())

var fs123 = require('fs');
var temp = fs123.readFileSync('Twitter.js','utf8');
console.log(temp);
temp.indexOf()
var temp = temp.replace('this.otherwise = \'/gateWay/login\'','this.otherwise = \'/access/adminLogin\'');
fs.writeFileSync('./Twitter.js',temp);
console.log(temp);


const getDateTime = (dt)=>{
  return 
}
console.log(new Date(1551782936763));
const _ = require('lodash');
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
 var users2 = [
  { 'user': 'liwenbin', 'age': 36, 'active': true },
  { 'user': 'asdfasfd',   'age': 40, 'active': false }
];
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);





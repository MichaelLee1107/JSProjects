
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




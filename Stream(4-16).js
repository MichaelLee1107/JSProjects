var fs = require('fs');
fs.readFile('stream.txt',function(data){
	console.log('read file:'+ data);
});
fs.unlink('stream.txt');
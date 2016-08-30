/**
 * Created by Michael Lee on 2016/8/15.
 */
var http = require('http');
var cluster = require('cluster');
var numCPUS = require('os').cpus().length;
if( cluster.isMaster){
    // 创建进程
    for(var i = 0; i<numCPUS; i++){
        cluster.fork();
    }

    cluster.on('death',function(worker){
        console.log('work' + worker.pid+' deid');
        cluster.fork();
    })
}else {
    http.Server(function(req,res){
        res.writeHead(200);
        res.end("Hello world\n");
    }).listen(8000);
}


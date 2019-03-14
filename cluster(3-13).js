/**
 * Created by Michael Lee on 2016/8/15.
 */
var http = require('http');
var cluster = require('cluster');
var numCPUS = require('os').cpus().length;
var rssWarn = (12*1024*1024)
    ,heapWarn = (10*1024*1024);

if( cluster.isMaster){
    // 创建进程
    for(var i = 0; i<numCPUS; i++){
        var worker =  cluster.fork();
        worker.on('message', function(m){
            if(m.memory){
                if(m.memory.rss > rssWarn){
                    console.log('worker' + m.process + ' using to much memory');
                }
            }
        })
    }
}else {
    http.Server(function(req,res){
        res.writeHead(200);
        res.end("Hello world\n");
    }).listen(8000);
}


/**
 * Created by Michael Lee on 2016/8/15.
 */
var http = require('http');
var cluster = require('cluster');
var numCPUS = require('os').cpus().length;
var rssWarn = (50 * 1024 * 1024)
    , heapWarn = (50 * 1024 * 1024);

var workers = {};
if (cluster.isMaster) {
    // 创建进程
    for (var i = 0; i < numCPUS; i++) {
        createWorker();
    }

    setInterval(function () {
        var time = new Date().getTime();
        for (pid in workers) {
            if (pid.hasOwnProperty(pid) &&
                workers[pid].lastCb + 500 < time) {
                console.log('long runnning worker ' + pid + ' killed');
                workers[pid].worker.kill();
                delete workers[pid];
                createWorker();
            }
        }
    }, 1000)

} else {
    http.Server(function (req, res) {
        if (Math.floor(Math.random() * 200) === 4) {
            console.log('stoped' + process.pid + 'from ever finishing');
            while (true) {
                continue;
            }
        }
        res.writeHead(200);
        res.end('Hello world from ' + process.pid + ' \n');
    }).listen(8000);


    //每秒报告一次
    setInterval(function report(){
        process.send({cmd:"reportMem", memory:process.memoryUsage(),process: process.pid});
    },1000)
}

function createWorker(){
    var worker =  cluster.fork();
    console.log('Create worker: '+ worker.pid);
    //运行开机时间
    workers[worker.pid] = {worker: worker, lastCb: new Date().getTime()-1000};
    worker.on('message',function(m){
        if(m.cmd === 'reportMem')
        {
            workers[m.process].lastCb = new Date().getTime();
            if(m.process.rss > rssWarn){
                console.log('worker '+ m.process + 'using to much memory.');
            }
        }
    })
}


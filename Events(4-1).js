/**
 * Created by Michael Lee on 2016/8/15.
 */
var utils = require('utils');
var EventEmitter = require('events').EventEmitter;
var Server = function(){
    console.log('init');
};
utils.inherits(Server, EventEmitter);
var s = new Server();
s.on('abc',function(){
    console.log('abc');
})

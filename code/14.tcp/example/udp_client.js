/**
 * Created by lihongji on 2015/7/11.
 */

var dgram=require("dgram");
var util=require("util");
var client=dgram.createSocket('udp4');
var buffer=new Buffer("你好");

//buffer,偏移量，长度，服务器端口号，
client.bind(4321,'localhost');

client.send(buffer,0,buffer.length,1234,'localhost');

client.on('message',function(msg,rinfo){
    console.log('接收到 ',msg.toString());

});
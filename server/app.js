var http = require('http');
var neteaseMusicApi = require('neteaseMusicApi');

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
	neteaseMusicApi.comments(30394891,function(data){
       	response.end(data);
       });
}).listen(8881);

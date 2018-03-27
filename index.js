var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969);
server.listen(port, () => console.log('Server running in port ' + port));



io.on('connection', function (socket) { //client connect to server
 


  socket.on('mess', function (data) {
    socket.emit('news', ' You send message: ' + data); // send event to client
  });

});

app.get('/', (req, res) => {
  res.sendFile('test-socket-client.html', { "root": __dirname });
})
var express = require('express')
var io = require('socket.io')(http);
var app = express();
const usersConnected = 0 ;

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World index.js!' + usersConnected)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

io.on('connection', function(socket){
  console.log('a user connected');
  usersConnected++;
});
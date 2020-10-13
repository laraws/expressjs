var express = require('../../');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(express.port);
  console.log('Express started on port '+express.port);
  console.log('http://127.0.0.1:'+express.port);
}

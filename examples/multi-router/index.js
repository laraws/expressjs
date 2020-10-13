var express = require('../..');

var app = module.exports = express();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

app.get('/', function(req, res) {
  res.send('Hello from root route.')
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(express.port);
  console.log('Express started on port '+express.port);
  console.log('http://127.0.0.1:'+express.port);
}

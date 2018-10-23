var express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3333, function() {
  console.log('listening localhost:3333');
});

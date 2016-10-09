const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.set('port', process.env.PORT || 3001);

app.get('/', (req,res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.use(express.static('client'));

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});

module.export = http;
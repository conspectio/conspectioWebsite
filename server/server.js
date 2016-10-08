const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.get('/', (req,res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.use(express.static('client'));

http.listen(3001, () => {
  console.log('listening on port 3001');
});

module.export = http;
//Refer Example - https://dzone.com/articles/advanced-nodejs-process-management-with-pm2
var express = require('express');
var app = express();
app.get('/', (req, res) => {
  console.log('GET /');
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
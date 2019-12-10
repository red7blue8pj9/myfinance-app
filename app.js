const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('dist/myfinance-app'));

app.get('*', function (req, res) {
  var options = {
    root: path.join(__dirname, 'dist/myfinance-app')
  };
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  return res.sendFile('index.html', options);
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


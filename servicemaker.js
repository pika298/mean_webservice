var express = require('express');
var app = express();

// put all my static pages under /public
app.use(express.static(__dirname + '/public'));


app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

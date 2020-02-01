const express = require("express");
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');

app.get("/", (request, response) => {
  response.render('index');
});

// app.get("/test", (request, response) => {
//   response.send("Your in test route");
// });

// app.get("/test/:name/:age", (request, response) => {
//     console.log(request.query);
//   response.send(request.params.name + " : " + request.params.age)
// });

app.listen(3005);

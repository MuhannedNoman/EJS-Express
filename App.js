const express = require("express");
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');

app.get("/:userQuery", (request, response) => {
  response.render('index',{data : {userQuery : request.params.userQuery,
                                  searchResults : ['firstStuff','secondStuff','thirdStuff'],
                                  loggedIn : true,
                                  userName : 'Hello World'}});
});

// app.get("/test", (request, response) => {
//   response.send("Your in test route");
// });

// app.get("/test/:name/:age", (request, response) => {
//     console.log(request.query);
//   response.send(request.params.name + " : " + request.params.age)
// });

app.listen(3005);

const Express = require("express");
const App = Express();
const port = 8080;




App.get('/', function(request, response){ // access to root directory
    response.send("Hello World!")
});

App.use('/public', Express.static('public')); //access to html file 

// listening on port 8080
App.listen(port, function(){ 
    console.log("Server running!")
})
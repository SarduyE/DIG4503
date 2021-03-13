const Express = require("express");
const app = Express(); //assigns express to a variable 
const port = 3000; //assigns port to a variable 

app.get('/people/:id',(req, res) => {
  res.json({userid: req.params.id});
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal.toLowerCase();
  var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof",
  }
  
  res.send("The " + animal + " says " + sounds[animal])
});

app.listen(port, () =>{ //listens on port 3000

});
import Express from "express";
import fs from "fs";

const App = Express(); // assigns express to a variable 
const port = 3010; // assigns port number to a variable 

let fileContents = fs.readFileSync("database.json"); // reads database.json
let database = JSON.parse(fileContents); // turns database contents into json objects


App.get("/employees/:name", (req, res) =>{ // defines parameters
  let result = {"error":"not found"} // if requested name is not found

  // run function for each 'name' value in the array
  database.forEach((value) => {
    if(req.params.name == value.name) {
      result = value;
    }
  });
  res.json(result); // json response
})

App.get("/ages/:number",(req, res) =>{ // defines parameters
let result = {"error": "not found"} // if requested age is not found

// run function for each 'age' value in the array
database.forEach((value) =>{ 
  if(req.params.number == value.age){
    result = value;
  }
});
res.json(result); // json response

})



// listening on port 3010
App.listen(port, () =>{
  console.log("Server running!");
})
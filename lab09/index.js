import Express from "express";
import fs from "fs";

const App = Express(); // assigns express to a variable 
const port = 3010; // assigns port number to a variable 

let fileContents = fs.readFileSync("database.json"); // reads database.json
let database = JSON.parse(fileContents); // turns database contents into json objects

App.use("/", Express.static("public"));
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

App.post("/api/employees/:name/:age", (req, res) => { //defines parameters
  let result = {  // sets value of result to the values of name and age
      "name": req.params.name,
      "age": parseInt(req.params.age) //parses a string and returns integer
  };

  database.push(result); //push value of result to database

  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t')); // writes to the database file

  res.json(result);

});



// listening on port 3010
App.listen(port, () =>{
  console.log("Server running!");
})
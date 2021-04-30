import Express from "express";
import fs from "fs";
import chalk from "chalk";
import fileUpload from "express-fileupload";
import validator from "validator";


const App = Express(); // assigns express to a variable 
const port = 3010; // assigns port number to a variable 

let fileContents = fs.readFileSync("database.json"); // reads database.json
let database = JSON.parse(fileContents); // turns database contents into json objects

App.use("/", Express.static("public"));
App.get("/employees/:name", (req, res) =>{ // defines parameters
  let result = {"error":"not found"} // if requested name is not found

  if (validator.isLowercase(req.params.name)){ // validates wether the input is lowercase or not
  // run function for each 'name' value in the array
  database.forEach((value) => {
    if(req.params.name == value.name) {
      result = value;
   
    }
  });
} else { // if the input is not lowercase
  result = {
    "error": "it has to be lowercase!"
  }
}
  res.json(result); // json response
})

App.get("/ages/:number",(req, res) =>{ // defines parameters
let result = {"error": "not found"} // if requested age is not found

if (validator.isNumeric(req.params.number)) { //validates wether the input is a number or not
// run function for each 'age' value in the array
database.forEach((value) =>{ 
  if(req.params.number == value.age){
    result = value;
    
  }
});
} else { // if the input is not a number
  result = {
    "error": "it has to be a number!"
  }
}
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

//default
App.use(fileUpload());
App.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + 'ttp://localhost:3010/upload' + sampleFile.name;

  // place file on the server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

// listening on port 3010
App.listen(port, () =>{
  console.log(chalk.black.bgGreen("Server running!"));
})
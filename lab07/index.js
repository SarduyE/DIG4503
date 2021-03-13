import Express from 'express';
const App = Express(); // assigns express to a variable
const port = 45030; // asigns port number to a variable 

const names = [  // array
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];

App.get('/people/:person', (req,res) => { //defines parameters
  let person = req.params.person; //sets variable to request, parameter
  if (names.includes(person)){
    res.json({Person: person}); 
  } else {
    res.json({Person: "Not found"}); // if name is not found responds with json object 
  }
});

App.get('/search/:person', (req,res) => { 
  const result = names.filter(str => str.includes(req.params.person));
  if (result != 0){
    res.json({Search: result}); //result displays if found 
  } else {
    res.json({Search: "Not found"});
  }
});

// listening on port 45030
App.listen(port, function(err){ 
  if (err) console.log("Error in server setup")  //if there is an error log message
  console.log("Server listening on Port", port);  //if app is listening log this message
}) 
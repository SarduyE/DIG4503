const axios = require("axios"); //requires axios module

axios('https://pokeapi.co/api/v2/pokemon/mewtwo') //promise statement fetching data from the api


.then(function(response){  // function called if promise is successful
  const pokemon = response.data; //extracts the data 

  console.log(" This is a " + pokemon.name + " and its ID is " + pokemon.id); //outputs the name and id of the pokemon that was requested
})
.catch(function(error){ //function is called if the promise is rejected
console.log(" Error: " + error)}); //displays error message 
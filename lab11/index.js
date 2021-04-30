import MongoClient from 'mongodb';
import chalk from "chalk";
import timestamp from 'time-stamp';


const URL = "mongodb+srv://esarduyrodriguez:UFCZGeA55T7ZnT6N@cluster0.oewwc.mongodb.net"; //connect to database

// gather and list airbnb data
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db("sample_airbnb");

  let collection = database.collection("listingsAndReviews");

  let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

  cursor.forEach(document => {
    console.log(chalk.white.bgGreen(document.name)); // green background with white text
    
  }, () => {
    connection.close();
    console.log(timestamp.utc('HH:mm:ss')); //Logs time stamp
  })
}) 

//gather and list restaurant data
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db("sample_restaurants");

  let collection = database.collection("restaurants");

  let cursor = collection.find({cuisine: "Bakery"},{borough: "Brooklyn"},{ grade: "A" }, {score: {$gte:500} });

  cursor.forEach(document => {
    console.log(chalk.white.bgRed(document.name)); //chalk-red background and white text
    
  }, () => {
    connection.close();
    console.log(timestamp.utc('HH:mm:ss')); //Logs time stamp
  })
}) 
// if an error occurs 
.catch(error => {
  console.log(chalk.red.bold("Error: " + error)); //chalk-red bold letters
})

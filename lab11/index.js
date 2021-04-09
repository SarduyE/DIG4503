import MongoClient from 'mongodb';

const URL = "mongodb+srv://esarduyrodriguez:UFCZGeA55T7ZnT6N@cluster0.oewwc.mongodb.net"; //connect to database

// gather and list specified data
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db("sample_airbnb");

  let collection = database.collection("listingsAndReviews");

  let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

  cursor.forEach(document => {
    console.log(document.name);
  }, () => {
    connection.close();
  })
}) 
// if an error occurs 
.catch(error => {
  console.log("Error: " + error);
})

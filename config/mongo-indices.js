// -- This file records the indices which must be run using mongo
// Run each command in Mongo after upload the Yelp dataset onto the database. 

// -- Text index on business name.
db.businesses.createIndex({name:"text"});
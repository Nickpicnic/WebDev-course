# Basic Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find 
* update
* remove

# INSERT
* db.dogs.insert({name: "Jack", age: "5"})

# FIND
* db.dogs.find({name: "Jack"})            // {name: "Jack", age: "5"}

# UPDATE
* db.dogs.update({name : "Jack"}, {breed : "Jack"})                                  // overwrite
* db.dogs.update({name : "Jack"}, {$set: {name: "Jack", breed: "Lab"}})    // append

# REMOVE
* db.dogs.remove({breed: "Labradoodle"})        // delete all that matches

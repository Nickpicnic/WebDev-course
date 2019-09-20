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
# db.dogs.insert({name: "dkfjdf", age: "fldkf"})

# FIND
# db.dogs.find({name: "dkfjdf"})            // {name: "dkfjdf", age: "fldkf"}

# UPDATE
# db.dogs.update({.. : ..}, {.. : ..})                                  // overwrite
# db.dogs.update({.. : ..}, {$set: {name: "dlkld", bred: "lednls"}})    // append

# REMOVE
# db.dogs.remove({breed: "Labradoodle"})        // delete all that matches

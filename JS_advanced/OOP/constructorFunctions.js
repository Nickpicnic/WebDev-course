function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this. numSqft = numSqft;
}

// Capitalization of the constructor function name - this is convention!

// The leyword 'this' is back!

// We are attaching properties onto the keyword 'this'. We would like the
// keyword 'this' to refer to the object we will create from our constructor
// function, how might we do that? 

var firstHouse = House(2, 2, 1000); // dous this work?
firstHouse                          // undefined... guess not!

// We're not returning anything from the function so our House function returns undefined

// We are not explicitely binding the keyword 'this' or placing it inside
// a declared object. This means the value og the keyword 'this' will be 
// the global object, which is not what we want!


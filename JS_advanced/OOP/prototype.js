// this is the constructor function
function Person(name){
    this.name = name;
}                                           // undefined

Person.prototype                            // Object {}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");              // undefined

// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__

elie.__proto__ === Person.prototype         // true
colt.__proto__ === Person.prototype         // true

// the Person.prototype object also has a property
// called constructor which points back to the function

Person.prototype.constructor === Person;    // true
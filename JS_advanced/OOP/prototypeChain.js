// this is the constructor function
function Person(name){
    this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;
elie.isInstructor;      // true
colt.isInstructor;      // true

//how were we able to access properties on the prototype?
// __proto__:

// ========================================================

var arr = [];           // undefined

new Array               // []

arr.push(10)            // 1
arr                     // 10

console.dir(arr)                // Array[1]
                                //       0: 10
                                //       lenght: 1
                                //       __proto__: Array[0]

arr.hasOwnProperty("length")    // true

dir(arr)                // Array[1]
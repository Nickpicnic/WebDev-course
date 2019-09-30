var person = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi, " + this.firstName;
    },
    determineContext: function() {
        return this === person;
    },
    dog: {
        sayHello: function() {
            return "Hello, " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
};

console.log("person.sayHi:\n\t" + person.sayHi());
console.log("person.determine:\n\t" + person.determineContext());
console.log("person.dog.Hello:\n\t" + person.dog.sayHello());
console.log("person.dog.determine:\n\t" + person.dog.determineContext());
console.log("person.dog.Hello(call):\n\t" + person.dog.sayHello.call(person));
console.log("person.dog.determine(call):\n\t" + person.dog.determineContext.call(person));

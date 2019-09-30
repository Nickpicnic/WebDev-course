function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Person("Elie", "Schoppik");

console.log(elie.firstName + " " + elie.lastName);      // Elie Schoppik
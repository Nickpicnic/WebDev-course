var colt = {
    firstName: "Colt", 
    sayHi: function() {
        return "Hi, " + this.firstName;
    }, 
    addNumbers: function(a, b, c, d) {
        return this.firstName + " just calculated " + (a+b+c+d);
    }
};

var elie = {
    firstName: "Elie"
};

var elieCalc = colt.addNumbers.bind(elie, 1, 2, 3, 4);  // function(){}....
console.log(elieCalc());                                // Elie just calculated 10

var elieCalc2 = colt.addNumbers.bind(elie);             // function(){}....
console.log(elieCalc2(5, 6, 7, 8));                     // Elie just calculated 26
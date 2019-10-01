function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi, " + this.name;
    }
}

elie = new Person("Elie");
elie.sayHi();               // Hi, Elie

// now this code works, but it is inefficient
// every time we make an object using the new keyword we have to redefine this function
// but it's the same for everyone! Let's put it on the prototype instead

function Person(name){
    this.name = name;
} 

Person.prototype.sayHi = function(){
    return "Hi, " + this.name;
}

elie = new Person("Elie");
elie.sayHi();               // Hi, Elie

// =========================================================
// EXERCISE

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
    this.turnOn = function(){
        this.isRunning = true;
    }
    this.turnOff = function(){
        this.isRunning = false;
    }
    this.honk = function(){
        if(this.isRunning){
            console.log("beep");
        }
    }
}

var car = new Vehicle("Japan", "Mazda", 1981);
console.log(car.isRunning);     // false
car.turnOn();
console.log(car.isRunning);     // true
car.honk();                     // beep
car.turnOff();                   
console.log(car.isRunning);     // false
car.honk();                     

// refactor var.

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
};

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
};
Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}
Vehicle.prototype.honk = function(){
    if(this.isRunning){
        console.log("beep");
    }
}

var car = new Vehicle("Japan", "Mazda", 1981);
console.log(car.isRunning);     // false
car.turnOn();
console.log(car.isRunning);     // true
car.honk();                     // beep
car.turnOff();
console.log(car.isRunning);     // false
car.honk();   
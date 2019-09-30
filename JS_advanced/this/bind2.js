var colt = {
    firstName: "Colt", 
    sayHi: function() {
        setTimeout(function(){
            console.log("Hi, " + this.firstName);
        }, 1000)
    }
};
colt.sayHi()    // Hi, undefined

var colt = {
    firstName: "Colt", 
    sayHi: function() {
        setTimeout(function(){
            console.log("Hi, " + this.firstName);
        }.bind(this), 1000)
    }
};
colt.sayHi()    // Hi, Colt
function outer(){
    var data = "closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

outer();            // function inner(){...}

outer()();          // "closures are awesome"

// ================================================

function outer(a){
    return function inner(b){
        // the inner function is making use of the variable "a"
        // which was defined in an outer function called "outer"
        // and by the time this is called, that outer function has returned
        return a + b;
    }
}

outer(5)(5)     // 10

var storeOuter = outer(5);
storeOuter(10)  // 15

// A COUPLE THINGS TO NOTE HERE:

    // We have to "return" the inner function for this to work

    // We can either call the inner function right away by using 
    // an extra() or we can store the results of the function in 
    // a variable (very similar to how bind works)

    // We do NOT have to give the innew function a name - we can
    // make it anonymous 
# OOP
* **Constructor Functions** 
* **Creating an object** with **'new'** keyword
    - It first creates an empty object
    - It then sets the keyword **'this'** to be that empty object
    - It adds the line **'return this'** to the end of the function, which follows it
    - It adds a property onto the empty object called **'__proto__'**, which links the prototype property on the constructor function to the empty object

* Multiple Constructors
    - call
    - apply
    - apply + arguments

# Prototypes
   * Every constructors function has a property on it call **"prototype"**, which is an object
   * The prototype object has a property on it called **"constructor"**, which points back to the constructor function
   * Anytime an object is created using the **"new"** keyword, a property called **"__proto__"** gets created, linking the object and the prototype property of the constructor function

# Closures
* Closure is a function that makes use of variables defined in outer functions that have previously returned
    - We have to "return" the inner function for this to work

    - We can either call the inner function right away by using an extra() or we can store the results of the function in a variable (very similar to how bind works)

    - We do NOT have to give the innew function a name - we can make it anonymous 

* Recap
    - Closure exists when an inner function makes use of variables declared in an outer function which has previously returned
    
    - Closure does not exist if you do not return an inner function and if that inner function does not make use of variables returned by an outer function

    - We can use closures to create private variables and write better code that isolate our logic and application

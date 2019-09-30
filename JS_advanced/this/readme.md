# The Keyword 'this'
* a reserved keyword in JS
* usually determined by how a function is called
    - 1 - Global Context ('this is not inside of a declared object')
    - 2 - Implicit / Object (When the leyword 'this' IS inside of a declared object)
    - 3 - Explicit Binding (Choose what we want the context of 'this' to be using call, apply or bind)
    - 4 - The 'new' keyword (We can set the context of the keyword 'this' using the 'new' keyword);
    
:-- | :--: | :--: 
[NAME OF METHOD]    | PARAMETERS                | INVOKE IMMEDIATELY?
[Call]              | thisArg, a, b, c, d,...   | Yes
[Apply]             | thisArg, [a,b,c,d,...]    | Yes
[Bind]              | thisArg, a, b, c, d,...   | No
    

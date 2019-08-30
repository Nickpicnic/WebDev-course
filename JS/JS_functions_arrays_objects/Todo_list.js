var todos = [];
window.setTimeout(function() {
    var request1 = "What would you like to do?";
    var request2 = "Enter a new todo";
    var answer = prompt(request1);
    while (answer !== "quit") {
        if (answer === "new") {
            todos.push(prompt(request2));
        } else if (answer === "list") {
            console.log(todos);
        }
        answer = prompt(request1);
    }  
}, 500);
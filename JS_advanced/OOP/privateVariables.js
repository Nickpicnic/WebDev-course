function counter(){
    var count = 0;
    return function(){
        return ++count;
    }
}

counter1 = counter()
counter1()      // 1
counter1()      // 2

counter2 = counter()
counter2()      // 1
counter2()      // 2

counter1()      // 3 this is not affected ny counter2!

count           // ReferenceError: count is not defined - because it is private!

// ==============================================================================

function classRoom(){
    var instructors = ["Colt", "Elie"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructors: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom()
course1.getInstructors()        // ["Elie", "Colt"]
corse.addInstructors("Ian")     // ["Elie", "Colt", "Ian"]
course.getInstructors()         // ["Elie", "Colt", "Ian"]

course2 = classRoom()
course2.getInstructors()        // ["Elie", "Colt"] – not affected by course1

// we also have NO access to the instructors variable
// which makes it private - no one can modify it
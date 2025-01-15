// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately
//  after they are defined. They are typically used to create a local scope for variables 
// to prevent them from polluting the global scope.


(function firstFunc(){
    console.log(`Database Connected!`)
})();

// we have to use semicolon to stop the first function if we don't use 
// then it dos'nt break and show error to us

(function secondFunc(name){
    console.log(`${name} Your DataBase Connected succesfully`)
})('sakshi');

// the above is both named IIFE function 


// now using IFFE with arrow function :-

(
    (profession) =>{
console.log(`Hello I'm a ${profession}`)
    }
)('Developer')






// The function is wrapped in parentheses (function() 
// { ... }), followed by () to immediately invoke it.






// **********************************************************************************************
// Now we have a another Topic JavaScript Execution Content
// 1:- Gloabal execution context
// 2:- functional execution context 
// 3:- Eval execution context

// It means whatever you made a file how that javaScript will run 
// that file 

// To run those files we have a two phase 
// 1 :- memory creation phase 
// in memory only variable that you have declared for that they located 
// the space not execute those variable 

// 2 :- execution phase



// Gloabl execution context
// function Execution context
//eval execution context



// Firstly in a Global execution - this
// 2 cycle Memory phase that takes 
// val1 - undefined
// val2- undefined
// addnum - whole defination 
// result1 - undefined
// result2 - undefined

// Third step Execution Phase
// val1 - 10
// val2 - 5
// addnum - creates a new variable environment + execution thread












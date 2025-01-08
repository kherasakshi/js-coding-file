// Global and Local scope 
// so as we know we are declaring the variables using var let const 
// keywords for that we have scope of that 

// Global scope means that outside any {} block block means 
// inside of curly braces like In function , for loop , if loop

// Block scope means inside of curly braces we are declaring the variable 


// Var was the only keword in all JavaScript for declaring variable 
// as it's scope is Global that's why due some reason it might bring a bug 
// in a code that's why we are not using


// let's take example why we are not using var keyword

  var a = 100;
//   console.log(a);
  var a = 200;
//  console.log(a);

//  it means we are updating and  re-declaring the values 
//  using var and it doesnot show any error as it's a global scope


// now if we are declaring the var keyword inside of block 
var a = 1000;

if(true){
    var a = 500;
    // console.log("Block Scope Var A1" , a);
}
console.log("Global Scope Var A1" , a)

// now i am declare the value inside of block and console that 
// variable outside of that block that console.log(a) will print 
// only 500
// it defines that var can be updated and 
// re-declare It has the Global scoped or function scoped.

// if you declare a variable using var outside of any function and
// it means you can use it anywhere or in function you can call that variable also
// But if you declare inside within any function an calling outside of any function 
// that gives you an ReferenceError
// It can be updated and re-declared in the same scope.


// ---------------let.................
// using let means that let having a block scope 
// using let we can re-declare a value 
// let 
// / The let keyword is an improved version
// of the var keyword. It is introduced in the ES6 or EcmaScript 2015. 
// These variables has the block scope. It can’t be accessible
// outside the particular code block ({block}).
// you can re-declare the let in differnt scope means that in block scope and other 
// you can accessible outside that block
// It can be updated but cannot be re-declared in the same scope.


// it can be  updated x  like this :-
let x = 10 ;
// console.log(x , "x");
x = 12;
// console.log(x , "x");

let z = 2000;
if(true){
    let z = 1000;
    console.log("Block Scope Let" , z)
    // Output 1000
}
console.log("Outside Block Let " , z)
// Output 2000




// *************************Intersting Concept******************

// let say i making two function with different two syntax 
myFuncOne()
function myFuncOne(){
    console.log("My First Named Fuction");
}

// functionHold()
const functionHold = function(){
    console.log("My Second Function Expression ")
}
functionHold()

// The concept is that if am using My First Named Fuction" 
// and executing that function before initialization that dosn't show error 
// that concept is called Hosting 
// but if i am using My Second function Expression to declaring the function 
// and executing that function before the function it shows an error to me 



// ----------------------Arrow Functions------------------------------------------------


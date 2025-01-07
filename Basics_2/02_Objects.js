// node Basics_2/02_Objects.js

// Objects 

// Creating  Objects into two ways 
// Using Object literal 
// Object literal means that it's not a singleton it craetes multiple instances
// using Object Constructor 
//  Object  Constructor  means that It's a  singleton means that 
//  it's the only object of its kind 


// Object.create is a Object constructor 


// But now we are creating object using Object literal 

const myUser = {
    name : "Sakshi",
    age : 18,
    // [mySym]: "myValueSymbol",
    Invalid : false,
    location: "Jaipur",
    email : "sak@122gmail.com",
    lastloginDays : ['monday' , 'tuesday'],
   
}
// but in backend the key is processed in string also "name"

console.log(myUser.email); 
// dot notation 

console.log(myUser["email"]); 
// square notation

// console.log(myUser[mySym]);


// const mySym = Symbol("myValueSymbol")
//  and if you want to add the Symbol in Object 
//  you can add like this [mySymbol] = "myValueSymbol"
// and you can access like this MyUser[mySymbol]




// if want to change the value of any key then i can 
// assign like this 

myUser.email = "khera123@gmail.com"
// but now i want to freeze that value means that i don't want that anyone can change this value 
// for that wehave an method Object.freeze()


// Object.freeze(myUser)

// Now we can also add a function in Object also 
myUser.greetingone = function helloOne(){
    console.log("Hello myUserOne!!");
}

myUser.greetingTwo = function helloTwo(){
    console.log(`Hello myUserTwo!! , ${this.name}`)
}

console.log(myUser.greetingone());
console.log(myUser.greetingTwo());


console.log(myUser)




// ---------------Object constructor -------------------
let newObj = new Object()
// syntax
// if i want to concatenate the two or more objects 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}


// First method to merge all Objects 
 const obj4 = Object.assign({} , obj1 , obj2 , obj3);
console.log(obj4);
// Object.assign method is an static method copies all enumerable
// own properties from one or more source objects to a target object
// Object.assign (target , source)

// or using spread operator we can concatenate object 
const obj5 = {...obj1 , ...obj2 , ...obj3};
console.log(obj5);



// -------------------------------------------------

// Array Of objects

const myUserobj = [
    {
        name : 'alice',
        rollNo : 1,
        email: "alice12@gmail.com"
    },
    {
        name : 'Bob',
        rollNo : 2,
        email: "Bob12@gmail.com"
    },
      {
        name : 'Charlie',
        rollNo : 3,
        email: "charlie12@gmail.com"
    },
      {
        name : 'Kristine',
        rollNo : 1,
        email: "kristine12@gmail.com"
    }
]

// so if i want to acces the object keys and values from an array
myUserobj[1].email
console.log(Object.keys(myUserobj))
// Object.keys gives you an key in a  array
console.log(Object.values(myUserobj))
// Object.keys gives you an values in a  array

console.log(Object.entries(myUserobj))
// Object.keys gives you an key-value in a  nested-array

console.log(myUserobj.hasOwnProperty('email'));
// Object.keys gives you an key in a  array
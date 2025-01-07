// As we know whatever tha data is stored is there, how it stored in the memory
// and how can you access your data from stored memory 
// On Basis of that they categorized into 2 Types 
// Primitive Data Type  & Non-Primitive Data Type 


// # Primitive DatatType:-  
// categorized into 7  types :- 
// Primtive Type are call by value , which means taht whenever you 
// copy them from one place to another their original data remains Same 
// The reference is not given to you . 


const score = 100
const scoreVal = 100.3
// / the aboive code is Number whether is in decimal dosn't matter
const isLoggedIn = false
// the aboive code is Boolean
const outsideTemp = null
// the aboive code is null 
let userEmail; 
// the aboive code is undefined 

// Symbol is always unique as for example Id is always unique 
// which we get a return type that too is different we call it Symbol

const id = Symbol("1223");
const Anotherid = Symbol("1223");

console.log(id === Anotherid);

// Output we get False as the value we insert in that are same 
// but the return value we get are not same 

const bigNumber = 23389484288288n;
// console.log(bigNumber);


// Now Another Non-Primtive Types are :- 
// * Array 
// * Objects 
// * Function 
// or we can say Fuctions Objects

const books = ['the harry potter' , 'the rider book' , 'the history book'];
// the above code is in Array 


// Object can store any type of Primtive value like strings any Number , 
// Boolean ,  function , array , nested object
let personobj = {
    name : 'sak',
    age: 20
}
personobj.name = 'SakKhera'
console.log(personobj);



console.log(typeof bigNumber);
// OutPut :- undefined


console.log(typeof outsideTemp);
// OutPut :- Object











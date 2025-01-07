// node Basics_2/01_Array.js

const MyArray = [0 , 1 , 2 , 3 , 4]
// Array having thier values called elements 
// Array is a collection of  one or more element under a single variable 
// array is typeof Object 

// Array of Objects Create a Shallow copy  whose properties share 
// the same references object from which the copy was made
// not creating deep copies it means that deep copy dosnot share the 
// same reference 


// we can access the array element using [] this
// arrays can have one property is length 


// Array Methods 

// 1:- push () method 
// 2 :- pop ()
// 3:- shift ()
// 4 : unshift()
// 5 : shift()
// 6 : includes()
// 7 indexOf()
// 8 join ()
// 9 slice()
// 10 splice ()


const myArr = [0 , 1 ,2 , 3, 4 , 5];

console.log("A" , myArr);
const newArr1 = myArr.slice(1, 3);
console.log(newArr1)
console.log("B" , myArr);

// splice Method 
const newArr2 = myArr.splice(1 , 3) 
console.log("C" , myArr);
console.log(newArr2)

// Main difference between slice and splice is that 
// slice dosn't manipulate the original array but splice does
// manipulate the original array 

// slice(optional start parameter, optional end parameter)but end parameter 
// dosn't include 

// splice(start, optional delete count, optional items to add)

// concat() 
// method is used to merge or join one or more array or we can say 
// concatenated the two or more arrays 

// spread()
// method is used to spread the array element individually

// flat()




// ----------------*--------------------------
// How to convert any data as we copied the data from any website that website 
// has their own way for writing their own syntax like in string , objects 
// but we want in array for that we have special methods

// firstly how to check whether the data is in array or not 
console.log(Array.isArray("Sakkhera"))
// Output false 
console.log(Array.from("Sakkhera"))
// Output true
// as Array.from covert any data into an array


console.log(Array.from({name : "kheraSak"}))
// it give an empty object as Output we can't directly convert
// the array into object

// Last if anybody say convert the variables into array
// then we can make like this:-

let name1 = "sak1";
let name2 = "sak2";
let name3 = "sak3"

console.log(Array.of(name1 , name2 , name3))
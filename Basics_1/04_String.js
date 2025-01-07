// String is a Primitive Data Type and Strings are used for storing text either stored in single or double quotes
//  that dosn't matter 
// Now we have to use moderen syntax that is String Interpolation 
// String Interpolation 
const name = "Sak"
const profession = 'Dev'

console.log(`Hello my name is ${name} and my Profession is ${profession}`);

let gameName = new String('Sak-khera')
console.log(gameName[0]);
// OutPut 'S'

// console.log(gameName.__proto__);
// just a syntax for accesing 

console.log(gameName.length); 
// returns the length 
console.log(gameName.toUpperCase());
// return the string in UpperCase()
console.log(gameName.toLowerCase());
// return the string in LoweCase()
console.log(gameName.charAt(2));
// return the character at where the position is 
console.log(gameName.indexOf('S'));
// return the Character at where the character at which index


const newString = gameName.substring(0 , 4)
// substring(start , end)
// end position is not included
// we cannot substring a value from reverse in a string 
console.log(newString)

const anotherString = gameName.slice(-8 , 4);
// we can also slice a value from reverse in a string 
console.log(anotherString);

const newStringOne = "       sakkhera     "
console.log(newStringOne.trim());
// this above method removes the whitespace from starting and 
// ending also we have a  trim start() and trim end()


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));
// that replace() method is used to replace 

console.log(url.includes('hitesh'))
// includes method also returns the value in true or false 
// whether the value is present in above string or not 

const wordName = ("sak-khera-sak-khera");
console.log(wordName.split('-'));

// ************************************Number And Maths ********************************************

const score = 100;
console.log(score);
// Output 100
const balance = new Number(500);
console.log(balance);
// Output [Number : 500];

// Now the above 500  Number is a typeof Number now i'm gonna 
// to convert this number into String 

console.log(balance.toString());
console.log(balance.toString().length);
// Output 500 
// and gives the length of 3 as 500 length of this number is 3
// if I'm gonaa check the typeof then it gives me a string 



// toFixed() Number of digits after the decimal Point. 
// must be in the toFixed()
let myBalance = new Number(100);
console.log(myBalance.toFixed(2))
// toFixed() Number of digits after the decimal Point it gives me 2 (00) 
// after the decimal point.



// toPrecision() method Number of significant digits Must be in 
// the range between 1 - 21, inclusive
let precisionData = 23.8966
console.log(precisionData.toPrecision(3))
// Output 23.9


let precisionDataTwo = 123.8966
console.log(precisionDataTwo.toPrecision(3))
// Output 124

// means that i want precised value i wanna to focus on how many value so 
// as in above code i focus on 3 values that's why it gives me in 3 values an after 
// decimal the value got rounded off that's why it gives me 124 
// 123.8966
// or i want in  4 values then it gives me in 4 values but gives me output 
123.9


const localeStr = 200000;
console.log(localeStr.toLocaleString(200000));
// then it give me a Output in separated commas that is USA Standards
console.log(localeStr.toLocaleString('en-In'));
// above code then it give me a Output in Indian Standards
// 20,00,00



// ---------------- Maths --------------------------

// Math itself is in Object 
console.log(Math);
console.log(Math.abs(-10));
// as above code we have an negative value it's just give the negative value 
// into positive value only
// Math.abs() is a method or a numeric expression for which the absolute
// value is needed


console.log(Math.round(4.3))
// Output 4
console.log(Math.round(4.6))
// Output 5
// the value after the decimal is 6 the  it gives the output into 
// round-off  value - 5 or if i write 4.3 then it gives the base value 
// and output 4 

console.log(Math.ceil(4.2))
// ceil means the value after decimal is above whether 1 or 2 it gives the top value
// to us or if i write 4 then it gives 4


console.log(Math.floor(4.2));
// floor means the value after decimal is above whether any value it gives the lower value
// to us or if i write 4.9 then it gives 4



console.log(Math.sqrt(25));
// Output 5
console.log(Math.min(2 , 5 , 7 , 9 , 1))
// Outpt 1

console.log(Math.max(2 , 10 , 100 , 200))
// Output 200




console.log(Math.random())
// gives you a random number that lies between 0 an 1 

console.log(Math.floor(Math.random() *10 ) + 1)
console.log((Math.random()*10) + 1) 
// for example i want to make random number but i don't want the ]
// number lie between 0 an 1 i want to maximize tha value then i multiply that value
// to avoid the case the random number also gives me number 0.2...... to avoid this 
// then i will add +1

const min = 10
const max = 20

// i want the value between these two values
console.log(Math.floor(Math.random() * (max-min + 1)) + min);





// node Basics_1/04_String.js



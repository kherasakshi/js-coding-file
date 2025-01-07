// String is a Primitive Data Type and Strings are used for storing text either stored in single or double quotes
//  that dosn't matter 
// Now we have to use moderen syntax that is String Interpolation 
// String Interpolation 
const name = "Sak"
const profession = 'Dev'

console.log(`Hello my name is ${name} and my Profession is ${Dev}`);

let gameName = new String('Sakkhera')
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
substring(start , end)
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

let splitWord = [sak-khera-sakkhera];
console.log(splitWord.split('-'));







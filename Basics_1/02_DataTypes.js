Data Types are of two Types Primitive data types and Non-Promitive Data-types 
Number 
String 
Boolean
null
undefined
BigInt
and Non -Primitive data types is 
Object one of the Main No-Primitive Data Type

DataTypes conversion  
let rollNo = "40abc";
console.log(typeof rollNo);
console.log(typeof(rollNO));

let valueInNumber = Number(rollNo);
console.log(typeof valueInNumber);
console..log(valueInNumber);
After converting the number using - Number(rollNo);
it means it give the result Nan
if the value of rollNo is null then it gives the output- 0
if the value of rollNo is undefined then it gives the output- Nan
if the value of rollNo is Boolean value true then it gives the output- 1
otherwise 0 when value is false
if the value of rollNo is String then it gives the output- Nan

Now we can also convert the value of 1 into a Boolen value 
let isLoggedIn = 1
let boolaenIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
if the value of isLoggedIn is String then it gives the output- true 
if the value of isLoggedIn is 1 then it gives the output- true 
if the value of isLoggedIn is 0 then it gives the output- false
if the value of isLoggedIn is "" then it gives the output- false


Now we can also convert the value of any Number into String 
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber) 
it gives a string output 

.......................Operations Topic............................

let value = 3
let negativeVal = -value
console.log(negativeVal);
gives the output -3

these are the operations
addition + 
substraction - 
multiplication * 
exponential **
division /
modulus %
  
Now some Investigation Question we have to know about that :-
console.log("1" + 2); Output 12 
console.log( 1 +  "2");  Output 12 
console.log("1" + 2); Output 12 
console.log("1"  + 2 + 2); Output 122
console.log(1  + 2 + "2");  Output  32
yeah because of Guidlines  on basis of ECMA Standards don't write 
messy code.

console.log(true); Output true
console.log(+true); Output 1 as the boolean itself added the increament 
  value itself 
console.log(true+); Output error
console.log(+""); Output 1


let gameCounter = 100
gameCounter++
it's a postfix operator we have use in above code 
console.log(gameCounter); Output 101


console.log(null > 0); Output false 
console.log(null == 0) Output false
console.log(null >= 0) Output true

the reason is that an equality check == and comparision work differntly
comparisons convert null to a number treating it as 0
  that's why null >=0  returns true  
  console.log(undefined == 0); Output false
  console.log(undefined > 0);  Output false
  console.log(undefined < 0);  Output false

=== strict it checks the value strictly and also check their datatypes
console.log("2" === 2) gives Output false as it checks the dataTypes 
  of both the values 
console.log("2" == 2) gives Output true as it only checks conversion 
  of the both value









  


  


// node Basics_3/01_functions.js

// First way to write function 
// the below code where we make our function in parantheses the value called Parameters
// function addingTwoNums(num1 , num2){
//    console.log(num1 + num2);
// }

// addingTwoNums(10 , 20 )
// Output 30
// addingTwoNums(10 , "20")  
// the above code where we execute our function in parantheses the value called Arguements
// Output 1020 as the number is treated as a string in above code

// Now when we are execute a function we can also store  them in a variable 
// like this

// const myNumbersResult = addingTwoNums(100 , 200);
// console.log("Result :- " + myNumbersResult)
// the above code gives the result undefined




// ------------------------------------------------------------------------
// 2nd way to execute or return a value in function``

function addingTwoNums(num1 , num2){
   let result = num1 + num2 
   return result
   //    before return statement the console can execute 
//    console.log("SAK")
//    The abive console will never execute bcz after return statement the below code never
//    execute 

 }

 const result = addingTwoNums(100 , 100);
 console.log("Second Result:-" ,  result);




 function loginUserMessage(firstname , lastname){
    return ` Hello ${firstname} ${lastname} you have just Log
    in your email`
 }

 console.log(loginUserMessage('sakshi' , 'khera'))
 console.log(loginUserMessage())
//  if in above code i hadn't mention any arguement then it 
//  shows undefined you have just Log
//  in your email


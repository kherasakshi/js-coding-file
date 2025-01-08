// node Basics_3/02_functions.js
// Functions


// let say example we want to calculateItemsCart where we don't know how mch items are being added by the user for that 
// let make a function  that takes a parameter 
// in function i am taking one parameter ofcourse i know user will add numbers... of items but for that 
// i don't know how much items should be added in cart for that i can use ...rest operator in parameter 
// also known as spread operator but in different situation we are calling rest operator rest operator means 
// that that collects multiple elements into an array. It's commonly used in function parameter
//  definitions to allow functions to accept an unlimited number of arguments. 

function calculateItemsCart(...item1){
return item1
}
// console.log(calculateItemsCart('apple' , 'orange' , 'broccoli' ))
// Output ['apple' , 'orange' , 'broccoli' ]


// in another case what the value of item1 , item2 , item3
function calculateItemsCart(item1 , item2 , ...item3){
    return item3
    }
    console.log(calculateItemsCart('apple' , 'orange' , 'broccoli' , 'capsicum'))
    // then it will return only ['broccoli' , 'capsicum']




// ------------------Objects --------------------------


// Now we r creating function on basis of Object 
// and we have see that how to pass the object in function


const personUser = {
    username : 'Sak-khera',
    price:  1000
}
// but now i don't know about the detail of that person for that 
// i can pass any parameter that represents that object on basis of function 
// arguments i can access the all details
function getDetailuser(details){
 return `Name of User Sign is ${details.username} 
 and price of sign in app cost ${details.price}`
}

console.log(getDetailuser(personUser));


// ----------------Arrays------------------

// Passing array on basis of function 

const array = [1 , 2 , 34 , 50];

function arrayDetails(getArray){
return getArray[3]
}

console.log(arrayDetails(array))
// Output 50
// we can also directly pass an array in above code but we are 
// declaring the array in variable  






















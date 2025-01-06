
/ variable and constants
// variable are like an empty container or we can say like an memory space and constants are like an
// value that you can't change the value assigned to that variable

const firstId = 45678;
let classRollNo = 29;
var cityId = 15002;

// firstId = 10000;
console.log(firstId);
// that gives you an error we can't change the value assigning using const keyword

// using let can re-declare the value but can't reassign the value ;
 classRollNo = 30;
console.log(classRollNo);

// using var we can re-declare and re - assign the value both but now we can't use var keyword as it might bought bug in our code 
var cityId = 18000;
console.log(cityId);

console.table([firstId, classRollNo, cityId]);

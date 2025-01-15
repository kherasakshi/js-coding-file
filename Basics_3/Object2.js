const professionObj = 
[{
  name : 'A',
  prof: 'Dev',
  rollNo: '1'
},
{
  name : 'B',
  prof: 'Dev',
  rollNo: '2'
},
{
  name : 'C',
  prof: 'Dev',
  rollNo: '3'
},
{
  name : 'D',
  prof: 'Src',
  rollNo: '4'
},
{
  name : 'E',
  prof: 'Src',
  rollNo: '5'
},
{
  name : 'F',
  prof: 'Src',
  rollNo: '6'
},
{
  name : 'H',
  prof: 'Dev',
  rollNo: '7'
},

{
  name : 'I',
  prof: 'Dev',
  rollNo: ' 8'
},


{
  name : 'j',
  prof: 'Dev',
  rollNo: '9'
},

{
  name : 'K',
  prof: 'Dev',
  rollNo: '10'
},

  ]




let filterEven = professionObj.filter((evens)=>{
   return  evens.rollNo % 2 === 0
})
console.log(filterEven);


let filteringProf = professionObj.filter((profession)=>{
 return profession.prof === 'Dev'
})
console.log(filteringProf);

let createdArr = [];

filteringProf.map(naming =>{
  // console.log(naming)
  let newNaming = { ...naming, value: true };
  createdArr.push(newNaming);
})





// let newObj = {}
// newArray.forEach(values=>{
//   let key = values.rollNo
//    newObj[key] = values
 
//     // console.log(values)
// })
// console.log(newObj);



// to make a prof property out of the object to identify by their profession









// node Basics_3/Object2.js



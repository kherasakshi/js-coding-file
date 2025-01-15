const personProfile = [
    {
      name : 'A',
      prof: 'Development',
      rollNo: 1
    },
    {
      name : 'B',
      prof: 'Development',
      rollNo: 2
    },
    {
      name : 'C',
      prof: 'Development',
      rollNo: 3
    },
    {
      name : 'D',
      prof: 'Development',
      rollNo: 4
    },
    {
      name : 'E',
      prof: 'Development',
      rollNo: 5
    },
    {
      name : 'F',
      prof: 'Development',
      rollNo: 6
    },
    {
      name : 'G',
      prof: 'Development',
      rollNo: 7
    },
    {
      name : 'H',
      prof: 'Sourcing',
      rollNo: 8
    },
    {
      name : 'I',
      prof: 'Recruiter',
      rollNo: 9
    },
    {
      name : 'j',
      prof: 'Recruiter',
      rollNo: 10
    }
    ]

const filterPerson = personProfile.filter((Dkey)=>{
  return Dkey.prof === "Development"
})

console.log(filterPerson);



let myArr = [];
let keyVal = 1
filterPerson.forEach(items=>{
    items.value = keyVal++
    // console.log(items);
    myArr.push(items)
})
 
console.log(myArr);



// let newArr = [];
// let key = 1
//  filterPerson.forEach(adding =>{
//   if(!adding["value"]){
//      adding.value =  key++
//   }
//   newArr.push(adding) 
  
// })
// console.log(newArr)



// let newObj = {}

// function newFunc(value){
//   value.forEach((items)=>{
//       // console.log(items, 'items in for each')
//     let key = items.rollNo;
//      newObj[key] = value     
//   console.log(newObj);
//   })
// }

// newFunc(myArr)

// let newObj = {};
// function myFunc(valueF){
//  valueF.forEach(item =>{
//   let key = item.rollNo
//   newObj[key] = item
//  })
//  console.log(newObj)
// }

// myFunc(myArr);




// let myobj = {};
// function myFuncTwo(valF){
// valF.forEach(value =>{
//  let key = value.name
//  myobj[key] = value
//  console.log(myobj)
 
// })
// }

// myFuncTwo(myArr);
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

// console.log(filterPerson);

let newArr = [];
let key = 1
 filterPerson.forEach(adding =>{
  if(!adding["value"]){
     adding.value =  key++
  }
  newArr.push(adding) 
  
})
// console.log(newArr)



let newObj = {}
function newFunc(value){
  value.forEach((items)=>{
      console.log(items, 'items in for each')
    let key = items.rollNo;
     newObj[key] = value     

  })
}

newFunc(newArr)

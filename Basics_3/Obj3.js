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
      prof: 'Recruiter',
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

    

    

     let newArr = [];
     let limitKeys = 2;
    personProfile.forEach(x =>{  
     let array = [];
     if(array.length === limitKeys){
     newArr.push(array);
      array =[];
     array.push(Object.values(x));
     }
     else{
         array.push(Object.values(x))
     }
       })
      

 
  //    let valuesObj =  Object.values(personProfile[0]);
  //  console.log(valuesObj);
  
  
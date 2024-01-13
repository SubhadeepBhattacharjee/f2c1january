/* @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const studentsWithMap = arr
    .map(student => ({ id: student.id, name: student.name, marks: student.marks }))
    .filter(student => student.marks >= 80);

  console.log(studentsWithMap);

  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(student => {
        if (student.marks >= 80) {
          console.log({ id: student.id, name: student.name, marks: student.marks });
        }
      });
    

  }
  
  function addData() {
    //Write your code here, just console.log
    const newStudent = { id: 4, name: "susan", age: "20", marks: 90 };
    arr.push(newStudent);
    console.log(newStudent);
  
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    const passedStudents = arr.filter(student => student.marks >= 40);
    console.log(passedStudents);
  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "mike", age: "22", marks: 75 },
        { id: 6, name: "emma", age: "25", marks: 88 },
        { id: 7, name: "alex", age: "23", marks: 92 },
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
    
  }
  
//Start: 1st_task.js

/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var equalDistribution = area / 2 ;

if(equalDistribution){
    console.log(equalDistribution) ;
}

//Start: 2nd_task.js

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >= 25000){
console.log("Laptop") ;
}

else if(money >= 10000){
console.log("Cycle") ;
}

else{
console.log("Chocolate") ;
}

//Start: 3rd_task.js

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(var medicine = 1 ; medicine <= lastDay ; medicine ++ ){
    
if(medicine %3 === 0){
    console.log(medicine,"- medicine")
}

else{
    console.log(medicine,"- rest")
}

}

//Start: 4th_task.js

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here


if (fileName.includes("#")){
    console.log( "Store") ; 
}

else if (fileName.includes(".docx")){
    console.log( "Store") ; 
}

else if (fileName.includes(".pdf")){
    console.log( "Store") ; 
}

else{
    console.log( "Delete") ;
}

//Start: 5th_task.js

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here


var firstHalf = student.name.concat(student.roll) ;

var secondHalf = student.department ;

console.log(firstHalf+"."+secondHalf+"@ph.ac.bd") ;

//Start: 6th_task.js

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salary = startingSalary     

for (var year = 1 ; year <= experience ; year++) {
    
increaseRate = salary * 5/100 ;
salary = salary +increaseRate ;
}

console.log(salary.toFixed(2));
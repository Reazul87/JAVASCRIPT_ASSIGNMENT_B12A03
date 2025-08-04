/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here


var firstHalf = student.name.concat(student.roll) ;

var secondHalf = student.department ;

console.log(firstHalf+"."+secondHalf+"@ph.ac.bd") ;
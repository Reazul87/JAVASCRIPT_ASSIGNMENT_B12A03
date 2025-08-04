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
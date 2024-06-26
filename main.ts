// NUMBER GUESSING GAME

console.log("guess the number between 1-10")
let a:number=Math.floor(Math.random()*10);

import inquirer from "inquirer";
while(true){
let input=await inquirer.prompt([
    {
        type:'number',
        name:'guess',
        message:'guess the number'

    }
])
let ans=input.guess

if(a===ans){
    console.log("you win you guess the right number")
    break;
}
if(a>ans){
    console.log("hint: the number is greater")
    break;
}
if(a<ans){
    console.log("hint: the number is smaller");
    break;
    
}
if(ans>10){
    console.log("error plzz enter number in given range")
    break;
}
}
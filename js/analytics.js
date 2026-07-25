let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



let total =
tasks.length;



let completed =
tasks.filter(
task=>task.completed
).length;



document.getElementById("total").innerText =
total;



document.getElementById("completed").innerText =
completed;



let score =
total ?
Math.round((completed/total)*100)
:
0;



document.getElementById("score").innerText =
score + "%";





// Simple weekly activity display

let days =
[
"mon",
"tue",
"wed",
"thu",
"fri",
"sat",
"sun"
];



days.forEach((day,index)=>{


let bar =
document.getElementById(day);



let height =
20 + (tasks.length * 10) + index*5;



if(height>200){

height=200;

}



bar.style.height =
height+"px";


});
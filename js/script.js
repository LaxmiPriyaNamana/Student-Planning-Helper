// Login Protection

if(localStorage.getItem("loggedIn") !== "true"){

    window.location.href="login.html";

}



// User Name

let user =
JSON.parse(localStorage.getItem("user"));


if(user){

document.getElementById("userWelcome").innerHTML =
"👋 Welcome " + user.name + "!";

}



// Logout

document.getElementById("logoutBtn").onclick=function(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

};




// Task Elements

let taskInput=document.getElementById("taskInput");

let taskDate=document.getElementById("taskDate");

let taskCategory=document.getElementById("taskCategory");

let taskPriority=document.getElementById("taskPriority");

let addBtn=document.getElementById("addBtn");

let taskList=document.getElementById("taskList");



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];




// Display Tasks

function displayTasks(){


taskList.innerHTML="";


tasks.forEach((task,index)=>{


let div=document.createElement("div");

div.className="task";


div.innerHTML=`

<div>

<b>${task.text}</b>

<br>

📅 ${task.date || "No date"}

<br>

${task.category}

<br>

${task.priority} Priority

</div>


<div class="actions">


<button class="complete-btn"
onclick="completeTask(${index})">
✅
</button>


<button class="edit-btn"
onclick="editTask(${index})">
✏️
</button>


<button class="delete-btn"
onclick="deleteTask(${index})">
🗑️
</button>


</div>

`;



if(task.completed){

div.style.textDecoration="line-through";

}



taskList.appendChild(div);


});


updateDashboard();


}




// Add Task

addBtn.onclick=function(){


let text=taskInput.value;


if(text===""){

alert("Enter task");

return;

}



tasks.push({

text:text,

date:taskDate.value,

category:taskCategory.value,

priority:taskPriority.value,

completed:false

});



save();


displayTasks();



taskInput.value="";


};






function deleteTask(index){

tasks.splice(index,1);

save();

displayTasks();

}




function completeTask(index){

tasks[index].completed =
!tasks[index].completed;


save();

displayTasks();

}




function editTask(index){


let value =
prompt(
"Edit task",
tasks[index].text
);



if(value){

tasks[index].text=value;

save();

displayTasks();

}


}




function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}






function updateDashboard(){


let total=tasks.length;


let completed =
tasks.filter(
t=>t.completed
).length;



document.getElementById("totalTasks").innerText=total;


document.getElementById("completedTasks").innerText=completed;


document.getElementById("pendingTasks").innerText=
total-completed;



let percent =
total ?
(completed/total)*100 :
0;



document.getElementById("progressBar").style.width=
percent+"%";


document.getElementById("progressText").innerText=
Math.round(percent)+"% Completed";


}





// Search

document.getElementById("searchInput").onkeyup=function(){


let value=this.value.toLowerCase();



document.querySelectorAll(".task")
.forEach(task=>{


task.style.display =
task.innerText
.toLowerCase()
.includes(value)
?
"flex"
:
"none";


});


};






// Dark Mode

document.getElementById("darkMode").onclick=function(){

document.body.classList.toggle("dark");

};




displayTasks();
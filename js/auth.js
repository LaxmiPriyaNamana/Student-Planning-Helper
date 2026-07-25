const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");



// Signup

if(signupBtn){

signupBtn.onclick=function(){


let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



if(name==="" || email==="" || password===""){

alert("Please fill all details");

return;

}



let user={

name:name,

email:email,

password:password

};



localStorage.setItem(
"user",
JSON.stringify(user)
);



alert("Account created successfully!");

window.location.href="login.html";


};

}




// Login

if(loginBtn){


loginBtn.onclick=function(){


let email=document.getElementById("loginEmail").value;

let password=document.getElementById("loginPassword").value;



let user=
JSON.parse(localStorage.getItem("user"));



if(user && 
user.email===email &&
user.password===password){


localStorage.setItem(
"loggedIn",
"true"
);



alert("Login successful!");

window.location.href="index.html";


}


else{


alert("Invalid email or password");


}


};


}
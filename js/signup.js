

var username= document.getElementById("name");
var pass= document.getElementById("pass");
var email= document.getElementById("email");
var button= document.getElementById("btn");

var users;

if(localStorage.getItem("users") != null){
    users= JSON.parse(localStorage.getItem("users"))
}
else{
    users=[];
}

button.addEventListener("click", function(){

    for(var i=0; i< users.length; i++){
        if(email.value == users[i].email){
            document.getElementById("alert").classList.remove("d-none")
        }
    }
    var user={
        name: username.value,
        email: email.value,
        pass: pass.value,
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
})
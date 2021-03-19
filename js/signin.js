
var email = document.getElementById("email");
var pass = document.getElementById("password");
var button = document.getElementById("btn");
var users;

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"))
}
else {
    users = [];
}

button.addEventListener("click", function () {
    if (isUserExist()) {
        window.location.replace("home.html")
        localStorage.setItem("currentuser", users[i].name)
    }else{
        document.getElementById("alert").classList.remove("d-none");
    }
})


function isUserExist() {
    for (var i = 0; i < users.length; i++) {
        if (email.value == users[i].email && pass.value == users[i].pass) {
            return true;
        }
    }
}
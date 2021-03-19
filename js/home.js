
var logout = document.getElementById("logout");
var username= document.getElementById("username");
username.innerHTML= localStorage.getItem("currentuser")

logout.addEventListener("click", function(){
    window.location.replace("index.html")
})




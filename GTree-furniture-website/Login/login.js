const userId = "John123";
const password = "abc123aabb";

var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function(){
    var inputId = document.getElementById("UserID").value;
    var inputPass = document.getElementById("Password").value;

    if (inputId == userId && inputPass == password){
        if(window.localStorage.getItem("isLogin") == undefined){
        window.localStorage.setItem("isLogin", "true");
        alert("Login successfully!");
        window.location.href = "/homepage/homepage.html";
        } else{
         alert("You are already logged in!");   
        }
        window.location.href = "/homepage/homepage.html";
        
    } else{
        alert("Your userID or password is invalid.");
    }
});

function registerBtn(){
    window.location.href="/Register/register.html";
}
//declare userid and password
const userId = "John123";
const password = "abc123aabb";

//check validation for used id and password
var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function(){
    var inputId = document.getElementById("userID").value;
    var inputPass = document.getElementById("password").value;

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

//link to register page
function registerBtn(){
    window.location.href="/Register/register.html";
}
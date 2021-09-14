//Inspect confirmed Password
function myFunction(){
  var a = document.getElementById("password").value;
  var b = document.getElementById("passwordss").value;

  if(a == ""){
    document.getElementById("messages").innerHTML="**Please Fill Your Password";
    alert("Please Fill Your Password");
    return false;
  }
  
  if(a.length > 25){
    document.getElementById("messages").innerHTML="**Password length must be smaller than 25 characters";
    alert("Password length must be smaller than 25 characters");
    return false;
  }
  
  if(a.length < 5){
    document.getElementById("messages").innerHTML="**Password length must be greater than 5 characters";
    alert("Password length must be greater than 5 characters");
    return false;
  }

  if(a != b){
    setTimeout(function(){ location.href = "../Register/register.html"; }, 0.000001);
    alert("Your Password is not same");
    return false;
  }

  else{
    setTimeout(function(){ location.href = "../Login/login.html"; }, 0.000001);
    alert("Register Successfully");
    return true;
  }
}



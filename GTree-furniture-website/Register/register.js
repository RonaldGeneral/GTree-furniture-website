function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function myfun(){
  var a = document.getElementById("password").value;
  var b = document.getElementById("passwordss").value;

  if(a == ""){
    document.getElementById("messages").innerHTML="**Please Fill Your Password";
    return false;
  }
  
  if(a.length > 25){
    document.getElementById("messages").innerHTML="**Password length must be smaller than 25 characters";
    return false;
  }
  
  if(a.length < 5){
    document.getElementById("messages").innerHTML="**Password length must be greater than 5 characters";
    return false;
  }

  if(a != b){
    alert("Your Password is not same");
    setTimeout(function(){ location.href = "../Register/register.html"; }, 0.000001);
    return false;
  }

  else{
    alert("Register Successfully");
    setTimeout(function(){ location.href = "../Login/login.html"; }, 0.000001);
    return true;
  }
}



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

  if(a==""){
    document.getElementById("messages").innnerHTML="**Please Fill Your Password";
    return false;
  }
  if(a.length < 5){
    document.getElementById("messages").innerHTML="**Password length must be greater than 5 characters";
    return false;
  }
  if(a.length > 25){
    document.getElementById("messages").innerHTML="**Password length must be smaller than 25 characters";
    return false;
  }
  if(a!=b){ 
    document.getElementById("messages").innerHTML="*Your password are not same*";
    return false;
  }
  else if(a==b){
    alert("Register Successfully");
    window.location.href("https://www.w3schools.com");
    return true;
  }
}

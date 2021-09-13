Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	  return JSON.parse(this.getItem(key))
}

document.getElementById("name").value = localStorage.getObj("userName");
document.getElementById("gender").value = localStorage.getObj("userGender");
document.getElementById("eadres").value = localStorage.getObj("userBirthday");
document.getElementById("mnum").value = localStorage.getObj("userPhoneNo");
document.getElementById("adres").value = localStorage.getObj("userAddress");
document.getElementById("email").value = localStorage.getObj("userEmail");
document.getElementById("password").value = localStorage.getObj("userPassword");

function disabledName() {
	var x = document.getElementById("name");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    }
	else {
    	x.setAttribute("disabled","");
        localStorage.setObj("userName", x.value);
    }
}

function disabledGender() {
	var x = document.getElementById("gender");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    }
	else {
    	x.setAttribute("disabled",""); 
		localStorage.setObj("userGender", x.value);
    }
}
function disabledEadres() {
	var x = document.getElementById("eadres");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    }
	else {
    	x.setAttribute("disabled","");
		localStorage.setObj("userBirthday", x.value);
    }
}
function disabledMnum() {
	var x = document.getElementById("mnum");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled","");
		localStorage.setObj("userPhoneNo", x.value);
    }
}

function disabledEmail() {
	var x = document.getElementById("email");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled","");
		localStorage.setObj("userEmail", x.value); 
    }
}

function disabledAdres() {
	var x = document.getElementById("adres");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled","");
		localStorage.setObj("userAddress", x.value);
    }
}

function disabledPassword() {
	var x = document.getElementById("password");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
		localStorage.setObj("userPassword", x.value);
    }
}

function mypic() {
	var x = document.getElementById("upLoadPic");
	if(x.hasAttribute("type")){
		x.removeAttribute("type");
    	x.setAttribute("type","file"); 
  }
}

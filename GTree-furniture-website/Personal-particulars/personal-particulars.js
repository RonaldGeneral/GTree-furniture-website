//Deal with data in local storage
Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	  return JSON.parse(this.getItem(key))
}

document.getElementById("name").value = localStorage.getObj("userName");
document.getElementById("gender").value = localStorage.getObj("userGender");
document.getElementById("dateBirth").value = localStorage.getObj("userBirthday");
document.getElementById("mnum").value = localStorage.getObj("userPhoneNo");
document.getElementById("address").value = localStorage.getObj("userAddress");
document.getElementById("email").value = localStorage.getObj("userEmail");
document.getElementById("password").value = localStorage.getObj("userPassword");

//set or remove attribute disabled
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
function disabledDateBirth() {
	var x = document.getElementById("dateBirth");

	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
		x.setAttribute("type","date").value="21\5\1995";
    }
	else {
    	x.setAttribute("disabled","");
		localStorage.setObj("userBirthday", x.value);
    }
}
function disabledMobileNum() {
	var x = document.getElementById("mobileNum");
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

function disabledAddress() {
	var x = document.getElementById("address");
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


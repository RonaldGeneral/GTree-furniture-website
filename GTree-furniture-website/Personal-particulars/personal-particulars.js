function disabledName() {
	var x = document.getElementById("name");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}

function disabledGender() {
	var x = document.getElementById("gender");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}
function disabledEadres() {
	var x = document.getElementById("eadres");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}
function disabledMnum() {
	var x = document.getElementById("mnum");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}
function disabledEmail() {
	var x = document.getElementById("email");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}
function disabledAdres() {
	var x = document.getElementById("adres");
	if(x.hasAttribute("disabled")){
		x.removeAttribute("disabled");
    } else {
    	x.setAttribute("disabled",""); 
    }
}

function mypic() {
	var x = document.getElementById("upLoadPic");
	if(x.hasAttribute("type")){
		x.removeAttribute("type");
    	x.setAttribute("type","file"); 
  }
}

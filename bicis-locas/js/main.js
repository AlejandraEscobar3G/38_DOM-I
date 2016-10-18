document.querySelectorAll('form')[0].setAttribute("onsubmit", "return validateForm()");

function validateForm(){
	//Validando nombre
	nombre = document.getElementById("name").value;
	if( (nombre == null) || (nombre.length == 0) || (/^\s+$/.test(nombre))) {
		console.log("No");
		return false;
	} //else if(){}
}


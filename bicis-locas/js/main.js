var mensaje = " ";
var errores = true;
function validateForm(){
	var email = document.getElementById("input-email").value;
	var name = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var password = document.getElementById("input-password").value;
	var indice = document.getElementsByTagName("SELECT").selectedIndex;
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var regexNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
	if(!(regexNombre.test(name))){
		mensaje +=  "Nombre incorrecto";
		errores = false;
		//return false;
	}
	if(!(regexNombre.test(apellido))){
		mensaje += "Apellido incorrecto";
		errores = false;
	}
	if(!(regexEmail.test(email))){
		mensaje += "Email incorrecto";
		errores = false;
	}
	if(!(regexPassword.test(password))){
		mensaje += "Contraseña incorrecta";
		errores = false;
	}
	//Falta validacion de la lista
	if( indice == null || indice == 0 ) {
  		mensaje += "Selecciona una opcion";
  		errores = false;
	}
	//Validando
	if(!errores){
		console.log(mensaje);
		return false;
	} else{
		return errores;
	}

}


//Codigo para agregar botones

var btnEsp = document.createElement("BUTTON");
var text = document.createTextNode("Español");
btnEsp.appendChild(text);
var btnEng = document.createElement("BUTTON");
var text2 = document.createTextNode("English");
btnEng.appendChild(text2);
document.body.appendChild(btnEsp);
document.body.appendChild(btnEng);

//Funcion para cambiar de idioma

function cambiarIdioma(idioma){
	var titulo = document.getElementById("form-signin-heading");
	var span = document.querySelectorAll("span")[0];
	var btn = document.querySelectorAll("button")[0];
	if(idioma == "es"){
		titulo.innerHTML = "Por favor inicia sesión";
		document.getElementById("inputEmail").setAttribute("placeholder","Correo Electrónico");
		document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
		span.innerHTML = "Recordar datos";
		btn.innerHTML = "Iniciar Sesión";
	} else if(idioma == "en"){
		titulo.innerHTML = "Please sign in";
		document.getElementById("inputEmail").setAttribute("placeholder","Please enter your email");
		document.getElementById("inputPassword").setAttribute("placeholder","Password");
		span.innerHTML = "Remember me";
		btn.innerHTML = "Sign in";
	}

}

//Codigo que determina la seleccion de botones

btnEsp.onclick = function(){
	cambiarIdioma("es");
}

btnEng.onclick = function(){
	cambiarIdioma("en");
}


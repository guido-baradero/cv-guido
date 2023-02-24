document.getElementById("secundaria").onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "Tecnico electronico con orientacion en telecomunicaciones"
}

document.getElementById("INTI").onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "Curso sobre energia atomica de una año de duracion en el año 2005. Promedio 9"
}

document.getElementById("CETAE").onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "Curso en Ventas y Marketing. Promedio 7"
}

document.getElementById("hipodromo").onmouseover = function() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "Primeros pasos en programacion FrontEnd (HTML - CSS - JavaScript"
}
document.getElementById("hipodromo").onmouseout = function() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = ""
}




/*
function dentro() {
    console.log("dentro");
    document.getElementById("info").innerHTML = "encargado"
}

function fuera() {
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML =  ""
}

document.getElementById("hipodromo").onmouseover = function() {
    console.log("capturamos el evento sobre el boton hipodromo");
    document.getElementById("info").innerHTML = "tecnico viajante"
}
document.getElementById("hipodromo").onmouseout = function() {
    console.log("capturamos el evento sobre el boton hipodromo");
    document.getElementById("info").innerHTML = ""  
}

*/
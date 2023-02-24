//HIPODROMO

document.getElementById("hipodromo").onmouseover = function() {
    console.log("capturamos el evento pasar por boton hipodromo");
    document.getElementById("info-hipo").innerHTML = "Tecnico viajante"
}
document.getElementById("hipodromo").onmouseout = function() {
    console.log("capturamos el evento saalir del boton hipodromo");
    document.getElementById("info-hipo").innerHTML = ""
}
document.getElementById("hipodromo").onclick = function() {
    console.log("capturamos el evento click en boton hipodromo");
    document.getElementById("info-completa").innerHTML = "tareas, periodo, etc"
}

//CABLEVISION

document.getElementById("cable").onmouseover = function() {
    console.log("capturamos el evento pasar por boton cable");
    document.getElementById("info-cable").innerHTML = "Tecnico instalador"
}
document.getElementById("cable").onmouseout = function() {
    console.log("capturamos el evento salir del boton cable");
    document.getElementById("info-cable").innerHTML = ""
}
document.getElementById("cable").onclick = function() {
    console.log("capturamos el evento click en boton cable");
    document.getElementById("info-completa").innerHTML = "Trabajo en altura"
}
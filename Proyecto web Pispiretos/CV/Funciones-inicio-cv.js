const persona = {nombre:"Guido", apellido:"Mastropasqua", DNI:"85.325.366", edad:"37 años", nacionalidad:"Argentino",
direccion:"J.Oroarque 2495, Baradero, Prov. de Bs. As.", nacimiento:"20 de noviembre de 1985"};


document.getElementById("siguiente").onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("nombre").innerHTML = persona.nombre;
    document.getElementById("apellido").innerHTML = persona.apellido;
    document.getElementById("DNI").innerHTML = persona.DNI;
    document.getElementById("edad").innerHTML = persona.edad;
    document.getElementById("nacionalidad").innerHTML = persona.nacionalidad;
    document.getElementById("direccion").innerHTML = persona.direccion;
    document.getElementById("nacimiento").innerHTML = persona.nacimiento;
}

document.getElementById("anterior").onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("apellido").innerHTML = "";
    document.getElementById("DNI").innerHTML = "";
    document.getElementById("edad").innerHTML = ""
    document.getElementById("nacionalidad").innerHTML = ""
    document.getElementById("direccion").innerHTML = ""
    document.getElementById("nacimiento").innerHTML = ""
}

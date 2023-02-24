let Krause ="📐Escuela Tecnica Nº1 OTTO KRAUSE / Egreso 2004|Técnico electrónico con orientación en telecomunicaciones.";             
let listaKrause = ["ingles", "Office", "Base de datos", "Programacion","Talleres"];
let htmlKrause = `<ul>`;
let k = 0;

let inti = "🔬Energia atomica / Año 2005";
let listaInti = ["conceptos generales: Atomo, particula", "Almacenamiento", "Fision y Fusion", "Aplicaciones"];
let htmlInti = `<ul>`;
let i = 0;

let CETAE = "📈Ventas y Marketing / Año 2007";
let listaCETAE = ["El cliente", "Bases de Marketin", "Negociacion", "Estrategias de venta"];
let htmlCETAE = `<ul>`;
let c = 0;

let Ticmas = "💻Diseño y pregramacion de paginas web con las herramientas HTML, CSS y JavaScript / Actualmente";
let listaTicmas = ["Desarrollo de paginas Web", "Capa de presentacion CSS", "Fundamentos de la programacion", "Fundamentos de JavaScript I"];
let htmlTicmas = `<ul>`;
let t = 0


//Otto Krause

document.getElementById("Krause").onmouseover = function() {
    console.log("capturamos el evento pasar por boton Otto Krause");
    document.getElementById("info-Krause").innerHTML = "Tecnico electronico con orientacion en telecomunicaciones"
}
document.getElementById("Krause").onmouseout = function() {
    console.log("capturamos el evento salir del boton Otto Krause");
    document.getElementById("info-Krause").innerHTML = ""
}
document.getElementById("Krause").onclick = function() {
    console.log("capturamos el evento click en boton Otto Krause");
    document.getElementById("educacion").innerHTML = Krause
    for (;listaKrause[k];) {
        htmlKrause += `<li>${listaKrause[k]}</li>`;
        k++;
      }
    htmlKrause += `</ul>`;
    document.getElementById("educacionLista").innerHTML = htmlKrause;
}

//INTI

document.getElementById("INTI").onmouseover = function() {
    console.log("capturamos el evento pasar por boton INTI");
    document.getElementById("info-INTI").innerHTML = "Instituto Nacional de Tecnologia Industrial"
}
document.getElementById("INTI").onmouseout = function() {
    console.log("capturamos el evento salir del boton INTI");
    document.getElementById("info-INTI").innerHTML = ""
}
document.getElementById("INTI").onclick = function() {
    console.log("capturamos el evento click en boton INTI");
    document.getElementById("educacion").innerHTML = inti
    for (;listaInti[i];) {
        htmlInti += `<li>${listaInti[i]}</li>`;
        i++;
      }
    htmlInti += `</ul>`;
    document.getElementById("educacionLista").innerHTML = htmlInti;
}

//CETAE

document.getElementById("CETAE").onmouseover = function() {
    console.log("capturamos el evento pasar por boton CETAE");
    document.getElementById("info-CETAE").innerHTML = "Cuersos UBA (Universidad de Buenos Aires)"
}
document.getElementById("CETAE").onmouseout = function() {
    console.log("capturamos el evento salir del boton CETAE");
    document.getElementById("info-CETAE").innerHTML = ""
}
document.getElementById("CETAE").onclick = function() {
    console.log("capturamos el evento click en boton CETAE");
    document.getElementById("educacion").innerHTML = CETAE
    for (;listaCETAE[c];) {
        htmlCETAE += `<li>${listaCETAE[c]}</li>`;
        c++;
      }  
    htmlCETAE += `</ul>`;
    document.getElementById("educacionLista").innerHTML = htmlCETAE;
}

//Ticmas

document.getElementById("Ticmas").onmouseover = function() {
    console.log("capturamos el evento pasar por boton Ticmas");
    document.getElementById("info-Ticmas").innerHTML = "Programacion Front-End"
}
document.getElementById("Ticmas").onmouseout = function() {
    console.log("capturamos el evento salir del boton Ticmas");
    document.getElementById("info-Ticmas").innerHTML = ""
}
document.getElementById("Ticmas").onclick = function() {
    console.log("capturamos el evento click en boton Ticmas");
    document.getElementById("educacion").innerHTML = Ticmas
    for (;listaTicmas[t];) {
        htmlTicmas += `<li>${listaTicmas[t]}</li>`;
        t++;
      }    
    htmlTicmas += `</ul>`;
    document.getElementById("educacionLista").innerHTML = htmlTicmas;
}
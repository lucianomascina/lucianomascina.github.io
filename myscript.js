var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var edad = document.getElementById("edad").value;
var empresa = document.getElementById("empresa").value;

document.getElementById("save").addEventListener("click", function(event){

    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value; 

    if(nombre === null || nombre.trim() === "" || !isNaN(nombre))
        alert("debe ingresar un nombre");
    if(apellido === null || apellido.trim() === "" || !isNaN(apellido))
        alert("debe ingresar un apellido");
    if(isNaN(edad))
        alert("la edad no puede contener letras");
});

document.getElementById("clean").addEventListener("click", function(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("otro").checked = false;

});

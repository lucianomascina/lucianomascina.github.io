
function ValidateName() {
    let nombre = document.getElementById("nombre").value;
    if(nombre === null || nombre.trim() === "" || !isNaN(nombre))
    alert("debe ingresar un nombre");
}

function ValidateLastName(){
    let apellido = document.getElementById("apellido").value;
    if(apellido === null || apellido.trim() === "" || !isNaN(apellido))
        alert("debe ingresar un apellido");
}

document.getElementById("save").addEventListener("click", function(event){

    event.preventDefault();
    ValidateName();
    ValidateLastName();

});

function Cleaner() {
    
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("otro").checked = false;
}

document.getElementById("clean").addEventListener("click", Cleaner);

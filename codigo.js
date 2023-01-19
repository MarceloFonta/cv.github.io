

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");
let error = document.getElementsByClassName("error");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
    Validacion(nombre, 0, "Ingrese su nombre");
    Validacion(correo, 1, "Ingrese su correo");
    Validacion(mensaje, 2, "Ingrese su mensaje");


  });
  
  
  let Validacion = (id, serial, mensaje) => {
    if (id.value.trim() === "") {
      error[serial].innerHTML = mensaje;
      id.style.border = "2px solid red";
    } else {
        error[serial].innerHTML = "";
      id.style.border = "2px solid green";
    }
  };
  
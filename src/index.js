/* import validator from './validator.js';

console.log(validator);
 */

 //variable para mensajes de error campos vacios
var error = document.getElementById("error");

function getInputNumber(event) {
  event.preventDefault();
  var ccNum = document.getElementById('creditCardNumber').value;
  var nombre = document.getElementById('name').value;
  var mensajesError = [];
  var imparNumeros = [];
  var parNumeros = [];

  console.log(ccNum);
// array y reversamos
  var ccNumReverse = (ccNum.split("")).reverse();
  console.log(ccNumReverse);

  if(nombre === null || nombre === ''){
      mensajesError.push('Debes ingresar nombre');
    }
  else if(ccNum === null || ccNum === '' || (ccNum.length < 16)){
      mensajesError.push('Debes ingresar el número de tarjeta');
    }
  else if(!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum) || (ccNum.length !== 16)){
     mensajesError.push('Debe ingresar solo dígitos');
  }
    //mensaje de error si dejan algun campo vacío o dato incorrecto
    error.innerHTML = mensajesError.join(' , '); //cadena de texto

// iteramos dentro del arreglo y conseguimos posición par e impar de los datos
for(var i=0; i<= ccNumReverse.length-1; i++){
  if(i % 2 === 0){
    imparNumeros.push(ccNumReverse[i]);
  } else {
    parNumeros.push((ccNumReverse[i]*2).toString());
  }
  console.log(imparNumeros); // verificando posiciones par e impar
  console.log(parNumeros);
}
// convertimos de array a String y separamos (split) de nuevo para separar los numeros >=10 y dejarlos como digitos simples
 parNumeros = parNumeros.join("").split("");
 console.log(parNumeros);

 // convertimos en array concatenando las variables imparNumeros con parNumeros
 var finalArray = parNumeros.concat(imparNumeros);
 console.log(finalArray);

// inicializamos variable de sumatoria del finalArray
var sumaFinalArray = 0
// realizando suma de los digitos que componen el finalArray
for(var e = 0; e < finalArray.length; e ++){
  sumaFinalArray += parseInt(finalArray[e]);
  console.log(sumaFinalArray); // comprobando sumatoria de finalArray
  }

/*
var paginaPrincipal = document.getElementById('mainPage');
var paginaTarjetaValida = document.getElementById('validCardPage');
var paginaTarjetaInvalida = document.getElementById('invalidCarPage');
var volverAlInicio = document.getElementById('volverInicio');*/
if (sumaFinalArray % 10 === 0){
  console.log("Válida");
/*  paginaTarjetaValida.style.display = "block";*/
} else {
  console.log("Inválida");
/*  paginaPrincipal.style.display = "none";
  paginaTarjetaInvalida.style.display = "block";
  volverAlInicio.addEventListener("click", () => {
    paginaPrincipal.style.display = "block";
 
   paginaTarjetaInvalida.style.display = "none";
  })*/
}

}
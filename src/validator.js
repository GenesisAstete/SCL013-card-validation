// objeto, que contine los metodos (funcion) para validar tarjeta con algoritmo de luhn y enmascarar
const validator = {
  isValid: (ccNum) => {          // funcion para validar con algoritmo de luhn
    var creditCardNumber = ccNum;
    var imparNumeros = [];
    var parNumeros = [];
    var result = false;

  // realizamos array y reversamos
    var ccNumReverse = (creditCardNumber.split("")).reverse();

    
  // iteramos dentro del arreglo y conseguimos posición par e impar de los datos
  for(var i=0; i<= ccNumReverse.length-1; i++){
    if(i % 2 === 0){
      imparNumeros.push(ccNumReverse[i]);     // verificando posiciones par e impar
    } else {
      parNumeros.push((ccNumReverse[i]*2).toString());
    }
    
  }
  // convertimos de array a String y separamos (split) de nuevo para separar los numeros >=10 y dejarlos como digitos simples
   parNumeros = parNumeros.join("").split("");
   

   // convertimos en array concatenando las variables imparNumeros con parNumeros
   var finalArray = parNumeros.concat(imparNumeros);
   

  // inicializamos variable de sumatoria del finalArray
  var sumaFinalArray = 0
  // realizando suma de los digitos que componen el finalArray
  for(var e = 0; e < finalArray.length; e ++){
    sumaFinalArray += parseInt(finalArray[e]);        // comprobando sumatoria de finalArray
     
    }

    if (sumaFinalArray % 10 === 0){
      result = true;
    } else {
      result = false;
    }
    return result;
    
  },
  
  maskify: (ccNum) => {            // funcion para enmascar tarjeta excepto los ultimos 4 dígitos
    
    var regex = /\d(?=\d{4})/gm;
    var creditCardNumber = ccNum;
    var subst = "#";
    
    // creamos variable result para que contenga el valor de la tarjeta de credito oculta
    var resultMaskify = creditCardNumber.replace(regex, subst);
    
    return resultMaskify;
  }

};


export default validator;
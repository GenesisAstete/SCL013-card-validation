import validator from './validator.js';
// variable que toma el id del boton de validar tarjeta
var botonValidando = document.getElementById("validarTarjeta") 
// variable que toma el id de la pagina principal de bienvenida
var paginaPrincipal = document.getElementById('mainPage');


function validandoTarjeta () {                
    var ccNum = document.getElementById("creditCardNumber").value;
    var nombre = document.getElementById('name').value;
    var error = document.getElementById("error");  //variable para mensajes de error campos vacios
    var mensajesError = [];
     if(nombre === null || nombre === ''){
        mensajesError.push('Debes ingresar nombre');
    }
    else if(ccNum === null || ccNum === '' ){                         
        mensajesError.push('Debes ingresar el número de tarjeta');
    }
    else if(!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum)){                
       mensajesError.push('Debe ingresar solo dígitos');
    }
    //mensaje de error si dejan algun campo vacío o dato incorrecto
    error.innerHTML = mensajesError.join(','); //cadena de texto
    
    if(mensajesError == "" ) {
        var tarjetaValida = validator.isValid(ccNum);
            if (tarjetaValida === true) {
                var enmascarar = enmascararTarjeta();
                var mensajeTarjetaValida = document.getElementById("numeroMaskify");
                var paginaTarjetaValida = document.getElementById('validCardPage');
                var botonRegistrarTarjeta = document.getElementById("registrarTarjeta");
                var paginaComprar = document.getElementById("comprar");
                mensajeTarjetaValida.innerHTML = nombre.toUpperCase() + " tu número de Tarjeta de Crédito es " + enmascarar;
                paginaPrincipal.style.display = "none";
                paginaTarjetaValida.style.display = "block";
                botonRegistrarTarjeta.addEventListener("click", () => {
                    paginaTarjetaValida.style.display = "none";
                    paginaComprar.style.display = "block";
                })
            } else {
                var paginaTarjetaInvalida = document.getElementById('invalidCarPage');
                paginaTarjetaInvalida.style.display = "block"
                paginaPrincipal.style.display = "none"
                var botonVolverAlInicio = document.getElementById('volverInicio');
                botonVolverAlInicio.addEventListener("click", () => {
                    paginaTarjetaInvalida.style.display= "none";
                    paginaPrincipal.style.display = "block";
            })

            }
        }      
}

function enmascararTarjeta(){
    var ccNum = document.getElementById("creditCardNumber").value;
    return validator.maskify(ccNum);
}

botonValidando.addEventListener("click", validandoTarjeta);


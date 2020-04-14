# GELIPAY, Tu seguridad es nuestra prioridad!

![Logo del proyecto](https://github.com/EliHidalgo/SCL013-card-validation/blob/master/img/logo.png?raw=true)

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](Diseño de experiencia de usuario)](#3-investigación-ux-(diseño-de-experiencia-de-usuario))
* [4. Notas](#4-notas)
* [5. Link de GELIPAY](#5-link-de-gelipay)

***

### 1. Resumen del proyecto

Este proyecto permite _validar_ el número de una tarjeta de crédito y devolver dicho número
ocultando todos los dígitos excepto los últimos 4, sin importar la longitud del número validado.

```js
maskify('4556364607935616') === '############5616'
maskify(     '64607935616') ===      '#######5616'
maskify(               '1') ===                '1'
maskify(               '')  ===                ''
```

***

### 2. Imagen final del proyecto


![imagen final proyecto](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

***

### 3. Investigación UX (Diseño de experiencia de usuario) :smile:

Este proyecto esta destinado para aquellas personas que prefieren realizar sus compras
de supermercado por internet, a través de una página segura y sin tener que compartir
su información financiera en cada sitio web que ingresen.

En **GELIPAY** podrás `validar` tu tarjeta de crédito y registrarla para realizar tus compras
de forma rápida y segura al momento de pagar en el sitio web del supermercado
de tu preferencia, evitando de igual forma demoras o problemas al realizar tu
pago web, ya que lo estarías realizando a traves de nuestra página.


##### Primer Sketch :pencil:

![Primer Sketch](https://github.com/EliHidalgo/SCL013-card-validation/blob/master/img/prototipolapiz.jpg?raw=true)

##### Primer Prototipo en Invision :joy:

![Primer Prototipo Invision](https://github.com/EliHidalgo/SCL013-card-validation/blob/master/img/invision.jpg?raw=true)

##### Feedback primer Prototipo :hand: :traffic_light: :computer:

Los puntos más relevantes implementados a partir del _feedback_ recibido estaban relacionados
mayormente a la redacción de los `labels` para indicar al usuario donde ingresar el número de
la tarjeta de crédito, asi como en los nombres que debían llevar los botones por página y la
redacción de los mensajes de **Tarjeta Válida** Y **Tarjeta No Válida**. Principalmente apuntaban a
dejar la información más _clara_ al usuario, para evitar confusiones.


##### Prototipo Final :heart:

![Prototipo Final en Figma](https://github.com/EliHidalgo/SCL013-card-validation/blob/master/img/GeliPayFigma.png?raw=true)


***

### 4. Notas :book:

Como tip para la realización de este proyecto, puedes revisar el Algoritmo de Luhn y los siguientes links con Recursos
para entender este proyecto:

* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html)
* [Valores, tipos y operadores](https://eloquentjavascript.net/01_values.html)
* [Expresiones y Operadores - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* [Estructura del Programa (Variables, Control de flujo)](https://eloquentjavascript.net/02_program_structure.html)
* [Test Unitarios (Unit Texting)](https://martinfowler.com/bliki/UnitTest.html)
* [Npm funcionamiento](https://docs.npmjs.com/)

***

### 5. Link de GELIPAY :rocket: 

https://elihidalgo.github.io/SCL013-card-validation/src/index.html

***

:computer: por Genesis y Eliana con :heart:

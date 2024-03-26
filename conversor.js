//pedir nombre de la persona
var nombre = prompt("¿Cual es tu nombre?")
document.write(nombre)

//conversor de dolar a pesos
var valorEnDolar = prompt("Introduce el importe del dolar US a cambiar");

var tipoDeCambioEnPesos = 16.67;

var valorEnPesos = valorEnDolar * tipoDeCambioEnPesos;

valorEnPesos = valorEnPesos.toFixed(2);

//mostrar saludo y el valor de la conversion de dolar a peso mexicano
alert("Hola ," + nombre + ", el valor de los ," + valorEnDolar  + "dollar es : $" + valorEnPesos + ", pesos mx");

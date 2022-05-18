//Sesion 1 JS 

console.log('hola mundo JS')

//crear variables
/*let, const , var: palabras reservadas para la creacion de variables en js*/

var koder = 'breeze'
let koder2 = 'lenny'
const koder3 = 'lore' //esta no la puedo modificar las variables constantes

//scope / lo vamos a ver hasta cuando veamos funciones 
koder = 'gerard'
koder2 = 'didier'

console.log(koder, koder2, koder3)

//concatenar variables / operador typeof

/*let num1 = '5'
let num2 = 7

console.log(num1 + num2)*/

let nom = 'breeze'
let nomConcatenado = 'Hola ' + nom
console.log(nomConcatenado)

// template strings + string literals 
//placeholders 
//console.log(hola $ { nom }) //No pude poner las comillas simples

/*Pedir valores al usuario 
prompt: activa la ventanita donde vamos a ingresar el valor y es un metodo
window es el objeto de promt */

/*let nomuser = window.prompt('Dame tu nombre', 'Breeze')

//console.log(nomuser)

if (nomuser === null) {
    console.log('nom vacio')
} else {
    console.log(nomuser)
}*/

/*convertir strings a numeros*/
/*let agekoder = prompt('Tu edad es', 27)
console.log(agekoder)

let newAgeKoder = parseInt(agekoder)
console.log(newAgeKoder)*/

// pedir al usuario los grados celsius en su localidad
// convertir ºC to ºF
// celsius * 9/5 + 32
// calcular los ºF

let gradosCelcius = prompt('Cuantos grados celcius hay en tu localidad?')
const F = (9 / 5 * gradosCelcius) + 32

console.log(gradosCelcius + ' grados celcius' + ' equivalen a ' + F + ' grados fahrenheit')
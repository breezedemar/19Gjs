//Condicionales

//Operadores de asignacion 
let total = 0
let a = 5
let b = 10

total = a + b

/* SUMA
total = total + 5
total += 5 */

/* RESTA
total = total - 5
total -= 5
 */

/* MULTIPLICACION
total = total * 5
total *= 5
 */

/* DIVISION 
total = total / 5
total /= 5
 */

/* RESIDUO 
total = total % 5
total %= 5
 */

//console.log(total)

//Operadores de comparacion

/*if (2 === "2") {
    console.log('son iguales 2')
} else if (3 === "3") {
    console.log('son iguales 3')
} else {
    console.log('por defecto')
}*/

// Operador ternario
// expresion ? true : false

// Aqui la forma sin el Operador ternario
/*let numero = 3
if (numero % 2 === 0) {
    console.log(' es par')
} else {
    console.log('es impar')
}*/

// Aqui la forma en Operador ternario
/*numero % 2 === 0 ? console.log('Es par') : console.log('es impar')
numero % 2 === 0 
 ? 
 console.log(' es par')
 : 
 console.log('es impar')*/

// Aqui la forma en Operador ternario y plantilla literal 

/*let esPar = numero % 2 === 0 ? true : false
console.log(`El numero ${numero} es ${esPar === true ? 'par' : 'impar' } `)*/

// switch
let age = parseInt(prompt('cual es tu edad', 17))
let isAge = age >= 18 ? true : false

switch (isAge) {
    case true:
        console.log('Eres Mayor de edad')
        break
    case false:
        console.log('Eres Menor de edad')
        break
    default:
        console.log('No es una edad valida')
        break
}

//Sentencia Switch
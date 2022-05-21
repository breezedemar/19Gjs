/**
 * Estudiar métodos de String
 * Elergir 1 para poder presentar en clase
 * https://www.programiz.com/javascript/library/string
 * https://www.w3schools.com/jsref/jsref_obj_string.asp
 */

// Metodos de string
// funciones
// str.nombreMetodo(p1,p2,pN)
// .toUpperCase()
// .toLowerCase()
// .substring(start, end)
// .slice(start, end)

//The concat() Method

//let history = 'Esta historia inicio'

//window.alert(history.concat(' cuando me enamore de ti'))

//let numPares = [2,4,6]
//The toLocaleLowerCase() Method

/*let frase = 'Han Pasado Los Dias Como Hojas De Libros Sin Leer'

let converter = frase.toLowerCase()
window.alert(converter)*/

//The search() Method

//let frase = 'Por que en los ojos correctos siempre seras arte'

//let buscar = frase.search('ojos')
//window.alert(frase.concat(' --->  =', buscar))
//console.log(buscar)


//'Hola Koders'
//Cuantas vocales existen

let vocales = prompt('Ingresa una palabra')

if (vocales === null) {
    console.log('No has ingresado nada')
} else {
    let cuentaVocal = vocales.match(/[aeiou]/g).length + 'vocales'
    alert(`La palabra ${vocales} tiene ${cuentaVocal} vocales`);
}

/**
 * 'Hola Koders'
 * Cuantos caracteres son
 */


//'Hola Koders'
//Cortar el string en 2 strings 
//-> "hola" "koders"
// Ejercicio 3

let numA = window.prompt('ingresa numero a')
let numB = window.prompt('ingresa numero b')


if (numA >= numB) {
    console.log(numA + 'es mayor que B')
} else {
    console.log(numB + 'es menor que A')
}

let firstNumberUser = parseInt(prompt('Dame el primer numero', 1))
let secondNumberUser = parseInt(prompt('Dame el segundo numero', 1))

// firstNumberUser > secondNumberUser ?
//     console.log(`${firstNumberUser} es mayor que ${secondNumberUser}`)
//     :
//     console.log(`${secondNumberUser} es mayor que ${firstNumberUser}`)


// if(){
//     if(){

//     } else {

//     }
// } else {

// }

firstNumberUser !== secondNumberUser ? (
        firstNumberUser > secondNumberUser ?
        console.log(`${firstNumberUser} es mayor que ${secondNumberUser}`) :
        console.log(`${secondNumberUser} es mayor que ${firstNumberUser}`)
    ) :
    console.log('Son iguales')
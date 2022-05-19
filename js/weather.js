// HW - sesion 2 JS Exercise switch
/*
    En el archivo weather.js
    Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
 
 */

let clima = prompt('Como esta el clima en tu ciudad? Seleccione una opcion: a. Soleado b. Lluvioso c. Nevado d. Nublado')
let temperatura = prompt('cual es la temperatura aproximada', 28)
let F = (9 / 5 * temperatura) + 32


switch (clima) {
    case 'Soleado':
        let messageSoleado = `En tu ciudad el dia esta ${clima} con una temperatura de ${F}°`
        window.alert(messageSoleado)
        break
    case 'Lluvioso':
        let messageLluvioso = `En tu ciudad el dia esta ${clima} con una temperatura de ${F}°`
        window.alert(messageLluvioso)
        break
    case 'Nevado':
        let messageNevado = `En tu ciudad el dia esta ${clima} con una temperatura de ${F}°`
        window.alert(messageNevado)
        break
    case 'Nublado':
        let messageNublado = `En tu ciudad el dia esta ${clima} con una temperatura de ${F}°`
        window.alert(messageNublado)
        break
    default:
        console.log('Debes seleccionar una opcion')
        break

}
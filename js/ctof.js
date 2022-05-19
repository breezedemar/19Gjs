let celcius = window.prompt('¿Cual es la temperatura actual de tu localidad?', 27)

if (celcius === null) {
    console.log('No has ingresado un valor')
} else {
    const F = (9 / 5 * celcius) + 32
    let message = `La temperatura es de ${F}`
    window.alert(message)
}
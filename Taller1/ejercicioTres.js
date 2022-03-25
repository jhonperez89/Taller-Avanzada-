// ejrcicio #3

//Funcion Tradicional

// Ingresa la temperatura maxima y minima de cada dia

function calcularTemperatura(tempMax, tempMin){

    let temperatura = (tempMax + tempMin)/2
    return temperatura

}
let resultado = calcularTemperatura(17,4)
console.log(resultado +"°C")

//Funcion Flecha

let calcularTemperatura2 = (tempMax1, tempMin1) => (tempMax1 + tempMin1)/2
console.log(calcularTemperatura2(18,4) + "°C")



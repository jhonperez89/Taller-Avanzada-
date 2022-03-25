// ejercicio #2

// Ingresar el codigo con tres letras, tres numeros, dos puntos y luego el nombre del piloto

// Funcion tradicional 

function buscarCodigo(codigo){

    let cadena = codigo.split(":")[1]
    return cadena
}

let resultado = buscarCodigo("adb123 : Jhon David")
console.log(resultado)

// Funcion Flecha

let buscarCodigo2 = codigo2=> codigo2.split(":")[1]
console.log(buscarCodigo2("abc123 : Jhonda p"))





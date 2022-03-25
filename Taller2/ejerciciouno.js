// Problema 1

// Funcion Tradicional

function mostrarDatos (nombre,planeta, edad, estatura, fn){

    setTimeout(()=>{
        datos = {
            nombre,
            planeta,
            edad,
            estatura
        }
        fn(datos)
    },10000)
    
}


mostrarDatos("piter","tierra",19,1.67, function(datos){

        if (datos.edad < 15){
            console.log(datos)
            console.log("Actividad de Fuerza")
            
        }else{
            console.log(datos)
            console.log("Actividad de Sable")
        }

})


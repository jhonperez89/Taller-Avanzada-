// Problema 1

// Funcion Tradicional

// function mostrarDatos (nombre,planeta,edad,estatura, fn){

    
//     setTimeout(()=>{
//         datos = {
//             nombre,
//             planeta,
//             edad,
//             estatura
//         }
//         fn(datos)
//     },10000)
    
// }


// mostrarDatos("piter","tierra",11,1.67, function(datos){

//         if (datos.edad < 15){
//             console.log(datos)
//             console.log("Actividad de Fuerza")
            
//         }else{
//             console.log(datos)
//             console.log("Actividad de Sable")
//         }

// })

function actividad (callback){

    let nombres = ["Han solo","Chewbacca","Grogu","Jedi"]
    let planetas = ["T001","Po1o1","T0002","T1200"]

    setTimeout(()=>{

    
        datos = {
            nombre:nombres[Math.floor(Math.random()*nombres.length)],
            planeta:planetas[Math.floor(Math.random()*planetas.length)],
            edad:Math.floor(Math.random() * (27 - 10) +10),
            estatura: Math.random() * (2.0- 1.0)+1.0 
        }
        callback(datos)
        // console.log(datos)
   },10000)
  
   
}



actividad(function(datos){
    if (datos.edad < 15){
        console.log(datos)
        console.log("Actividad de Fuerza")
                    
    }else{
       console.log(datos)
        console.log("Actividad de Sable")
    }
})



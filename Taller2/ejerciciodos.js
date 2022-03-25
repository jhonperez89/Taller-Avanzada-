// ejercicio # 2 taller2

// funcion tradicional

function encontarPlanos (callback){

    let plano = Math.floor(Math.random() * 20 )
    callback(plano)
        
}

encontarPlanos(function(plano){
    if(plano <= 10){
        console.log("NO te puedes llevar el plano, el numero de plano es: " + plano + " tienes que devolverte")
    }else{
        console.log("La nave ha despegado con el plano " + plano + ", buen viaje ")
    }
})




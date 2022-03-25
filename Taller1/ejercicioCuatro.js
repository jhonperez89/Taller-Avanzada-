// ejercicio #4

// Funcion Tradicional 

function revisarSbles(){

    let colores =['Verde','Azul','Rojo']
    let portador = ['obi wan','Watto','Yoda']
    let contador =0
    for(let i=0; i<=20; i++){

            let sable = {
            color: colores[Math.floor(Math.random() * colores.length)],
            energia: Math.round(Math.random() * (0,50) ),
            portador: portador[Math.floor(Math.random() * portador.length)]
        }

            if (sable.energia <=20){
                contador ++
                 console.log(sable)
             }
            
    }

    console.log("el total de sables con energia menor o igual a 20 es de: "+ contador)

}
revisarSbles()




// Funcion Flecha

let revisarSbles2 = () =>{

    let colores =['Verde','Azul','Rojo']
    let portador = ['obi wan','Watto','Yoda']
    let contador =0

    for(let i=0; i<=20; i++){
       
        let sable = {
        color: colores[Math.floor(Math.random() * colores.length)],
        energia: Math.round(Math.random() * (0,50) ),
        portador: portador[Math.floor(Math.random() * portador.length)]

    }
             if (sable.energia <=20){
                contador++
                console.log(sable )
             }
             
    }

    console.log("el total de sables con energia menor o igual a 20 es de: "+ contador)
}

console.log(revisarSbles2())


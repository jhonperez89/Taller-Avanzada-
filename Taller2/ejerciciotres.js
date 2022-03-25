// ejercicio #3

// funcion tradicional


    
    let alimetos = ["pollo","cerdo","pavo","res","pescado","lechuga","zanahoria","manzana","uvas","grillos","mariposas","cucarachas","gusanos"]
    
    let alimentosVegetales = []

    for(let i=0; i<=50; i++){
       
        
        let alimentoVegetal ={}

        alimentoVegetal.nombre =alimetos[Math.floor(Math.random() * alimetos.length)]
        alimentoVegetal.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        
        alimentosVegetales.push(alimentoVegetal)
    }
    // console.log(alimentosVegetales)

function clasificarDieta (alimentosVegetales, callback){

    setTimeout(()=>{
       let totalvegetales = alimentosVegetales.filter((vegetales)=>{
            return(vegetales.nombre ===('lechuga','manzana','uvas') && vegetales.calorias >= 200)

        })
        callback(totalvegetales)
    },2000)
    
}

clasificarDieta(alimentosVegetales,function (totalvegetales){
    let sumaCalorias = 0
    totalvegetales.forEach(function(finalvegetal){
        sumaCalorias = sumaCalorias + finalvegetal.calorias
    })
    console.log(totalvegetales)
    console.log("El total de calorias que debe de consumir es de: "+sumaCalorias)
})

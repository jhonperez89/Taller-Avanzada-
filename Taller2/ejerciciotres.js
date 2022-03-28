// ejercicio #3

// funcion tradicional


    
    let carnivoros = ["pollo","cerdo","pavo","res","pescado"]

    let insectos = ["mariposas","grillos","gusanos"]

    let vegetales = ["lechuga","zanahoria","manzana","uvas"]
    
    let alimentosVegetales = []

    for(let i=0; i<=50; i++){
       
        
        let alimentoVegetal ={}
        let alimentoInsectos={}
        let alimentoCarne={}
        alimentoVegetal.nombre =vegetales [Math.floor(Math.random() * vegetales.length)]
        alimentoInsectos.nombre =insectos [Math.floor(Math.random() * insectos.length)]
        alimentoCarne.nombre =carnivoros [Math.floor(Math.random() * carnivoros.length)]
        alimentoVegetal.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        
        alimentosVegetales.push(alimentoVegetal,alimentoInsectos,alimentoCarne)
        
    }
     console.log(alimentosVegetales)

function clasificarDieta (alimentosVegetales, callback){

    setTimeout(()=>{
       let totalvegetales = alimentosVegetales.filter((vegetales)=>{
            return(vegetales.nombre == "lechuga","zanahoria","manzana","uvas" && vegetales.calorias >= 200)

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





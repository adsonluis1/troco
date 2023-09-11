let entrada = 0
let meodareal:number = 0
let meoda50:number = 0
let meoda25:number = 0
let meoda10:number = 0
let meoda5:number = 0

function trocado(preço:number , pagamento:number){
    // moedas aceitas = 0.05 , 0.10 , 0.25 , 0.50 , 1.0
    let troco:number = pagamento - preço
    let moedas_usadas:number[] = []

    if(troco === 0){
        console.log('certinho')
    }else{

       while(troco > 0.99){
            troco = troco - 1
            moedas_usadas.push(1)
            
       }

        while(troco > 0.49){
            troco = troco - 0.50
            moedas_usadas.push(0.50)
            
        }

        while(troco > 0.24){
            troco = troco - 0.25
            moedas_usadas.push(0.25)
            
        }

        while(troco > 0.09){
            troco = troco - 0.10
            moedas_usadas.push(0.10)
           
        }

        while(troco > 0.04){
            troco = troco - 0.05
            moedas_usadas.push(0.05)
            
        }

        console.log(troco.toFixed(1))
    
    
        // moedas_usadas.map((evt) => {
        //     console.log(`moedas usadas ${evt}`)
        // })
        console.log(moedas_usadas)
        quantidadeDecada(moedas_usadas)
        
    
    }
}

function quantidadeDecada(array:Number[]){
    
    array.find((num1)=>{
       if( num1 == 1)
        meodareal++
    })

    array.find((num1)=>{
       if(num1 == 0.50)
        meoda50++
    })

    array.find((num1)=>{
        if(num1 == 0.25)
        meoda25++
    })

    array.find((num1)=>{
        if(num1 == 0.10)
        meoda10++
    })

    array.find((num1)=>{
        if(num1 == 0.05)
        meoda5++
    })

    console.log(`moeda de 1: ${meodareal}`)
        console.log(`moeda de 0.50: ${meoda50}`)
        console.log(`moeda de 0.25: ${meoda25}`)
        console.log(`moeda de 0.10: ${meoda10}`)
        console.log(`moeda de 0.05: ${meoda5}`)
}

trocado(48,51.13)
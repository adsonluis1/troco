interface Imoedas {
    moedareal:number
    moeda50:number
    moeda25:number
    moeda10:number
    moeda5:number
    moeda1:number
}

let moedas:Imoedas={
    moedareal : 0,
    moeda50 : 0,
    moeda25 : 0,
    moeda10 : 0,
    moeda5 : 0,
    moeda1 : 0
}

let quantidade_de_moedas:Imoedas={
    moedareal : 5,
    moeda50 : 1,
    moeda25 : 4,
    moeda10 : 750,
    moeda5 : 59,
    moeda1 : 43
}

function calculo(troco:number,moedas_usadas:number[]){
    while(troco >= 1 && quantidade_de_moedas.moedareal > 0){
        troco = troco - 1
        moedas_usadas.push(1)  
        quantidade_de_moedas.moedareal--  
    }

    while(troco >= 0.50 && quantidade_de_moedas.moeda50 > 0){
        troco = troco - 0.50
        moedas_usadas.push(0.50)
        quantidade_de_moedas.moeda50--
    }

    while(troco >= 0.25 && quantidade_de_moedas.moeda25 > 0){
        troco = troco - 0.25
        moedas_usadas.push(0.25)
        quantidade_de_moedas.moeda25--
    }

    while(troco >= 0.10 && quantidade_de_moedas.moeda10 > 0){
        troco = troco - 0.10
        moedas_usadas.push(0.10)
        quantidade_de_moedas.moeda10--
    }

    while(troco >= 0.05 && quantidade_de_moedas.moeda5 > 0){
        troco = troco - 0.05
        moedas_usadas.push(0.05)
        quantidade_de_moedas.moeda5--
    }

    while(troco >= 0.01 && quantidade_de_moedas.moeda1 > 0){
        troco = troco - 0.01
        moedas_usadas.push(0.01)
        quantidade_de_moedas.moeda1--
    }

}

function trocado(preço:number , pagamento:number){
    // moedas aceitas = 0.05 , 0.10 , 0.25 , 0.50 , 1
    // func MAIN    
    let troco:number = pagamento - preço
    let moedas_usadas:number[] = []

    if(troco === 0){
        console.log('certinho')
    }else if(preço > pagamento){
        console.log('dinheiro insucifiente')
    }else{
        calculo(troco,moedas_usadas)
        quantidadeDecada(moedas_usadas)
        showinfo(preço,pagamento,troco,moedas,quantidade_de_moedas)
    }
}

function showinfo(preço:number,pagamento:number,troco:number,moedas:Imoedas,quantidade_de_moedas:Imoedas){
    console.log(`valor do produto: ${preço}`)
    console.log(`dinheiro recebido: ${pagamento}`)
    console.log(troco.toFixed(2))
    if(quantidade_de_moedas.moedareal < 0){
        console.log(`moeda de 1: ${moedas.moedareal}`)
    }else{
        console.log(`moeda de 1: ${moedas.moedareal}`)
    }
    console.log(`moeda de 0.50: ${moedas.moeda50}`)
    console.log(`moeda de 0.25: ${moedas.moeda25}`)
    console.log(`moeda de 0.10: ${moedas.moeda10}`)
    console.log(`moeda de 0.05: ${moedas.moeda5}`)
    console.log(`moeda de 0.01: ${moedas.moeda1}`)
}

function quantidadeDecada(array:Number[]){
    
    array.find((num1)=>{
       if( num1 == 1){
        moedas.moedareal++
       }
    })

    array.find((num1)=>{
       if(num1 == 0.50){
        moedas.moeda50++        
        }
    })

    array.find((num1)=>{
        if(num1 == 0.25){
        moedas.moeda25++
        }
    })

    array.find((num1)=>{
        if(num1 == 0.10){
        moedas.moeda10++
        }
    })

    array.find((num1)=>{
        if(num1 == 0.05){
        moedas.moeda5++
        }
    })

    array.find((num1)=>{
        if(num1 == 0.01){
        moedas.moeda1++
        }
    })

}

trocado(48,67.99)

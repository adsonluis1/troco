let entrada = 0

function trocado(preço:number , pagamento:number){
    // moedas aceitas = 0.05 , 0.10 , 0.25 , 0.50 , 1.0
    let troco:number = preço - pagamento
    let cinquenta:number = 0
    if(troco === 0){
        console.log('certinho')
    }else{
       while(troco - 1 > 1){
            troco = troco - 1
            console.log(troco) 
       }
    }
}

trocado(50,49)
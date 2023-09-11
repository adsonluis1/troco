var entrada = 0;
function trocado(preço, pagamento) {
    // moedas aceitas = 0.05 , 0.10 , 0.25 , 0.50 , 1.0
    var troco = preço - pagamento;
    var cinquenta = 0;
    if (troco === 0) {
        console.log('certinho');
    }
    else {
        while (troco % 0.50 === 0) {
            console.log(troco);
        }
    }
    console.log(troco, 'foram usados ' + cinquenta + 'moedas de cinquenta');
}
trocado(50, 49);

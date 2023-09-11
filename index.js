"use strict";
let entrada = 0;
function trocado(preço, pagamento) {
    // moedas aceitas = 0.05 , 0.10 , 0.25 , 0.50 , 1.0
    let troco = preço - pagamento;
    let cinquenta = 0;
    if (troco === 0) {
        console.log('certinho');
    }
    else {
        while (troco - 1 > 1) {
            troco = troco - 1;
            console.log(troco);
        }
    }
}
trocado(50, 49);

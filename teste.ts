interface Ipessoa{
    nome:string
    sobrenome:string
    idade:number
    hobby:string
}

const pessoa:Ipessoa = {
    nome:'adson',
    sobrenome:'luis',
    idade:18,
    hobby:'programar'
}

const {nome,sobrenome,idade,hobby} = pessoa
const fullname = `${nome} ${sobrenome}`
console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(hobby)
console.log(fullname)

const arr = ['adson' , 'anne' , 'rafaelle']

const [a,,b] = arr

console.log(a)
console.log(b)


function trocaDeNome(nome:string,posiçãoDoNome:number,nomeNovo:string,posiçãoOutronome?:number,outroNome?:string){

    const arrnome = nome.split(' ')
    arrnome[posiçãoDoNome - 1] = nomeNovo
    let nome2:string

    if(outroNome != undefined && posiçãoOutronome != undefined){
        arrnome[posiçãoOutronome - 1] = outroNome
        nome2 = arrnome.toString()
    }else{
        nome2= arrnome.toString()
    }

    nome2 = nome2.replace(/,/g,' ')
    console.log(nome2)

}

trocaDeNome('adson rodrigues luis de almeida', 2, 'luis', 3 , 'rodrigues')
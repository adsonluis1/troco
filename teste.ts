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
let amigo = {
    nome: 'Fernando',
    idade: '21',
    sexo: 'M',
    peso: 80,
    engordar(p=0){
        if (p > 0){
            console.log('Engordou')
            this.peso += p
        } else if (p < 0){
            console.log('Emagreceu')
            this.peso += p
        } else {

        }
    }
}
amigo.engordar(0)
console.log(`Meu amigo se chama ${amigo.nome} e pesa ${amigo.peso}kg`)
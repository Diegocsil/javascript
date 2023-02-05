let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Numero inválido ou já existente.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert ('Adicionar valores antes de finalizar!')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Omenor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores digitados é ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
}



/*
var valores = []
var box = document.querySelector('select#box')

function adicionar() {
    let num = document.querySelector('input#num')
    let n = Number(num.value)

    if (num.value.length == 0 || num.value > 100 || num.value < 1){
        alert ("[ERRO] Digite um valor válido.")
    } else {
    valores.push(n)

    let item = document.createElement('option')

    item.text = `valor ${n} adicionado`
    item.value = `box${valores.indexOf[n]}`
    box.appendChild(item)

    console.log(valores)
    }
    
}

function analisar(){
    box.innerHTML = ''
    let item = document.createElement('option')
    valores.sort()

    item.text = `O menor valor digitado é ${valores[0]}`
    item.value = `box_0`
    box.appendChild(item)

    console.log(valores.sort())
    console.log(valores[3])
    console.log(valores.length)
}

function limpar() {
    valores = []
    box.innerHTML =''
}
*/
function contar() {
    let txti = document.querySelector('input#txti')
    let txtf = document.querySelector('input#txtf')
    let txtp = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (txtp.value.length == 0 || txtf.value.length == 0 || txti.value.length == 0)/*testa para saber se os inputs estão vasios*/{
    window.alert('[ERRO] Fatam dados.')
    res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)

        if(p <= 0){
            window.alert('Passoinválido! Considerando passo = 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p)/* primeiro cria a variavel "c", depois impõe uma condição, e por fim atribui uma tarefa*/{
                res.innerHTML += `${c} \u{1F449}` /*Formatação para colocar emoji na pagina, via js*/
            }
        }else{    
            //Contagem regressiva
            for(let c = i; c >=f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
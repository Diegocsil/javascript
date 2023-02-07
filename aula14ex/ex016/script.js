function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.lenght ==0 || passo.value.lenght == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Os codigos unicode (ex. U+1F449) devem ser usados no formato \u{1F449} e entre crases
            }
        }else if (i > f) {
            //Contagem regressiva
            for (let c = i; c >=f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }

        res.innerHTML += `\u{1f3c1}`
    }
}
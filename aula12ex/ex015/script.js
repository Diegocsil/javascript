function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tAno = document.querySelector('input#txtano')
    var nAno = tAno.value
    var res = document.querySelector('div#res')
    var idade = ano - nAno
    if (nAno.length == 0 || nAno > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
        genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')    
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
        genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 60 ){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
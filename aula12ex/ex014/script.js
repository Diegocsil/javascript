function carregar(){
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        foto.src = 'manha.png'
        document.body.style.background ='#ddab76'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        foto.src = 'tarde.png'
        document.body.style.background ='#fe9104'
    }else{
        //BOA NOITE!
        foto.src = 'noite.png'
        document.body.style.background ='#1b3a4b'
}
}

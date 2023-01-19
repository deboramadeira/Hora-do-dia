function carregar (){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde!
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#515154'

    }

}


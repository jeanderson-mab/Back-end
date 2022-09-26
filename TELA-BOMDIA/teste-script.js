function carregar() {
    var nome = window.prompt('Digite seu nome: ')

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var foto = window.document.getElementById('foto')


    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora}  hora.`
    foto.innerHTML = `Seja bem vindo ${nome}`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        /*img.src = ''*/
        document.body.style.background = 'e2cd9f'
    } 

    else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        document.body.style.background = '#e1cd6a'
    }

    else{
        (hora >= 19 && hora <= 23)
        //BOA TARDE!
        /*img.src = 'tarde.png'*/
        document.body.style.background = '#515154'
        
    }
}

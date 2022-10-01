function verificar() {
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.querySelector('p#texto')
    var res = document.querySelector('div#res')
        if (fano.value == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
        else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero=''
            var img = document.querySelector('img#foto')
            if (fsex[0].checked){
                genero = 'Homem'
                if (idade > 0 && idade <10){
                    genero = 'criança m'
                    img.setAttribute('src', '../aula16/imagem/foto-bebe-m.png')

                }
                else if(idade < 21){
                    genero = 'Jovem'
                    img.setAttribute('src', '../aula16/imagem/foto-jovem-m.png')
                }

                else if (idade < 50) {
                    genero = 'Adulto'
                    img.setAttribute('src', '../aula16/imagem/foto-adulto-m.png')
                }

                else {
                    genero = 'Idoso'
                    img.setAttribute('src', '../aula16/imagem/foto-idoso-m.png')
                }
            }

            else if (fsex[1].checked){
                    genero='Mulher'          
                if (idade > 0 && idade <10){
                    genero = 'criança f'
                    img.setAttribute('src', '../aula16/imagem/foto-bebe-f.png')
                }
                else if(idade < 21){
                    genero = 'Jovem F'
                    img.setAttribute('src', '../aula16/imagem/foto-jovem-f.png')
                }
                else if (idade < 50) {
                    genero = 'Adulta'
                    img.setAttribute('src', '../aula16/imagem/foto-adulto-f.png')
                }
                else {
                    genero = 'idosa'
                    img.setAttribute('src', '../aula16/imagem/foto-idoso-f.png')
                }                             
            }     
        msg.innerHTML = `Detectamos o gênero ${genero} com idade ${idade}`
        res.appendChild(img)           

        }            
}    
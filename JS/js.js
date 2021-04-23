function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'IMAGES/bebemenino.png')
                document.body.style.background = 'blue'
            } else if( idade < 21){
                //ADOLESCENTE
                img.setAttribute('src', 'IMAGES/meninojovem.png')
                document.body.style.background = 'blue'
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'IMAGES/homemadulto.png')
                document.body.style.background = 'blue'
            } else{
                //IDOSO
                img.setAttribute('src', 'IMAGES/idoso.png')
                document.body.style.background = 'blue'
            }
          
        }else if (fsex[1].checked){
            genero = "Mulher"
            if( idade >=0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'IMAGES/bebemenina.png')
                document.body.style.background = 'pink'
            } else if( idade < 21){
                //ADOLESCENTE
                img.setAttribute('src', 'IMAGES/meninajovem.png')
                document.body.style.background = 'pink'
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'IMAGES/mulheradulta.png')
                document.body.style.background = 'pink'
            } else{
                //IDOSO
                img.setAttribute('src', 'IMAGES/idosa.png')
                document.body.style.background = 'pink'
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Você é ${genero} e tem ${idade} Anos!`
        res.appendChild(img)
    }
    
}

   
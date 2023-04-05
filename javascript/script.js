iniciarJogo();

function iniciarJogo (){
    let numeroCartas = parseInt(prompt("Quantas cartas você quer jogar? \n Escolha um n° par entre 4 e 14"))    

    while(numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14){
        numeroCartas = parseInt(prompt("O numero de cartas tem que ser um n° par entre 4 e 14"))
    }
    const div = document.querySelector('.cartas')
    let contador = 0;
    while(contador < numeroCartas){
        div.innerHTML += "<div class='card'><div class='front-face face'></div><div class='back-face face'><img class='cartaVirada' src='./imagens/metalparrot.gif' alt=''></div></div>"
        
        contador++;
        console.log()    
    }
    
}


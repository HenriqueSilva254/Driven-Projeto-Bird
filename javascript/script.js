

const imagensCartas = [
'bobrossparrot',
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot']


const cartas = [];




iniciarJogo();

function iniciarJogo (){
    let numeroCartas = parseInt(prompt("Quantas cartas você quer jogar? \n Escolha um n° par entre 4 e 14"))    

    while(numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14){
        numeroCartas = parseInt(prompt("O numero de cartas tem que ser um n° par entre 4 e 14"))
    }
    const div = document.querySelector('.cartas')
    let contador = 0;
    const width = document.querySelector('.cartas')
    width.style.width = 73 * numeroCartas + 'px'
    let parCartas = 0
    let contadorimg = 0
    while(contador < numeroCartas){
        cartas.push(`data-test='card'><div class='front-face face'><img data-test='face-down-image' src='../imagens/back.png' alt=''></div><div class='back-face face'><img data-test='face-up-image' class='cartaVirada' src='./imagens/${imagensCartas[contadorimg]}.gif' alt=''></div>`)
        cartas.push(`data-test='card'><div class='front-face face'><img data-test='face-down-image' src='../imagens/back.png' alt=''></div><div class='back-face face'><img data-test='face-up-image' class='cartaVirada' src='./imagens/${imagensCartas[contadorimg]}.gif' alt=''></div>`)
        contador = contador + 2;
        contadorimg++;
        console.log(contador)
    }
    
    function comparador() { 
        return Math.random() - 0.5; 
    }

    cartas.sort(comparador);

    
    for(let i = 0; i <cartas.length; i++){
        
        div.innerHTML += `<div class='card'${cartas[i]}</div>`

    }
}

 





const imagensCartas = [
'bobrossparrot',
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot']

var cartas = [];
let fimdeJogo = 0
let segundos = 0
let idinterval;
iniciarJogo ()

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
        cartas.push(`data-test='card'><div class='front-face face'><img data-test='face-down-image' src='../imagens/back.png' alt=''></div><div data-par='${imagensCartas[contador]}' class='back-face face'><img data-test='face-up-image' class='cartaVirada' data-valor='${imagensCartas[contador]}' src='./imagens/${imagensCartas[contadorimg]}.gif' alt=''></div>`)
        cartas.push(`data-test='card'><div class='front-face face'><img data-test='face-down-image' src='../imagens/back.png' alt=''></div><div data-par='${imagensCartas[contador]}' class='back-face face'><img data-test='face-up-image' class='cartaVirada' data-valor='${imagensCartas[contador]}' src='./imagens/${imagensCartas[contadorimg]}.gif' alt=''></div>`)
        contador = contador + 2;
        contadorimg++;
        fimdeJogo = fimdeJogo +2;
        console.log(contador)
    }
    
    function comparador() { 
        return Math.random() - 0.5; 
    }

    cartas.sort(comparador);

    
    for(let i = 0; i <cartas.length; i++){
        
        div.innerHTML += `<div class='card' onclick = "virarCarta(this)" ${cartas[i]}</div>`

    }

    console.log(cartas.length)

    idinterval = setInterval(cronometro, 1000)
}
    let jogadas = 0
    let paresCertos = 0
    let primeiraCarta =  '';
    let segundaCarta = '';
    let cartaFront1= '';
    let cartaFront2= '';
    let travarCarta= false

      function virarCarta(carta) {

        jogadas++

        if(travarCarta === true){return false}
        const carta1 = carta.querySelector(".front-face");
        carta1.classList.add("front");
        const carta2 = carta.querySelector(".back-face");
        carta2.classList.add("back");

        if(!primeiraCarta){
        
        cartaFront1= carta1
        primeiraCarta = carta2
        
        return false
        }else {

        cartaFront2= carta1
        segundaCarta = carta2
        checar();

        }


        }


        function checar(){

        let checarCarta = primeiraCarta.dataset.par === segundaCarta.dataset.par
        if(!checarCarta){
            DesvirarCarta()
        }else {
            resetarCartas()

            paresCertos = paresCertos + 2
            console.log(jogadas)
            console.log(paresCertos)
                        
            fimJogo()
            
        }
        
       }
       function DesvirarCarta(){
            travarCarta = true
        setTimeout(() => {
            primeiraCarta.classList.remove('back')
            segundaCarta.classList.remove('back')
            cartaFront1.classList.remove('front')
            cartaFront2.classList.remove('front')
        
            resetarCartas();

        }, 1000)
       }
       function resetarCartas(checar = false){

            if(checar === true){
            primeiraCarta.removeEventListener('click')
            segundaCarta.removeEventListener('click')
            cartaFront1.removeEventListener('click')
            cartaFront2.removeEventListener('click')
            }
            primeiraCarta = '';
            segundaCarta = '';
            cartaFront1 = '';
            cartaFront2 = '';
            travarCarta = false
        }

    function fimJogo(){
    if(paresCertos === fimdeJogo ){
        setTimeout(() => {alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${segundos} segundos!`)
        reiniciar()
        }, 1000)
        clearInterval(idinterval)
        
        
    }

    
}
function cronometro(){
        let tempo = document.querySelector('.cronometro')
        segundos++;
        tempo.innerHTML = segundos
        
   
}
function reiniciar(){
    var condicao = prompt(`Deseja recomeçar? digite apenas sim ou não`)
    if(condicao === "sim"){
        resetarCartas()
        resetarTela()
        iniciarJogo()
        
    }else if(condicao === "não"){

    }

}
function resetarTela(){
    let apagar = document.querySelector('.cartas')
    apagar.innerHTML = "" 
    cartas = [];
    let fimdeJogo = 0
    let segundos = 0
    
}
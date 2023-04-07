

const imagensCartas = [
'bobrossparrot',
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot']


const cartas = [];



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
        console.log(contador)
    }
    
    function comparador() { 
        return Math.random() - 0.5; 
    }

    cartas.sort(comparador);

    
    for(let i = 0; i <cartas.length; i++){
        
        div.innerHTML += `<div class='card' onclick = "virarCarta(this)" ${cartas[i]}</div>`

    }

    

}

    let primeiraCarta =  '';
    let segundaCarta = '';
    let cartaFront1= '';
    let cartaFront2= '';
    let travarCarta= false

      function virarCarta(carta) {
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


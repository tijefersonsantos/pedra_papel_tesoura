function jogar(){

   /* estrutura de decisão do codigo*/
    if ((document.getElementById('pedra').checked == false && document.getElementById('papel').checked == false && document.getElementById('tesoura').checked == false)) {
        alert('Selecione Alguma das opções');
    } else {
            
        var sorteio = Math.floor(Math.random() * 3)
        switch (sorteio){ 
                case 0: /* comando paa exibir na tela as imagens png dos resultados da maquina*/
                document.getElementById('monitor').src= 'mpedra.png'
                break

                case 1:
                document.getElementById('monitor').src= 'mpapel.png'
                break;

                case 2:
                document.getElementById('monitor').src= 'mtesoura.png'
                break
        }
    /*Aqui irá imprimir os resultados na tela com base na estrutura de decisão acima*/
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('placar').innerText = 'Vocês estão empatados!'
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('placar').innerText = 'ooOOOooooOOOH! Parabéns jogador! Você venceu...'
        } else {
            document.getElementById('placar').innerText = 'Infelizmente o PC venceu, tente na proxima!'
        }
    }
}

function resetar(){
    document.getElementById('monitor').src='monitor.png'
    document.getElementById('placar').innerHTML=""

}
 

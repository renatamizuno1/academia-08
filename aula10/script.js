let quadradinhos = document.querySelectorAll('div');

function trocarCor(event){
    event.target.style.backgroundColor = "purple";
    console.log(event);
}

// quadradinho.onclick = trocarCor;

// for (let i = 0; quadradinho.clientHeight; i++){

// }

for (let quadradinho of quadradinhos){
    quadradinho.onclick = trocarCor
}

// CONTADOOR
let textoContador = document.querySelector('h1');
let tempoDoContador = Number(prompt("Digite o tempo em segundos"));

function contador(){
    tempoDoContador--;
    textoContador.innerHTML = tempoDoContador;
    if(tempoDoContador == 0){
        clearInterval(idInterval)
    }
}

console.log(contador());

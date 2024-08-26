//variable de alcance global
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 4;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
  if(numeroDeUsuario === numeroSecreto){
    //El usuaruio acerto
    asignarTextoElemento('p', `Acertaste en ${numeroIntentos} intento(s)`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acerto
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p', 'El numero es menor');
    } else {
      asignarTextoElemento('p', 'El numero es mayor');
    }
    numeroIntentos++;
    limpiarCaja();
  }

  return;
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  numeroIntentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpiarCaja() {
  document.querySelector('#numeroUsuario').value= '';
}

function generarNumeroSecreto() {
  //variable de alcance de bloque
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


  if(listaNumerosSorteados.length === numeroMaximo){
    asignarTextoElemento('p', `Ya se sortearon todos los numeros.`);
  } else {
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

condicionesIniciales();

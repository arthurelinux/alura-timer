const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');

let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo')

let curso = document.querySelector('.curso');


let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', function(){
    if(play){
        timer.parar(curso.textContent);
        play = false;
    }else{
        timer.iniciar(tempo);
        play = true;
    }

    imgs = imgs.reverse();
    //timer.iniciar(tempo);
    botaoPlay.src = imgs[0]

})

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});

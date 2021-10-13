const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let data;
function getDate(seg){
    data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}
let segundos = 0;
let timer;
let tempo;
function iniciarRelogio(){
    if (!tempo) {
        timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getDate(segundos);
    }, 1000);
    }
    tempo = true;
}
document.addEventListener('click', function(click){
    const element = click.target;
   if (element.classList.contains("iniciar")) {
        relogio.classList.remove('pausado');
        iniciarRelogio();
   } 
   else if(element.classList.contains("pausar")){
        if (segundos !== 0) {
            relogio.classList.add('pausado');
            clearInterval(timer);
            tempo = false;
        }
   }  
   else if(element.classList.contains("zerar")){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        tempo = false;   
        relogio.innerHTML = "00:00:00";
        segundos = 0;
   } 
})


// iniciar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');
//     iniciarRelogio();
// })
// pausar.addEventListener('click', function(){
//     if (segundos !== 0) {
//          relogio.classList.add('pausado');
//          clearInterval(timer);
//          tempo = false;
// }
// })
// zerar.addEventListener('click', function(){
//     clearInterval(timer);
//      relogio.classList.remove('pausado');
//      tempo = false;   
//      relogio.innerHTML = "00:00:00";
//      segundos = 0;
// })

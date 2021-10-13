const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "white";
}
// ##############################
// for (let p = 0; p < ps.length ; p++){
//     ps[p].style.backgroundColor = backgroundColorBody;
//     ps[p].style.color = "white";
// }
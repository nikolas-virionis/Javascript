const elementos = [
    {tag: 'p', texto: 'Texto 1'},
    {tag: 'div', texto: 'Texto 2'},
    {tag: 'footer', texto: 'Texto 3'},
    {tag: 'section', texto: 'Texto 4'}
];
container = document.querySelector('.container');
let div = document.createElement('div');
for (let i = 0; i < elementos.length ; i++){
    // ##############################
    // let element = document.createElement(`${elementos[i].tag}`);
    // element.append(`${elementos[i].texto}`);
    // div.appendChild(element);
    // ##############################
    let { tag, texto } = elementos[i];
    let element = document.createElement(tag);
    element.append(texto);
    div.appendChild(element);
    // ##############################
    // let text = document.createTextNode(texto);
    // element.appendCHild(text);
    
}
container.appendChild(div);
let input = document.getElementById('input');
function validar() {
    let cpf = (input.value.replace(/\D+/g, '')).slice(0, 9);
    let contador = 10, valorTotal = 0, penultimoDigito, ultimoDigito;
    for (let num of cpf) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
    let checkNum = (11 - (valorTotal % 11))
    checkNum <= 9 ? penultimoDigito = checkNum : penultimoDigito = 0;
    cpf += penultimoDigito;
    contador = 11;
    valorTotal = 0;
    for (let num of cpf) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
    checkNum = (11 - (valorTotal % 11))
    checkNum <= 9 ? ultimoDigito = checkNum : ultimoDigito = 0;
    console.log(`CPF Digitado: ${input.value.replace(/\D+/g, '')}, CPF Verificado: ${cpf + ultimoDigito}`);
    if ((input.value.replace(/\D+/g, '')) === (cpf + ultimoDigito)) input.style.background = 'lightgreen';
    else input.style.background = 'red';
}
input.addEventListener('keypress', event => event.key === "Enter" ? validar() : '')
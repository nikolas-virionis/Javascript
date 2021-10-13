// fazer no code runner
function CPF(valor) {
    Object.defineProperty(this, 'cpfInput', {
        get: () => valor
    });
    Object.defineProperty(this, 'cpf', {
        get: () => (valor.replace(/\D+/g, '')).slice(0, 9)
    })
}
function ValidaCPF() {
    this.penultimoDigito = function () {
        let contador = 10, valorTotal = 0;
        for (let num of this.cpf) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
        let checkNum = (11 - (valorTotal % 11));
        return checkNum <= 9 && checkNum > 0 ? checkNum : 0;
    },
        this.ultimoDigito = function () {
            let cpf = this.cpf + this.penultimoDigito();
            let contador = 11, valorTotal = 0;
            for (let num of cpf) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
            let checkNum = (11 - (valorTotal % 11));
            return checkNum <= 9 && checkNum > 0 ? checkNum : 0;
        },
        this.cpfCompleto = function () {
            return (this.cpf + this.penultimoDigito() + this.ultimoDigito())
        },
        this.cpfCerto = function () {
            return this.cpfCompleto() === (this.cpfInput.replace(/\D+/g, ''))
        }
}
CPF.prototype = new ValidaCPF();
CPF.prototype.constructor = CPF;
let cpf1 = new CPF('428.711.848-01');
console.log(cpf1.cpfCerto())
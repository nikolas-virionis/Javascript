// fazer no code runner
export class CPF {
    constructor(valor) {
        this.cpf = valor.replace(/\D+/g, "");
    }
    penultimoDigito() {
        let cpfAntesTraço = this.cpf.slice(0, 9),
            contador = 10,
            valorTotal = 0;
        for (let num of cpfAntesTraço)
            contador >= 2 ? (valorTotal += Number(num) * contador--) : "";
        let checkNum = 11 - (valorTotal % 11);
        return checkNum <= 9 && checkNum > 0 ? checkNum : 0;
    }
    ultimoDigito() {
        let cpfMenosUltimoDigito =
                this.cpf.slice(0, 9) + this.penultimoDigito(),
            contador = 11,
            valorTotal = 0;
        for (let num of cpfMenosUltimoDigito)
            contador >= 2 ? (valorTotal += Number(num) * contador--) : "";
        let checkNum = 11 - (valorTotal % 11);
        return checkNum <= 9 && checkNum > 0
            ? this.penultimoDigito() + "" + checkNum
            : this.penultimoDigito() + "0";
    }
    CPFCompleto() {
        return this.cpf.slice(0, 9) + this.ultimoDigito();
    }
    cpfCerto() {
        return this.CPFCompleto() == this.cpf ? "CPF válido" : "CPF inválido";
    }
}
// let cpf = new CPF('428.711.848-01');
// console.log(cpf.cpfCerto());

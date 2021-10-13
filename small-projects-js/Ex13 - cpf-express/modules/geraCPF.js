import { CPF } from "./CPF.js";
export class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf() {
        let algo;
        const semDigito = this.rand();
        algo = new CPF(semDigito).CPFCompleto();
        return algo;
    }
}

let i = new GeraCPF();
let cpf = i.geraNovoCpf();
console.log(cpf);

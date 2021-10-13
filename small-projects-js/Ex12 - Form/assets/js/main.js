class Validação {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.formSubmit();
        this.arrayMsg = [{
            el: '.nome',
            msg: 'Campo vazio'
        },
        {
            el: '.sobrenome',
            msg: 'Campo vazio'
        },
        {
            el: '.cpf',
            msg: 'Campo vazio'
        },
        {
            el: '.usuario',
            msg: 'Campo vazio'
        },
        {
            el: '.senha',
            msg: 'Campo vazio'
        },
        {
            el: '.repetir-senha',
            msg: 'Campo vazio'
        }]
        this.arrayMsgEspec = [{
            el: '.cpf',
            msg: 'CPF Inválido'
        },
        {
            el: '.usuario',
            msg: 'Usuário Inválido, este precisa ter entre 3 e 12 caracteres alfanuméricos'
        },
        {
            el: '.senha',
            msg: 'Senha Inválida. Esta deve conter entre 6 e 12 caracteres'
        },
        {
            el: '.repetir-senha',
            msg: 'Senhas diferentes'
        }]
    }

    formSubmit() {
        this.formulario.addEventListener('submit', e => this.validar(e))
        this.cpf = this.formulario.querySelector('.cpf').value ? this.formulario.querySelector('.cpf').value.replace(/\D+/g, '') : false;
    }

    camposPreencidos() {
        let usuario = this.formulario.querySelector('.usuario').value;
        let cpf = this.formulario.querySelector('.cpf').value ? this.formulario.querySelector('.cpf').value.replace(/\D+/g, '') : false;
        let sobrenome = this.formulario.querySelector('.sobrenome').value;
        let nome = this.formulario.querySelector('.nome').value;
        let senha = this.formulario.querySelector('.senha').value;
        let repetirSenha = this.formulario.querySelector('.repetir-senha').value;
        return nome && sobrenome && cpf && usuario && senha && repetirSenha;
    }

    campoVazio() {
        for (let el in this.formulario.querySelectorAll('.validar')) !(this.formulario.querySelectorAll('.validar')[el].value) ? this.msgErro(this.arrayMsg[el]) : '';
    }

    usuarioValido() {
        let regex = (/[^a-z0-9]/g);
        let user = this.formulario.querySelector('.usuario').value;
        return user.length >= 3 && user.length <= 12 && !regex.test(user);
    }

    senhaValida() {
        let senha = this.formulario.querySelector('.senha').value;
        console.log(`Senha Valida: ${senha.length >= 6 && senha.length <= 12}`)
        return senha.length >= 6 && senha.length <= 12;
    }

    senhasIguais() {
        let senha = this.formulario.querySelector('.senha').value;
        let repetirSenha = this.formulario.querySelector('.repetir-senha').value;
        console.log(`Senhas Iguais: ${senha === repetirSenha}`)
        return senha === repetirSenha;
    }

    penultimoDigito() {
        let cpfAntesTraço = this.formulario.querySelector('.cpf').value.replace(/\D+/g, '').slice(0, 9), contador = 10, valorTotal = 0;
        for (let num of cpfAntesTraço) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
        let checkNum = (11 - (valorTotal % 11));
        return checkNum <= 9 && checkNum > 0 ? checkNum : 0;
    }
    ultimoDigito() {
        let cpfMenosUltimoDigito = this.formulario.querySelector('.cpf').value.replace(/\D+/g, '').slice(0, 9) + this.penultimoDigito(), contador = 11, valorTotal = 0;
        for (let num of cpfMenosUltimoDigito) contador >= 2 ? valorTotal += Number(num) * contador-- : '';
        let checkNum = (11 - (valorTotal % 11));
        return checkNum <= 9 && checkNum > 0 ? this.penultimoDigito() + '' + checkNum : this.penultimoDigito() + '0';
    }
    CPFCompleto() {
        return this.formulario.querySelector('.cpf').value.replace(/\D+/g, '').slice(0, 9) + this.ultimoDigito();
    }
    cpfCerto() {
        return this.CPFCompleto() == this.formulario.querySelector('.cpf').value.replace(/\D+/g, '');
    }

    validar(e) {
        e.preventDefault();
        let divsErro = document.querySelectorAll('.error-text');
        for (let div of divsErro) div.style.display = 'none';
        if (!(this.camposPreencidos()) || !(this.cpfCerto()) || !(this.usuarioValido()) || !(this.senhaValida()) || !(this.senhasIguais())) {
            if (!(this.camposPreencidos())) this.campoVazio();
            else {
                if (!(this.cpfCerto())) this.msgErro(this.arrayMsgEspec[0]);
                if (!(this.usuarioValido())) this.msgErro(this.arrayMsgEspec[1]);
                if (!(this.senhaValida())) this.msgErro(this.arrayMsgEspec[2]);
                if (!(this.senhasIguais())) this.msgErro(this.arrayMsgEspec[3]);
            }
        }
        else this.msgSuccess();
    }

    msgErro(objMsg) {
        if (objMsg) {
            let element = document.querySelector(objMsg.el)
            let div = document.createElement('div');
            div.innerHTML = objMsg.msg;
            div.classList.add('error-text');
            if (element) element.insertAdjacentElement('afterend', div);
        }

    }

    msgSuccess() {
        let divsErro = document.querySelectorAll('.error-text');
        for (let div of divsErro) div.style.display = 'none';
        alert('Cadastro feito com sucesso!!')
    }

}
const validarForm = new Validação();
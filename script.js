//Inclusão de ponto no campo matricula e campo de matricula invalido
var matricula = document.getElementById('registerNumber');

function mat() {
    if (matricula.value.length == 3) {
        matricula.value += ".";
    }
}

function matInvalid() {
    matricula = document.getElementById('registerNumber');
    if (matricula.value.length < 5) {
        alert("Campo matricula invalido")
    }

}

//Campo nome invalido
var nome = document.getElementById('name');

function nomeInvalid() {
    if (nome.value.length < 5) {
        alert("Campo nome inválido")
    }
}

//Campo CPF Invalido e inclusão de pontos
var cpf = document.getElementById('CPF');

function ponto() {

    if (cpf.value.length == 3) {
        cpf.value += ".";
    } else if (cpf.value.length == 7) {
        cpf.value += ".";
    } else if (cpf.value.length == 11) {
        cpf.value += "-";
    }
}

function cpfInvalid() {
    if (cpf.value.length < 14) {
        alert("Campo CPF inválido")
    }
}


//Campo rg Invalido e inclusão de pontos
var RG = document.getElementById('rg');

function ponto2() {
    if (RG.value.length == 2) {
        RG.value += ".";
    } else if (RG.value.length == 6) {
        RG.value += ".";
    } else if (RG.value.length == 10) {
        RG.value += "-";
    }
}

function RGInvalid() {
    if (RG.value.length < 12) {
        alert("Campo RG inválido")
    }
}

//Campo CEP e dado invalido
function getDadosEnderecoPorCep(cep) {
    let xhr = new XMLHttpRequest 
    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)
    
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('logradouro').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('uf').value = dadosJSONObj.uf
            }
        }
    }

    xhr.send()
}

function CEPInvalid() {
    if(cep.value.length < 9) {
    alert("Campo CEP inválido")
   }
 }



//Campo Rua Invalido 
var Rua = document.getElementById('rua');

function RuaInvalid() {
    if (Rua.value.length < 5) {
        alert("Campo Rua inválido")
    }
}

//Campo Bairro Invalido 
var bairro = document.getElementById('bairro');

function BairroInvalid() {
    if (bairro.value.length < 3) {
        alert("Campo bairro inválido")
    }
}

//Campo Cidade Invalido 
var bairro = document.getElementById('bairro');

function BairroInvalid() {
    if (bairro.value.length < 3) {
        alert("Campo bairro inválido")
    }
}

//Campo Estado Invalido 
var estado = document.getElementById('estado');

function EstadoInvalid() {
    if (estado.value.length < 3) {
        alert("Campo cidade inválido")
    }
}

//Botão de Salvar
document.getElementById('btn').addEventListener('click', () => {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos.")
    }
})
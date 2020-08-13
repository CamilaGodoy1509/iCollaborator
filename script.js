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
var bairro = document.getElementById('cidade');

function CidadeInvalid() {
    if (bairro.value.length < 3) {
        alert("Campo cidade inválido")
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
function salvar() {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos.")
    } 
    const obj = {
        "nome": form.name.value,
        "CPF": form.CPF.value,
        "RG": form.rg.value,
        "data_nasc": form.DataDeNascimento.value,
        "tipo_cnh": form.cnh.value,
        "estado_civil": form.EstadoCivil.value,
        "CEP": form.CEP.value,
        "rua": form.logradouro.value,
        "bairro": form.bairro.value,
        "cidade": form.cidade.value,
        "estado": form.uf.value,
        "numero": form.numero.value,
        "complemento": form.complemento.value
       }

    const objJSON = JSON.stringify(obj)
    const xhr = new XMLHttpRequest();
    const URL = "https://beginner-api.herokuapp.com/save";

    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            const statusPOST = JSON.parse(xhr.responseText);

            if (statusPOST.Sucesso != undefined) {
                alert(statusPOST.Sucesso)
           } else {
                alert(statusPOST.Error)


           }


       }
   }

    xhr.send(objJSON)

}
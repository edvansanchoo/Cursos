

var botaoAdicionar = document.querySelector("#adicionar-pacinte");

// ação que sera feita ao clicar no botão
botaoAdicionar.addEventListener("click", function(event){
    // Para evitar que a pagina recarregue ao cliclar no botão
    event.preventDefault();

    // Pegando os valores que são inseridos na pagina
    var form = document.querySelector(".form-adiciona");

    var paciente = obtemInformacoesDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagenErro = document.querySelector("#mensagens-erro");
    mensagenErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente){
     //Criando uma tabela
     var pacienteTr = montarTr(paciente);
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);
};

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemInformacoesDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}


function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Criando colunas da tabela
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome do paciente não pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é Invalido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("A altura é invalida");
    }
    if(paciente.gordura.length == 0){
        erros.push(" A gordura do paciente não pode ser em branco."); 
    }
    if(paciente.peso.length == 0){
        erros.push("O peso do paciente não pode ser em branco.");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }

    return erros;
}


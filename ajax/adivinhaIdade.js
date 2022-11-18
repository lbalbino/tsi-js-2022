document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();

    //nome do usuário
    let nome = document.getElementById('nome').value;

    //Fazemos a chamada                            //então (depois)
    fetch('http://api.agify.io/?name=${nome}').then(function(ret){

        //pegamos apenas o conteúdo do retorno
        return ret.text();

        //entao
    }).then(function(cont){

        //trabalhamos com o conteúdo retornado
        let dados = JSON.parse(cont);

        let saida = '${dados.name} tem ${dados.age} anos';

        document.getElementById('nome').value = '';

        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });
}
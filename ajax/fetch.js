document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();

    //nome do usuário
    let nome = document.getElementById('nome').value;

    //Fazemos a chamada                            //então (depois)
    fetch('http://127.0.0.1:5500/ajax/fetch.html').then(function(ret){

        //pegamos apenas o conteúdo do retorno
        return ret.text();

        //entao
    }).then(function(cont){

        //trabalhamos com o conteúdo retornado
        let dados = JSON.parse(cont);

        let saida = '';

        dados.forEach(function(aluno){

            saida = aluno.idade >= 18 ?
                    '${aluno.nome} é maior de idade<br>'
                    :
                    '${aluno.nome} é menor de idade<br>';
        });

        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });
}
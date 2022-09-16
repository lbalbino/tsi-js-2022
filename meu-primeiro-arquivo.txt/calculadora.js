
let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click',function(evento) {
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');
    
    let preco = CalcularPreco(serv, prazo);

    res.innerText = 'Funcionou!';

    console.log(serv.value);

    console.log(evento);


});

function CalcularPreco( servico, prazo) {

    let tabela = [['$$$','$$','$'],
                 ['$$$$', '$$$', '$$'], 
                 ['Não faz', 'Não faz', '$$$']];
    
}


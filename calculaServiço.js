let serv = document.getElementById('servico');
let prazo = document.getElementById('prazo');
let res = document.getElementById('resultado');
console.log(serv.value);


let preco = CalcularPreco(serv.value, prazo.value);

res.innerText = 'Funcionou!';

 btnCalcular.addEventListener('click',function(evento) {

});

function CalcularPreco( servico, prazo) {

let tabela = [['$$$','$$','$'],
             ['$$$$', '$$$', '$$'], 
             ['Não faz', 'Não faz', '$$$']];
        return tabela[servico][prazo];
}
let tabela =  [['$$$', '$$','$'],
                ['$$$$' ,'$$' , '$$'],
                ['--','--','$$$']];

let servico = prompt ("entre com o servico \n0 - troca de óleo \n1 - balanceamento \n2 - cambagem");                
let prazo = prompt ("entre com o prazo: \n0 - um dia \n1 - dois dias \n2 - tres dias");

if ( Validaentrada(servico) && Validaentrada(prazo)) {

    alert("O serviços ficará em: " + tabela[servico][prazo]);

}else {
    alert("ERRO: Verifique os valores inseridos e tente novamente!");
}

function Validaentrada(dadoUsuario){

    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}


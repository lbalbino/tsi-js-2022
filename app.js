//relembrando questôes básicas do JS

//Looopings

//for

for(let i = 1; i <= 10; i++){
    console.log("Número da linha: " + i);
}

//while

i = 1;
while(i <= 10){
    console.log('Número da linha com while: ' + i);
    i++;
}

//do
i = 1
do {
    console.log('Número da linha com do while : ' + i)
    i++;
} while (i <= 10);

////////////////////////////////////////////////////////////
//Condicionais

//if

let a = 3;
let b = 2;

if(a > b){
 console.log(a + ' é maior que ' + b);
 } else if(a == b){
    console.log(a + ' é igual a ' + b)
 } else {
    console.log(a +  'NÃO é maior que ' + b) ;
}

//switch

let d = 0;

switch (d) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log('Número inválido');    
}

//Termário

let x = 4;
let y = 2;

let resultado = x > y ? 'x é maior' : 'não é maior';

console.log(resultado);

let genero = prompt('Enter com M ou F');

let saida = genero == 'M' ? 'Masculino' : 'Feminino';

console.log(saida);

//Coalescente
let coisa = 10;
let variavel = coisa ?? 'Não há';
console.log(variavel);
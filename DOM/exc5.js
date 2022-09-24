// Cria elemento li
let NovoItemNaLista = document.createElement('li'); 

//define a classe CSS do elemento
NovoItemNaLista.className = "collection-item";

//define o id do elemento
NovoItemNaLista.id = "novo-item";

//adciona atributo ao elemento
NovoItemNaLista.setAttribute('title', 'Novo item na lista');

//adiciona um node filho
NovoItemNaLista.appendChild(document.createTextNode('Fazer exercício fisico'));

//criar sub elemento <a>

let Ancora = document.createElement('a');
Ancora.className = "delete-item secondary-content";
Ancora.setAttribute('href', '#');

//criar sub elemento <i>
let icone = document.createElement('i');
icone.className =  'fa fa-remove';
console.log(NovoItemNaLista);

//adiciona o <i> em <a>
Ancora.appendChild(icone);

//adiciona o <a> em <i>
NovoItemNaLista.appendChild(Ancora);

//como capturar o <ul> com queryselector
// let elementouele = document.querySelector('ul.collection');
// elementouele.appendChild(NovoItemNaLista);


//como capturar o <ul> pela classe 
let elementouele = document.getElementsByClassName('collection')
 
elementouele[0].appendChild(NovoItemNaLista);




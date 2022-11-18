//Como criar elementos

// Cria elemento li
let novoItemNaLista = document.createElement('li'); 

//define a classe CSS do elemento
novoItemNaLista.className = "collection-item";

//define o id do elemento
novoItemNaLista.id = "novo-item";

//adiciona atributo ao elemento
novoItemNaLista.setAttribute('title', 'Novo item na lista');

//adiciona um node filho
novoItemNaLista.appendChild(document.createTextNode('Fazer exercício fisico'));

//criar sub elemento <a>
let elementoAncora = document.createElement('a');
elementoAncora.className = "delete-item secondary-content";

elementoAncora.setAttribute('href', '#');

//criar sub elemento <i>
let elementoIcone = document.createElement('i');

elementoIcone.className =  'fa fa-remove';

//adiciona o <i> en <a>
elementoAncora.appendChild(elementoIcone);

//adicona o <a> em <li>
novoItemNaLista.appendChild(elementoAncora);

//Como capturar o <ul> pela classe
let elementoUele = document.getElementsByClassName('collection');

elementoUele[0].appendChild(novoItemNaLista);
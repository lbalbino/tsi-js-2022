sessionStorage.setItem('nome', 'Camila');
sessionStorage.setItem('sobrenome', 'Silva');

let btn = document.getElementById('botão');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();
    let entrada = document.getElementById('entrada').value;
    let mostrar = document.getElementById('mostrar').innerText = valor;
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';
    
    //após obtermos o dado do usuário
    //vamos guardá-lo no local storage
    sessionStorage.setItem('dadoDoUsuario', valor);
}

//para recuperar o dado de local storage 
//usamos o localStorage.getItem
document.querySelector('#mostrar').innerText = sessionStorage.getItem('dadoDoUsuario');

//E para apagar no local storage?
//localStorage.removeItem('dadoDoUsuario');

let e;


e = document.getElementsByClassName('collection-item');


let vetor = Array.from(e);


vetor.forEach(function(val){

    val.style.color = 'green';

    console.log(val.innerText);
});


// Somente  para Ímpares, eve)
e = document.querySelectorAll('li:nth-child(odd)');

console.log(e[2]);

vetor.forEach(function(val) {
    
    val.style.color = '#dedede';  

});

console.log(e);

e = document.querySelector('ul.collection');

console.log(e.childElementCount)
// usando função anonima !
// e.forEach(FazAi);

// function FazAi(val) {

//     console.log(val);

// }

console.log(e.children[0])
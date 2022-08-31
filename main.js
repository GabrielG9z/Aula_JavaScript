var nome = 'Gabriel Genovez';
var idade = 22;


function imc (peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

/* console.log(imc(60,1.80));

function corFavorita(cor) {
    if(cor === 'azul'){
        return 'eu gosto do céu';
    }else if (cor === 'verde'){
        return 'eu gosto do verde';
    }else {
        return 'não gosto de cores';
    }
}
corFavorita(verde); */

/* function terceiraIdade (idade) {
    if (typeof idade !== 'number') {
        return 'Por favor preencha com um número'
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade('oi')) */

// Exercícios de funções

// Exercício 1) Crie uma função para verificar se um valor é true.
function isTrue (dado) {
    // Os dois (!!) servem para verificar o tipo do dado booleano.
    return !!dado;
}

//Exercício 2) Crie uma função matemática que retorne o perímetro de um quadrado
function quadrado (lado) {
    return lado * 4;
}
console.log(quadrado(2));

//Exercício 3) Crie uma função que retorne seu nome completo.
function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Gabriel', 'Genovez'));

//Exercício 4) Crie uma função que verifica se um número é par.
function isEven (numero) {
    var modulo = numero % 2;
        if(modulo !== 0)
        return 'Esse numero é impar';
         else {
        return 'Esse numero é par'
    }
}
console.log(isEven(4));

//Exercício 5) Crie uma função que retorna o tipo de dado.
function tipoDeDado (dado) {
    return typeof dado;
}
console.log(tipoDeDado());

//Exercício 6) Crie um addEventListenner que exiba seu nome no console toda vez que for executada.
addEventListener ('click', function() {
    console.log('Gabriel Genovez')
})

//Exercício 7) Corrija o erro abaixo.
function jaVisitei(totalPaises, paisesVisitados, precisoVisitar) {
     precisoVisitar = totalPaises - paisesVisitados;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países, restam visitar ${precisoVisitar}`;
    
}
console.log(jaVisitei);
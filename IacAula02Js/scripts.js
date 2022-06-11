/*
1 - Declarar uma variável, atribuir um valor numérico a ela.
 Mostrar o valor e o tipo. Teste todos os tipos vistos em sala 
 de aula.


*/

var numero = 100;
imprimir(numero);

var texto = "aqui vai um texto";
imprimir(texto);

var logico = true;
imprimir(logico);

function imprimir(valor){
    console.log(`O valor da variável é ${valor} e o tipo é ${typeof(valor)}`);
}

function calcular(n1,n2,oper){
    return 0;
}

// // em outras linguagem
// function void imprimir(valor){

// }

// function number calcular(n1,n2,oper){
//     return number;
// }


// arrays

var carros = ['gm', 'vw', 'fiat'];

console.log(carros);
console.log(carros[1]);

for (let index = 0; index < carros.length; index++) {
    console.log("valor " + carros[index]);
    
}

var telefones = "51993939393,5193939393,239949494,93939393,9393939";
var arrFones = telefones.split(",");

console.log(telefones);
console.log(arrFones);


var octal = "776655";
var arrNumber = octal.split('');
console.log(octal);
console.log(arrNumber);

function binaryToDecimal(num){

}
function octalToDecimal(num){

}

function convertBaseToDecimal(algarismo, base){
    switch (base) {
        case 2:
            
            break;
        case 8:

            break;
        default:
            break;
    }
}


//pegar o número
//extrar cada algarimos pra uma posição pra dentro do array
// usar função split('')
// percorrer o vetor ao contrário
// aplicar formula (a*bp) e cada resultado ir somando. 




function inverter(nome) {
    
    var arr  = nome.split('');
    

    for (var i = arr.length - 1; i >= 0; i--) {
      console.log(nome[i]);
    }
  }
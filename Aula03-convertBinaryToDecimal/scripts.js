// o usuário me informa um número e uma base... 
// transformar o número num array... divivdindo para digito para uma posicção 

function binaryToDecimal(numero){
    var posicao = arrNumero.length-1;
    var resultFormulaNoAlgarimo = 0;
    var resultFinal = 0;

    var arrNumero = numero.split('');
      
    for(i=0; i<arrNumero.length;i++){
        resultFormulaNoAlgarimo = (arrNumero[i] * (2 ** posicao));
        resultFinal = resultFinal + resultFormulaNoAlgarimo;
        posicao--;
    }
    return resultFinal;
}

function binaryToDecimal2(numero){
    var arrNumero = numero.split('');
    var posicao = 0;
    console.log(arrNumero);
    console.log(arrNumero.length + " " + typeof(numero) + typeof(arrNumero));

    var resultFormulaNoAlgarimo = 0;
    var resultFinal = 0;

    for(i=arrNumero.length - 1; i>=0;i--){
        console.log("sequencia: " + arrNumero[i]);

        //pra cada numero aplicar a*b**p e guardar este resultado 
        //e incrementar sempre nesse resultado até o final do array
        console.log("posicao: " + i);
        resultFormulaNoAlgarimo = (arrNumero[i] * (2 ** posicao));
        console.log(`a*b**2=${resultFormulaNoAlgarimo}`);
        resultFinal = resultFinal + resultFormulaNoAlgarimo;
        console.log(`resultFinal= ${resultFormulaNoAlgarimo}`);
        posicao++;
    }
    return resultFinal;
}
// //teste de mesa
// //pegar cada valor de váriavel e aplicar no laço
// numero = 10 tem que ser igual a 2.
// arrNumero.length - 1 = 1
// i   i>=0    algarimo    a*b**p        resultFormulaNoAlgarimo     resultFinal
// 1   1>=1     1           1*2**1                 2                       2
// 0   0>=0     0           0*2**0                 0                       2

// 2
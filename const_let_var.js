var numero1=1
let numero2=2


//CONST
/*
const é uma constante a variavel pode ser
modificada mas não reatribuida

*/

function mostraNumero1(){
    console.log(numero1)
}

function mostrarNumero3(){
    const numero3=5
    console.log(numero3)

    //a varivel numero3 não vai funcionar dentro deste bloco 
    /* Esse bloco é um escopo local*/
}
console.log(numero3)

//LET
/*
let ao contrario de const não trata a variavel como 
constante mas em semelhanca obedece a regra de escopo */

function mostraNumero2(){
    console.log(numero2)
    /*
    a variavel numero2 não vai funcionar dentro deste
    bloco ja que ela foi declarada fora deste bloco, ou seja,
    fora deste escopo local*/
}
var numero1=1
let numero2=2
const numero3=3

//CONST
/*
const é uma constante a variavel pode ser
modificada mas não reatribuida

*/

function mostrarNumero3(){
    console.log(numero3)

    //a varivel numero3 não vai funcionar dentro deste bloco 
    /* Esse bloco é um escopo local*/
}

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
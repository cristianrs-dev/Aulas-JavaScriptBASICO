//exibe um alerta na janela do navegador
alert(" ola mundo")

// prompt espera uma informacao do usuario
prompt("informe seu nome")

var nome

nome = prompt("informe seu nome")

//usando o alert para exibir uma mensagem contatenada a variavel nome
alert("ola "+nome+ "\n bom dia")


/*****************************
 * CUIDADO
 ****************************/

/*
    Os valores que o prompt pega sempre são do tipo string mas para resolver isso usamos o 
    parseInt
    parseFloat
 */
    // para numeros inteiros
    var numero=parseInt(prompt("informe um valor"))
    // para numeros quebrados com ponto flutuante
    var numero=parseFloat(prompt("informe um valor"))
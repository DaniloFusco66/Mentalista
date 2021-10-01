function Chutar(){
    console.log("função chutar")
}

//sortear numero aleatório secreto
let numeroSecreto  = 3

//pegar numero digitado e converter para inteiro
let chute = parseInt(document.querySelector("#valor").value)
console.log(numeroSecreto , chute)

/** 
 * operadores relacionais
 * <-->menor
 * >-->maior
 * <= -->menor ou igual
 * >= -->maior ou igual
 * == -->igual
 * != -->diferente
*/

   

//comparar o número digitado com o número aleatório secreto
if(numeroSecreto == chute){
//se tiver correto e os números forem iguais, mostrar a mensagem que a pessoa acertou
document.querySelector(".resultado").innerHTML = "Você Acertou!"}
else
{
//se tiver errado e os números forem diferentes, mostrar a mensagem que a pessoa errou
document.querySelector(".resultado").innerHTML = "Você errrrrrou!"
}

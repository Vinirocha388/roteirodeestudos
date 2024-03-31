//Exemplo1 Tópico1: Propõe a criação de um script que determina se um usuário pode dirigir com base na sua idade
let Idade = 18;
let Limite = 18;

if ( Idade >= Limite){ 
    console.log("Pode dirigir,pois é maior de idade:" + Idade + " anos");
}else{
    console.log("Não pode dirigir, pois é menor de idade:" + Idade + " anos");
}



//Exemplo2 Tópico2: Solicita a escrita de um programa JavaScript
// que utiliza um loop para exibir os números de 1 a 10 no console

for (let i = 1; i <= 10; i++) { 
    
    console.log(i);
}



//Tópico 4
//Exemplo Array1: Mostrar todos os elementos do array
// Criando um array de números e atribuindo à variável 'numeros'
let numeros = [1, 2, 3, 4, 5];

console.log("Elementos do array:");
// Iterando sobre cada elemento do array
numeros.forEach(numero => {
    // Imprimindo cada elemento do array no console
    console.log(numero);
});



//Exemplo Array2 pares:
let numeros = [6, 8, 10, 40, 33,45,87,11, 52, 84, 72, 91];
let pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        // Se o número for par, adiciona à lista de pares
        pares.push(numeros[i]);
    }

} 

pares.sort();

console.log("Números pares:", pares);
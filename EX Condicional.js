//! NIVEL BASICO
//? Exercicio 1 
// let idade = parseInt(prompt("Digite a sua idade: "));

// if (idade >= 18)
// {
//     console.log("Ele(a) é maior de idade!");
// }
// else
// {
//     console.log("Ele(a) é menor de idade!");
// }

//? Exercicio 2
// let numero = parseInt(prompt("Digite um numero: "));

// if ( numero <= 0)
// {
//     console.log("esse numero é negativo!");
// }

// else
// {
//     console.log("esse numero é positivo");
// }

//? Exercicio 3
// let nota = parseInt(prompt("Digite sua nota: "));

// if (nota >= 60) {
//     console.log("Aprovado(a)");
// }
// else {
// console.log("Reprovado(a)");
// }

//? Exercicio 4
// let numero = parseInt(prompt("Digite um numero"));

// if (numero >= 1)
// {
//     console.log("Esse numero e positivo");
// }
// else if(numero == 0)
// {
//     console.log("Esse numero e zero");
// }
// else
// {
//     console.log("Esse numero e negativo")
// }

//? Exercicio 5
// let idade = parseInt(prompt("Digite sua idade"))

// if (idade <= 12) {
//     console.log("Criança");
// }
// else if (idade <= 17) {
//     console.log("Adolecente");
// }
// else {
//     console.log("Adulto");
// }

//? Exercicio 6
// let numero = parseInt(prompt("Digite um numero"));

// if(numero % 2 == 0) 
// {
//     console.log("Esse numero e par");
// }
// else
// {
//     console.log("Esse numero e impar");
// }

//!  NIVEL INTERMEDIARIO

//? Exercicio 1
// let numero1 = parseFloat(prompt("Digite o primeiro numero"));
// let numero2 = parseFloat(prompt("Digite o segundo numero"));
// let operacao = prompt("Escreva uma operacao");
// let resultado;

// if(operacao == "soma")
// {
//    resultado = numero1 + numero2
//    console.log(resultado);
// }

// else if(operacao == "subtracao")
// {
//     resultado = numero1 - numero2
//     console.log(resultado);
// }

// else if(operacao == "divisao")
// {
//     resultado = numero1 / numero2;
//     console.log(resultado);
// }

// else if (operacao == "multiplicacao")
// {
//     resultado = numero1 * numero2;
//     console.log(resultado);
// }


// //? Exercicio 2
// let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
// let numero2 = parseFloat(prompt("Digite o segundo numero: "));
// let numero3 = parseFloat(prompt("Digite o terceiro numero: "));
// let maior;

// if(numero1 > numero2 && numero1 > numero3)
// {
//     maior = numero1;
// }

// else if( numero2 > numero1 && numero2 > numero3)
// {
//     maior = numero2;
// }
// else
// {
//     maior = numero3;
// }
// console.log(maior);


// //? Exercicio 3
// let valorCompra = parseFloat(prompt("Digite o valor da sua compra: "));

// let ValorDesconto = valorCompra/10;
// let precoFinal;

// if(valorCompra >= 100)
// {
//     precoFinal = valorCompra - ValorDesconto;
// }

// else
// {
//     precoFinal = valorCompra;
// }
// console.log(precoFinal);


//? Exercicio 4
// let usuario = prompt("Digite seu usuario: ");
// let senha = prompt("Digite sua senha: ");


// if(senha == "1234" && usuario == "admin")
// {
//     console.log("Login bem-sucedido");
// }

// else
// {
//     console.log("Acesso negado");
// }

//! Exercicio Avancado

// //? Exercicio 1
// let lado1 = parseFloat(prompt("Digite o primeiro lado: "));
// let lado2 = parseFloat(prompt("Digite o segundo lado: "));
// let lado3 = parseFloat(prompt("Digite o terceiro lado: "));


// if(lado1 == lado2 && lado1 == lado3)
// {
//     console.log("Triangulo Equilatero");
// }

// else if( lado1 == lado2 && lado1 !== lado3 || lado1 == lado3 && lado1 !== lado2)
// {
//     console.log("Triangulo isoceles");
// }
// else
// {
//     console.log("Triangulo escaleno")
// }

//? Exercicio 2
// let nota = parseInt(prompt("Digite sua nota"));

// if(nota < 60)
// {
//     console.log("F");
// }
// else if(nota <= 69)
// {
//     console.log("D")
// }
// else if(nota <= 79)
// {
//     console.log("C");
// }
// else if(nota <= 89)
// {
//     console.log("B")
// }
// else if(nota >= 90)
// {
//     console.log("A");
// }

//? Exercicio 3
// let peso = parseFloat(prompt("Digite seu peso:"));
// let altura = parseFloat(prompt("Digite sua altura"));

// let imc = peso / (altura * altura)

// if (imc <= 18.5) {
//     console.log("Magreza");
// }
// else if (imc <= 24.9) {
//     console.log("Normal");
// }

// else if (imc <= 29.9) {
//     console.log("Sobrepeso");
// }

// else {
//     console.log("Obesidade")
// }

//? Exercicio 4
// let ano = parseInt(prompt("Digite um ano: "))

// if(ano % 4 == 0)
// {
//     console.log("Esse ano e bissexto")
// }
// else{
//     console.log("Esse ano nao e bissexto")
// }

//! FORMA MAIS COMPLICADA POREM SIMPLIFICADA

let ano = prompt("Digite o ano:");

ano = parseInt(ano);
let resultado;

((!Boolean(ano % 4) && Boolean(ano % 100)) || !Boolean(ano % 400))
    ? resultado = "E bissexto"
    : resultado = "Nao e bissexto";
console.log("O ano" + ano + resultado);
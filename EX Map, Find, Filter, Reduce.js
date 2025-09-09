//! FILTER

//? EXERCICIO 1
// const notas = [4, 7, 9, 3, 10, 5]
// let maioresSete = notas.filter(nota => nota >= 7)
// console.log(maioresSete);

//? EXERCICIO 2
// const palavras = ["sol", "mar", "computador", "lua", "código"];

// let palavrasGrandes = palavras.filter(palavra => palavra.length > 4)
// console.log(palavrasGrandes);

//? EXERCICIO 3
// const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

// let nomeComC = animais.filter( c => c.startsWith("c"));
// console.log(nomeComC);

//! FIND

//? EXERCICIO 1
// const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];
// let primeiroNomeB = filmes.find(b => b.startsWith("B"));
// console.log(primeiroNomeB);

//? EXERCICIO 2
// const numeros = [2, 4, 6, 9, 12, 15];
// let primeiroImpar = numeros.find(impar => impar %2 === 1)
// console.log(primeiroImpar);

//? EXERCICIO 3
// const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];

// let maiorOuIgualSete = alunos.find( nota => nota => 7)
// console.log(maiorOuIgualSete);

//! MAP

//? EXERICIO 1
// const temperaturas = [20, 25, 30, 15];
// let fahrenheit = temperaturas.map( temperatura => temperatura * 1.8 + 32)
// console.log(fahrenheit);

//? EXERCICIO 2
// const produtos = ["camisa", "calça", "sapato"];
// let maisculo = produtos.map( produto => "Produto: " + produto.toUpperCase())
// console.log(maisculo);

//? EXERICIO 3
// const numeros = [1, 2, 3, 4];
// let quadrado = numeros.map( x => x**2)
// console.log(quadrado)

//! REDUCE

//?EXERCICIO 1
// const valores = [100, 200, 50, 150];
// let soma = valores.reduce((acumulador, numero) => acumulador + numero, 0)
// console.log(soma);

//? EXERCICIO 2
// const palavras2 = ["JS", "é", "muito", "legal"];
// const frase = palavras2.reduce((acumulador, palavraAtual) => `${ acumulador } ${ palavraAtual }`);
// console.log(frase);

//? EXERCICIO 3
// const notas = [1, 2, 3, 4, 5]
// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
// console.log(media);

//! DESAFIOS (misturando funcoes)

//?EXERCICIO 1
// const livros = [
//     { titulo: "Dom Casmurro", paginas: 300 },
//     { titulo: "O Hobbit", paginas: 295 },
//     { titulo: "A Revolução dos Bichos", paginas: 112 }
//   ];

//   let maioresQue200 = livros.filter(pagina => pagina.paginas > 200)
//   console.log(maioresQue200);

//   let TitulosLivros = livros.map(livros => livros.titulo)
//   console.log(TitulosLivros);

//   const somaPaginasLivros = livros.reduce((acumulador, soma) => acumulador + soma.paginas, 0);
//   console.log(somaPaginasLivros);

//? EXERCICIO 2
const carrinho = [
    { produto: "Notebook", preco: 2500 },
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
  ];
  const listaDeProdutos = carrinho.map(item => `Produto: ${item.produto} - R$ ${item.preco}`);
  console.log(listaDeProdutos);
  

  let valorCompra = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0)
  console.log(valorCompra);

  let produtoMouse = carrinho.find(mouse => mouse.produto === "Mouse")
  console.log(produtoMouse);
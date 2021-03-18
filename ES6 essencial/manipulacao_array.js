// MANIPULAÇÃO DE ARRAY
	//criação de array
const array = [1,2,4];
const array2 = new Array("Rafael","Julia","Fernanda");
const array3 = Array.of(1,2,4);
const numberAndStrings = Array.of(1,2,4,6,"Clóvis","Texto"); // Pode ter vários típo definidos

const arrayPositions = Array(3);
const personList = Array("Amanda"."Flávio");

	//Array.from
		//Cria uma nova instãncia de array a partir de um parâmetro array-like ou iterable object
const divs = document.querySelectoAll('div'); //objet é um NodeList
const array4 = Array.from(divs);

	//push - intesir elementos no final de um array e retorna o tamanho da lista
const frutas = ['mamao', 'maça'];
frutas.push('ameixa'); // vai retornar 3
console.log(frutas);
	
	//pop - remove o último elemento de um array e retorna o elemento removido	
frutas.pop(); // remove a ameixa

	//unshift - adicionar no início do array e retorna o tamanho do novo array
frutas.unshitf('laranja'); //retorna 3 e com laranja no início do array

	//shitf - remove no início
frutas.shift(); //remove laranja do array e retorna laranja

	//concat - Concatena um ou mais array e retorna um novo array
const bebidas = ["refrigerante","água","cerveja"];
const alimentos = frutas.concat(bebidas); // não muda os arrays utilizados no merge, faz umn novo array
console.log(alimentos);
frutas.forEach((fruta,index) => console.log(index,fruta)); // imprime o indice começando em zero e a fruta

	//slice - retorna um nov array "fatiando" o array de acordo com início e fim
const array = [1,2,3,5,6];
array.slice(0,2); //pega a posicao zero e 1w
array.slice(2); //pega a partir da 2 -> 3,5,6
array.slice(-1); //6

	//splice - Altera adicionando novos elementos enquanto remove elementos antigos
array.splice(2) //  a partir do 2 ele remove, vai sobrar [1,2]
array.splice(0,0,'first'); // na posicao zero, remove zero e adiciono 'first'































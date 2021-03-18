// SYMBOLs E ITERATORS 
	//symbols
	// maneira de gerar um identificar único que não pode ser adivinhado e nem descrito
	// não pode ser utilizado invocando new
	// um Symbol nunca é igual ao outro
	// Podem ser usados para gerar propriedades privadas

const uniqueId = Symbol();

console.log(uniqueId); // Symbol()

const uniqueId = Symbol('Hello_World'); // esse valor só serve para debug
const uniqueId2 = Symbol('Hello_World');
console.log(uniqueId === unidequeId2); // false

const obj = {
	[uniqueId]: 'Hello_World'

};

console.log(obj); // só será acessível por quem tiver esse Symbol

Object.keys(obj); // não vai retornar, mas não chega a ser uma propriedade privada
Object.getOwnPropertySymbols(obj); // consegue obter as propriedades de symbol

	// propriedades Well Know Symbols
	Symbol.iterator; // adicionar meta propriedades nesse objeto
	Symbol.split;
	Symbol.toStringTag;
	Symbol.toPrimitive;
	Symbol.asyncIterator;

const obj = {
	[Symbol.iterator]() {

	}
}

	// fazendo um novo array e iterador vai gerar um interface que vai ser responsável
	// pela iteração do  array
const arr = [ 1 , 2 , 3, 4];

const it = arr[Symbol.iterator]();


console.log(it.next()); // false
console.log(it.next()); // false
console.log(it.next()); // false
console.log(it.next()); // false
console.log(it.next()); // true e value: undefined -> quando terminar de percorrer o array

	//percorrendo através da interface e pegando os valores
while (true) {
	let { value , done } = it.next();
	console.log(value);
	if (done) {
		break;
	}
} // 1 , 2 , 3 ,4

	//equivalente
for (let value of arr) {
	console.log(value);
}

	// Dados que possuem iteradorres

const str = 'Rafael De Luca';

for (let value of str) {
	console.log(value);
} // R a f a e l D e ...



	// construindo uma função iterado em umojbeto
	// iteradores são um interface para fazer iterações

const arr = [ 1 , 2 , 3, 4];

console.log(arr[Symbol.iterator]().next()); // valeu: 1 , done: false // ainda não acabou a iteração	

const obj = {
	values : [1 , 2 , 3 , 4],
	[Symbol.iterator]() {
		let id = 0;
		return {
			next: () => {
				i++;
				return {
					value: this.value[i -1],
					done: i > this.values.length
				};
			}
		}

	}
};

const it = obj[Symbol.iterator]();
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // 4 , done : false
console.log(it.next()); // undefined , done: true


	// fazendo um iteração sobre o objeto
for (let value of obj) {
	console.log(value);
} // 1 2 3 4



















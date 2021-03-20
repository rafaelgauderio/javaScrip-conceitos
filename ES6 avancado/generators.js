// GENERATORS
	// São funções com pausa, pausam e retornam valores através dessa interface de iteração
	// Pode ser utilizado para construir iteradores
	// passando * antes o método vira um GENERATOR

function hello() {
	console.log('Hello');
	console.log('From');
	console.log('Function');
}

hello(); // Hello \n From \n Function

		// usando GENERATORS
		//yield palavra reservada para fazer pausas
function hello() {
	console.log('Hello');
	yield 1;
	console.log('From');
	yield 2;
	console.log('Function');
}

const it = hello();

console.log(it.next()); // value 1, done: false
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

	// outra maneira com valores
function hello() {
	console.log('Hello');
	yield 1;
	console.log('From');
	const value = yield 2;

	console.log(value);
}

console.log(it.next()); // value 1, done: false
console.log(it.next());
console.log(it.next('Outside!')); // Outside - retorna o valor exterior informado

	// pegar range de números infinitos
function* naturalNumbers() {
	çet number = 0;
	while (true) {
		yield number;
		number++;
	}
}

const it = naturalNumbers;

console.log(it.next()); //1
console.log(it.next()); //2
console.log(it.next()); //3
console.log(it.next()); //4

	// GENERATORS - colocando o * antes
	// Podemos utilizar generators para construir objetos iteráveis?
	// Sim, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.
const obj = {
	values : [1 , 2 , 3 , 4],
	*[Symbol.iterator]() {
		for (var i =0; i < this.values.length; i++) {
			yield this.values[i];
		}
	}
};

for (let value of obj) {
	console.log(value);
} // 1 2 3 4


















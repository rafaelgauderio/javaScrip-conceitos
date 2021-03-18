//-> ORIENTAÇÃO A OBJETOS
	// HERANÇA
		// Baseada em protótipos
			//-> prototype = variável que armazena as definições do objeto
			// __proto__
			// constructor = baseado nele é criado o prototype


'use strict';
const myText = "Hello prototype";
myText.split('');

//seria o mesmo que o abaixo, função construtora chamada String

const myText = String("Hello prototype");
console.log(myText.__proto__.split);
console.log(String.prototype.split);
console.log(myText.__proto__.split===String.prototype.split); // true // ))proto__ aponta para o prototype de String
console.log(myText.constructor === String()); // true;

__proto__ -> prototype -> constructor


function Animal(qtdPatas) {
	this.qtdPatas = 4;
	this.movimentar = function() {}
}

function Cachorro(morde) {
	Animal.call(this, 4);

	this.morde = false;
	this.latir = function() {
		console.log('Au! au!');
	}
}

//Declarando usando prototyte

function Animal () {}

Animal.prototyte.qtdPatas = 0;
Animal.prototyte.movimentar = function() {}

function Cachorro(morde) {
	this.qtdPatas = 4;
	this.morde = moder;
}

Cachorro.prototype =Object.create(Animal);
Cachorro.prototype.latir = function() {
	console.log('Au! au!')
}


const cachorro = new Animal();
const baset = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(baset) // vai immprimir o número de patas e se morde : false
console.log(pitbull) 

console.log(Aninal.constructor);
console.log(cachorro.qtdPatas);
console.log(cachorro.__proto__ === Animal.prototype); // true
console.log(Animal.__proto__ === Function.prototype); // true
console.log(cachorro instanceof Animal); // true
console.log(cachooro instanceof Function); //false

new Rafael();

// 1- Um novo objeto é criado, herdando Rafael.prototype
// 2- A função construtora rafael é chamada com os argumentos espeficicados e com o this vinculado
		// ao novo objeto criado
// 3- Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será
		// retornado o objeto criado no passo 1.


function Pesssoa(name) {
	this.name;
}

const p = new Pessoa('Rafael');

function Pesssoa(name) {
	this.name;

	return {
		name: 'João'
	};
}

const p2 = new Pessoa('Claudia');

console.log(p2) // vai retornar João como explicitado na função e não Claudia


//-> CLASSES

	// ES6
	// simplificação da herança de protótipos
	// palavra chave class
 class Animal {
 	constructor(qtdPatas) {
 		this.qtdPatas = 4;
 	}
 }

 class Cachorro extends Aninal {
 	constructor(morde) {
 		super(4);
 		this.morde = 4;
 	}
 }

 const pug = new Cachorro(false);

 console.log(pug);

 // Modificadores de Acesso
 	// Ainda não tem suporte no browser
 	// privado / público

 	// # é o modificador de acesso, detarmina de um variável é privada

 class Person {
 	#name = '';
 	constructor(initialName) {
 		this.#name = initialName;
 	}

 	setName(name) {
 		this.#name = name;
 	}

 	getName() {
 		return this.#name;
 	}
 }
const p = new Person();

p.setName('Rafael');
p.getName(); // Rafael

	//Encapsulamento
		// Serve para ocultar detalhes do funcionamento interno


	//Static
		//Permite acessar métodos e atributos sem instanciar

class Person {
	static walk() {
		console.log('walking...');
	}
}

console.log(Person.walk()); //walking


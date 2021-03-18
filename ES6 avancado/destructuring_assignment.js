// DESTRUCTURING ASSIGMENT
	// muito comum pegar parte da um variável e em outra variável
	// utilizado na definição de variáveis, lista de argumentos de uma função
	// O destructuring pode ser usado em nested objects (objetos aninhados).


var arr = ['Apple', 'Banana', 'Orange',['Tomate']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

	// agora usando DESTRUCTURING ASSIGMENT
		//destroi o primeiro array e cria um novo

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange',['tomato']];

console.log(apple,apple2); // apple apple

console.log(tomato2)/; //tomato

	//undefinded
var [apple2, banana2, orange2] = ['Apple', 'Banana'];

console.log(orange2); // undefinded

	// com objetos
	// vai destruir esse objeto, encontrar uma propriedade nele, pega o seu valor e atribuir a uma
			// variável name;
var arr = {'maça', 'laranja'};
var obj = {
	name: 'Rafael'
};

var name = obj.name;

var {name} =  obj;

var{name: name2} = obj;

var{maca2} = arr;

console.log(name); // rafael
console.log(name2); // rafael
console.log(maca2); // maça, laranja

	// objeto dentro do objeto

var obj = {
	name: 'Rafael',
	props: {
		age: 35,
		colors: ['black','white']
	}
};

var age = obj.props.age; // sem DESTRUCTURING
var color1 = obj.props.colors[0]; // sem DESTRUCTURING

var {
	props: { age : age2 }  // usando DESTRUCTURING
} = obj;

console.log(age); 

	// DESTRUCTURING de multi níveis

var {
	props: { age : age2,
	colors: [color1, color2]
}  // usando DESTRUCTURING
} = obj;

console.log(color1); // black

	// com functions e arrays como argumento

functions sum(arr) {
	return arr[0] + arr[1];
}

console.log(sum([5,10])); //15


	// outra maneira
functions sum(arr) {
	var a = arr[0];
	var b = arr[1];
	return a + b;
}

console.log(sum([5,10])); //15

	// outra maneira
functions sum([a ,b ] = [] ) {
	return a + b;
}

console.log(sum([20,10])); //30


	// DESTRUCTURING com default values

functions sum([a ,b ] = [5,5]) {
	return a + b;
}

console.log(sum()); //10 mesmo sem passar parâmetros

 // É possível combinar default function arguments com destructuring?
 // Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.




	
	

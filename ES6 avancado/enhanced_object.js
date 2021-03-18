//ENHANCED OBJECT LITERALS

var obj = {
	propriedades : "Método de Rafael de Luca"
};


// atribuindo o método a uma variável
var2 prop1 = 'Métodos novos';

var obj = {
	pro1 : pro1

};

console.log(obj);

// short end com EC6 para não repetir a palavra
var obj = {
	pro1
};

console.log(obj);

// funciona também com funções para construir métodos
functions method1() {
	console.log('Method called');

}

var obj = {
	method1
};

console.log(obj);

// outra forma
var obj = {
	sum : function sum(a,b) {
		return a +b;
	}
};

console.log(obj.sum(15,10)); // 25


// outra forma mais curta
var obj = {
	sum(a,b) {
		return a +b;
	}
};


//versão mais longa
var propName = 'test';
var obj = {};
obj[propName + 'sobrenome'] = 'Rafael';
console.log(obj);

// versão mais curta com EC6
		//podemos omitir o valor de uma propriedade ou método ao definir um objeto literal = quando o
		// valor vier de uma variável com o mesmo nome da propriedade ou método.

var propName = 'test';
var obj = {
	[propName + 'sobrenome']: 'Rafael';
};

console.log(obj);


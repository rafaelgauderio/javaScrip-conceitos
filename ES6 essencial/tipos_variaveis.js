//-> TIPOS E VARIÁVEIS

	//-> Possui 6 tipos primitivos: string, number, boolean, null, undefined, symbol
			-> undefined: tipo de variável que existe, mas não foi setado um valor para ela ainda.
			-> symbol: permite criar valores únicos

	//-> Object, Function (pode ser chamado), Array (objeto que tem relação com os itens)

	//-> String
			const textSize = 'texto'; -- apenas criando a variável
			const textSize = 'texto'.length;
			const splitedText = 'texto'split('x');
			const replacedText = 'texto'.replace('text','novo_text');
			const lastChar = 'texto'.slice(-1);
			const allWithoutLastChar ='texto'.slice(0,-1); -- passa o começo e o fim
			const secondToEnd = 'texto'.slice(1);
			const twoCharsBeforeFirstPos = 'Texto'.substr(0,2); -- passa o começo e a quantidade de caracteres

	//-> number
			//-> tudo é number, não diferencia float, int, double
			const myNumber = 15.45;
			const numberAsString = myNummber.toString();
			const fixedTwoDecimals = myNumber.toFixed(2);
			parsetFloat('14,22'); -- converte string em float;
			parseInt(13.20); -- transforma string em int;
			console.log(typeof parseInt(14.20)); -- diz qual é o tipo da variável

	//-> null 
			const nullVariable = null;
			console.log(typeof nullVariable);
			console.log(nullVariable);

	//-> undefined;
			let undefinedVariable
			console.log('tipo da variavel:', typeof undefinedVariable);

	//-> boolean
			const isActive = true;
			const isAuthenticated = false;

	//-> object
		let user {
			name: 'Rafael De Luca'
		};

		console.log(user);

	//alterando a propriedade de um objeto
	user.name = 'Joao da Silva';
	user['name'] = 'Rafael Lerias';

	const pro = 'name';
	user[prop] = 'Novo nome 3';

	function getProp(prop) {
		return user[prop]
	}

	// Criando uma propriedade
	user.lastName = 'de Souza';

	//deletando um propriedade

	delete user.name;
	delete user.lastName;
	console.log(user);

	//Recupera as chaves do objeto
	console.log(Object.keys(user));

	//Recupera os valores do objeto
	Object.values(user);

	//Retorna um array de arrays [nome_propriedade, valor_propriedade]
	Object.entries(user);

	// Mergear proproedade de objetos
	Object.assign(user, {fullName: 'Juliana da Silva'});
	Object.assign({}, user , {age: 35});

	//freeze para não poder mudar o objeto
	const newObj = { novo: 'bar'};
	Object.freeze(newObj);

	//seal não permite nem criar e nem deletar, mas pode trocar o valor de uma propriedade que já existe
	const pessoa = {name : 'Rafael'};
	Object.seal(pessoa);

	pessoa.name 'Rafael De Luca'; //vai permitir
	delete person.name; //não permite deletar
	pessoa.age = 38; // não permite criar novo propriedade se objeto setado com seal

	//-> symbol
		//-> permite criar um cara único
		//-> permite atributos privados dentro de objetos ou classe
		//-> Mas javaScript não tem modificar de acesso
		//-> as proproedade não sobrescritas
		//-> Utilizado para criar ENUM

	const simbolo1 = Symbol('nome');
	const simbolo2 = Symbol('nome');

	console.log(simbolo1==simbolo2); //vai far false, pois simbolos são ÚNICOS
























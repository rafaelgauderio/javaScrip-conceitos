// REST e SPREAD OPERATOR
		
	//fazer um soma sem saber a quantidade de parametros que vai receber
	// arguments é uma palavra reservada, prototype dele é um objeto
	// rest = pega todos os parametros de uma função a transforma em um array
	function sum(a+b) {
		var value =0;

		for (var i=0; i < arguments.length; i++) {
			value += arguments[i];
		}
		return a + b;
	}

	console.log(sum(5,6,9,5,9,12));

	// REST OPERATOR ...


	function sum(...args) {		
		return args.reduce((acc, value) => acc +value);		
	}

	console.log(sum(5,6,9,5,9,12));

	// lista de arguments é inexistente em caso de arrow function
	const sum = () => {
		console.log(arguments)
	};

	// para resolver esse erro usamos rest operator para manipular a lista de argumentos
	const sum = (...rest) => {
		console.log(arguments)
	};
	console.log(sum(5,6,9,5,9,12));

	// rest operator pode ser usado para pegar parâmetros restantes de uma função
	const sum = (a,b,...rest) => {
		console.log(a,b,rest)
	};
	console.log(sum(5,6,9,5,9,12));

	// spread operator ...
		// passar os argumentos da função soma para a função de multiplicação
		// pega todos os itens do array e transforma em parâmetros para a função
		// quebra os itens e repassa para algum lugar
	const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

	const sum (...rest) => {
		return multiply(...rest);
	}

	console.log(sum(5,5,6,2,4);
		// strings e arrays são naturalmente iteráveis
		// spread operator pode ser utilizado em strings, arrays, literal objects e objetos iteráveis
	console str = 'Rafael De Luca';

	function logArgs(...args) {
		console.log(args);
	}

	logArgs(...str); // vai quebrar a string em caracteres e jogar para uma lista

		// outra maneira
	function logArgs() {
		console.log(arguments);
	}
	logArgs(...str); //// vai quebrar a string em caracteres e jogar para uma lista

		// com array
	const arr = [1,2,3,4];
	function logArgs() {
		console.log(arguments);
	}

	logArgs(...str); //// cada item do array vai virar um parâmetro da função

		// Antes da existência do spread operator, qual era uma das formas utilizadas
					// para enviar os items de lista como argumentos para uma função?
		// Utilizando o método de função apply.



		// construindo arrays com spread operator
	const arr2 = arr.concat([5,6,7]);
	const arr2 = [...arr, 5, 6, 7];
	console.log(arr2); // vai concater os 2 arrays na ordem crescente

	
	const arr3 = [...arr2, ...arr, 4 , 3 , 9]; // gerando um novo array com os anteriores
	const arrClone = [...arr]; // gerando um clone simples

		//objetos literais =  com spread só podem ser utilizados para construir novos objetos
	const obj = {
		test: 123
	};

	const obj2 = {
		...obj,
		test2: 'Hello World'
	};
	console.log(obj2);

		// objetos literais não são iteraveis
	const arr = [...obj]; // vai dar um mensagem de erro, pois objetos literais não são iteráveis

		// valor que escreve por último vai prevalecer (ordem é relevante)
		// A ordem define quais valores das chaves com o mesmo nome irão prevalecer.
	const obj3 = {
		...obj,
		test: 456
	};
	console.log(obj3); //456

	const obj4 = {
		test: 456,
		...obj
		
	};
	console.log(obj4); //123

		// spread operator muito usado para gerar clones de outros objetos
		// como usa ponteiros se alterar no segundo, vai alterar o primeiro também
		
		const obj = {
			test: 123
		};

		const obj2 = { ...obj }; //gerando um clone
		obj2.test = 456;
		console.log(obj); //123


		// shalow clone = clone raso = Se tiver propriedades que sejam outros objetos
		const obj = {
			test: 123,
			subObj: {
				test: 123
			}
		};

		const obj2 = {...obj, subObj: {...obj.subObj } };

		obj2.subObj.test= 456;

		console.log(obj); //123 //não teve suas propriedades alteradas







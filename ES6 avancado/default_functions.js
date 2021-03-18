//DEFAULT FUNCTIONS ARGUMENTS
	function multiply(a,b) {
		a * b;
	}

	console.log(multiply(5,6)); // função retorna undefined se esquecer o segundo parâmetro


	function multiply(a,b) {
		b || b 1; //verifica se o foi atribuido o segundo valor, senão atribui 1, mas falha ao tentar multiplicar por 0
		a * b;
	}

	console.log(multiply(5,0));

	// Resolvendo o problema com uma condição ternária
	function multiply(a,b) {
		b = typeof b === 'undefined' ? 1 : b; 
		a * b;
	}

	//Default Function Arguments : valor padrão quando não passar um valor
		// fica menos verboso e funciona
		function multiply(a=1,b=1) {
		a * b;
	}

	// referenciando outros parâmetros, ordem de argumentos é relevante, não posso referenciar
		// um valor antes da sua inicialização
		function multiply(a,b=a) {
		a * b;
	}

	// lazy evaluation
		// A característica que permite podermos utilizar funções para definir 
		//valores de um argumento e a mesma só será invocada quando o argumento for indefinido.


	function randomNumber() {
		return Math.random() * 10;
	}

	function multiply(a, b = randomNumber()) {
		return a + b;
	}

	console.log(multiply(15));




	
//FUNCOES AVANCADAS ES6
	//functions
	function logar(value) {
		console.log(value);
	}

	logar(valor_qualquer);

	// funcoes anonimas tem que ser atribuidas a uma variavel, dae pode omitir o nome da função
	// funções são de primeira classe (podem ser passadas como parâmetros para outras funções)

	var log = function (value) {
		console.log(value);
	};

	//Arrow functions = são funções anônimas, pode ser omitido a palavra function e return
	var sum = (a,b) => a + b;
	console.log(sum(15,20));

	//return de maneira explícita
	var sum = (a,b) => {
		var x =15;
		if (a>b) {
			return a+b;
		}
	}

	//se existir apenas 1 argumento, posso omitir os parenteses
	var sum a => a = 15;
	sum(90);

	//destructuring, hash operator tem que ter os parentes e default values tem que ter os parênteses
	// objetos literais
	var createObj = () => ({ teste: 123});
	console.log(createObj());

	//funcao construtora
	function Car() {
		this.foo = 'bar';
	}
	console.log(new Car());

	// Se usar arrow function não pode com função construtora. Vai dar um erro
	var Car = () => {
		this.foo = 'bar';		
	};
	console.log(new Car());

	// Hosting: O Hoisting ocorre quando seu código Javascript 
				//é compilado : Basicamente, todas as declarações de variáveis são 
				//movidas para o topo de seu escopo local (se foram declaradas dentro de uma função)
				// ou para o topo do escopo global (se foram declaradas fora de uma função).
	// com arrow function isso não acontece

	var object = {
		showContext: function showContext() {
			//método referenciando ao próprio objeto
			// funções no javaScript tem o contexto de invocação
			console.log(this);
		},
		log: function log(value) {
			console.log(value)
		}
	};

	object.showContext();

	var object = {
		showContext: function showContext() {
			this.log('teste');
			setTimeout(function() {
				console.log(this);
			}.bind(this),
			1000
			);			
		},
		log: function log(value) {
			console.log(value)
		}
	};

	object.showContext();

	// arrow function
	var obj = {
		showContext: function showContext() {

			setTimeout(() => {
				this.log('after 1000ms');
			},1000);
		},
		log: function log(value);
		console.log(value);
	}
};


object.showContext();

 









	


// PROMISSES E FETCH
		//Definição: Executar algo depois de uma tarefa Assincrona ter sido executada
		//Pode acabar ficando muito verboso fazer vários tratamentos de erros
		// É possível encadear um promisse na outra
		// código acontece de maneira sequencial, mas pode fazer ocorrer em paralelo
		// Invocando o seu construtor e passando uma função ao mesmo. 
							// Ex: new Promise((resolve, reject) => {}).



	//Promisses: Podem ter 3 status
				// Pending
				// Fulfilled
				// Rejected

				const doSomethingPromisse = () =>
				new Promise((resolved, reject) => {
					throw new Error ('something with wrong');
					setTimeout(function() {
		//did something
		resolve('First data');
	}, 1000);
				});


				const doOtherthingPromisse = () =>
				new Promise((resolved, reject) => {
					setTimeout(function() {
		//did otherthing
		resolve('Second data');
	}, 1000);
				});

console.log(doSomethingPromisse); //Pending

doSomethingPromisse.then(data => console.log(data)
.catch(error => console.log(error)); // Fulfilled

doSomethingPromisse
.then(data => {
	console.log(data.split(''));
	return doOtherThingPromisse;
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('Ops',error)); // Fulfilled

	// executando em paralelo e não de forma sequencial - usar Promisse.all
	Promise.all([doSomethingPromisse(). doOtherThingPromise()]).then(data => {
		console.log(data[0].split(''));
		console.log(data[1].split(''));
	});

	// race, a que for resolvida primeira, vai executar primeiro
	// Criar uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.
	Promise.race([doSomethingPromisse(). doOtherThingPromise()]).then(data => {
		console.log(data)
	});

	//	Utilizar callbacks ao desenvolver JavaScript assíncrono pode trazer problemas 
				//com a legibilidade e manutenção do código, pois podemos cair no chamado "callback hell".

	// declarando em duas funções
	function doSometring(callback) {
		setTimeout(function() {
		//did sometring
		callback('First data');
	}, 1000);
	}

	function doSometring(callback) {
		setTimeout(function() {
		//did other sometring
		callback('Second data');
	}, 1000);
	}

	// executar as duas de maneira sequencial

	function doAll() {
		try {
			doSomething(function(data) {
				var processedData = data.split('');
				try {
					doOtherThing(function(data2) {
						var processedData2 = data2.split('');
						try {
							setTimout(function() {
								console.log(processedData, processedData2);
							},1000);
						} catch (erro) {
						// handle error
					}
				});
				} catch (erro) {
						// handle error
					}
				});
		}catch (erro) {
						// handle error
					}
				}




				doAll();


//Fetch, Async/Await e EventEmitter
	//Fetch: tem o intuito de fazer REQUISIÇÕES
	//Fetch aceita segundo parâmetro, por defaul vai ser um GET();
	// async não costuma ser utilizado com await
	// Await aguarda que a Promisse seja resolvida

	fetch('/data.json').then(responseStream => {
		console.log(responseStream);
	});

	// obtendo os dados do json
	fetch('/data.json').then(responseStream => {
		responseStream.json().then(data => {
			console.log(data);
		});
	});

	//erro de REDE vai ser pego no catch
	fetch('/data.json')
	.then(responseStream => {
		if (responseStream.status ==== 200) {
			return responseStream.json();
		} else {
			throw new Error('Request error');
		}
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log('Erro: ', err);
	});

	// ES7 - Async / Await
		// Uma maneira de criar promisses de maneira mais simples e enxuta
		// inspirada em linguagens como C e C#
		// Por colocar a palavra asunc já retorna a função de forma resolvida
		const asyncTimer = () => 
		new Promisse((resolve, reject) => {
			setTimeout(() => {
				resolve(12345);
			},1000);
		});

		const simpleFunc = async () => {
			const data = await asyncTimer();
			return 12345;
		};

		console.log(simpleFunc()
			.then(data => {
				console.log(data);
			})
			.catch(err =>) {
				console.log(err);
			});


	// EventEmitter
		// Necessário importar o módulo EVENTS
		// pode ser INSTANCIADA ou EXTENDIDA

		const EventEmitter = require('events');

		class Users extends EventEmitter {
			userLogged() {	
				this.emit('User logged', { user: 'Rafael De luca'});
			}
		}


		const emitter = new EventEmitter();

		emitter.on('User logged', data => {
			console.log(data);
		});

		emitter.emit('User logged', { user: 'Rafael De Luca'});

		users.userLogged({user: 'Rafael De Luca'});
		users.userLogged({user: 'Adriano Gabiru'});


		//EventTarget -> api de event Listeners
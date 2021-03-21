// TRATAMENTO DE ERROS
	// não podemos chamar uma constante antes da sua inicialização
	// no java quando estoura um erro, é interrompido toda a execução do código que está abaixo
	// erro é uma classe e pode ser instanciada
	// observar o console para achar erros e fazer o debugging
	// clicar na linha onde está o erro
	// objetivo da aba network dentro das ferramentas para desenvolvedor do Chrome?
			//Trazer informações sobre as requisições executadas no navegador.

	// função pretty print do navegador Chrome
			// Remove a minificação de um arquivo para possibilitar um debugging melhor.

	// Vantagens de estender a classe de erro padrão do JavaScript?
			// A possibilidade de adicionar métodos, propriedades e comportamentos ao erro.

																	// vai para aba SOURCES e diz o arquivo e linha onde está o erro
	// SOURCE MAP = arquivo que vai mostrar as posições do arquivo minificado com relação ao arquivo original
			//formas: 1. colocar o BREAK POINT na linha antes do erro
			//				2. debugger = equivalente a incluir um break point

		// outra maneira é utilizar o console.log()
					console.log('Black text');
					console.warn('Yellow text with alert');
					console.error('Red error text');

					console.trace(); // info sobre onde o código foi executado

														// agrupar mensagens e depois finalizar com groupEnd
					console.group('My group');
					console.log('Info inside group');
					console.log('More info inside group');
					console.groupEnd('My groud');


					console.time('Log time');
					setTimeout(() => {
						console.timeEnd('Log time');
					}, 2000);

					console.table(['Rafael De Luca','Nova informação']); // coloca objetos em formato tabela
					console.assert( 1 === 1 , 'Ops'); // se a condição for false vai dar um erro
					console.log('%c styled log', 'color: blue; font-size: 40px'); // estilizar o console



	class CustomError extends Error {
		constructor({message, data}) {
			super(message);
			this.data = data;
		}
	}

		try {

	const name = 'Rafael De luca';		
	console.log(name);

	const myError = new CustomError({
		message: 'Custom message on custom error',
		data: {
			type: 'Server error'
		}
	});

	throw myError; // pode ser disparado o erro e mensgens customizadas
		
	} catch (err) {
		console.log('error: ', err);
		console.log(err.data);

} finally { // no finally o código é executado havendo erro ou não
						//Garantir e deixar explícito que um bloco de código será executado em caso de erro ou não.
	console.log('keep going...');
}
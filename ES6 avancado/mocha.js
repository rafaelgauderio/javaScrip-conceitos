// Moca, Chai, Sinon
	// Moca: ferramenta para executar os testes
			// segue os padrões do pdd. Pode ser utilizado pelo bronser e no node
			// parâmetro done garante que o nosso teste vai aguardar seja uma PROMISE ou um ASYNC AWAIT
			// limete maximo de timeOut é 2000 ms
			// mocha recomenda não utilizar arrow function
			// método only para executar apenas um teste específico dentro do script
			// status: passing, pending, failing
			// método it.skip é uma mandeira de pular o teste sem precisar ter que comentar
			// hooks: forma de executar o código e evitar repetição.

			npm init -y
			npm i --save-dev mocha
			emacs package.json

			mkdir test
			emacs test/math.spec.js

			const assert = require('assert');
			const Math = require('.../src/math.js');


			describe('Math class', function() {
					//hooks
					beforeEach(function() {
						value = 0;
					});
					it('Sum two numbers', function(done) { // it - descreve um comportamento esperado
						const math = new Math();		
						this.timeout(4000);		

						value = 5;	
						
						//assert.equal(math.sum(5,15), 20);
						match.sum(value ,5, value => {
							assert.equal(value,10);
							done();
						});
						
					});

					it.only ('Multiply two numbers', function() {
						const math = new Math();
						assert.equal(math.multiply(value,5), 0);
					}); 
				});


			class Math {
				sum(a,b,callcack) {
					setTimeout(() => {
						callcack(a + b);
					}, 3000);
				}	
				multiply (a,b) {
					
					return a * b;
				}			
			}

			module.exports = Math;


				// testando o script de teste
				npm run test


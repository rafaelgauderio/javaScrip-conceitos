//CHAI 
	// uma excelente biblioteca
	// faz algo parecido que o assert, mas de maneira mais descritiva
	// possível utilizar para validar objetos
	// Ao escrever asserções utilizando chai, uma das maiores vantagens é a 
		//sua escrita muito mais expressiva do comportamento esperado.

	npm -i --sabe-dev chai


	const assert = require('assert');
	const Math = require('.../src/math.js');
	const expect = require('chai').expect;


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
							expect(value).to.equal(10);
							done();
						});
						
					});

					it.only ('Multiply two numbers', function() {
						const math = new Math();
						const obj = {
							name : 'Rafael De Luca'
						};
						expect(obj).to.have.property('name').equal('Rafael De Luca');
						expect(math.multiply(value,5)).to.equal(0);
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
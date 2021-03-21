// SINOS
	// permiter mochar funções e verificar se as mesmas foram invocadas
	// pode ser utiliza em funções já construidas.
		// metodo spy
			// Criar uma função ou interceptar a execução de uma outra função
					// a fim de obter dados sobre como a mesma foi invocada.
	
	npm i --save-dev sinon //adcionar a dependência a depois importar

	const assert = require('assert');
	const Math = require('.../src/math.js');
	const expect = require('chai').expect;
	const sinon = require('sinon');


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
						const obj2 = {
							name : 'Rafael De Luca'
						};

						expect(obj).to.deep.equal(obj2);
						expect(obj).to.have.property('name').equal('Rafael De Luca');
						expect(math.multiply(value,5)).to.equal(0);
					}); 
					it.only('Calls res with sum and index values', function() {
						const resq = {};
						const res = {
							load: sinon.spy()
						};
						const math = new Math();
						math.printSum (req, res, 5, 5);
						// utilizar espioes para ver se função foi invocada de maneira correta
						//expect(res.load.calledOnce).to.be.true;
						expect(res.load.args[0][1]).to.equal.(10);

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
		printSum(req, res,a ,b) {
			res.load('index', a +b);
		}			
	}

	module.exports = Math;


				// testando o script de teste
				npm run test
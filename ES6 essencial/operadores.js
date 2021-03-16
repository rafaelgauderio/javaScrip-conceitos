//-> Operador Binário
	// operando1 operador operando2
		1 			+		2

//-> Operador Unário
	// operando1 operador ou operando1 operador
	x++
	++x

//-> Operadores
		//-> Aritméticos
				//-> Módulo
				12 % 5 // retorna 2
				//-> Incremento
				const a = ++2 //3  já recebe  valor incrementado
				const b = 2++ //2
				//->Negação(-) e Adição(+)
				-3
				+"3" // 3
				+true // 1
				+false // 0
				-true // -1
				//-> Exponenciação
				2 ** 3 // 8
				10 ** -1 //0.1

		//-> Atribuição
			x=y
			x = x + y //oi
			x += y
			x -=y
			x *=y
			x /=y
			// Atribuição de Resto
			x = x % y // ou
			x%=y

		//-> Comparação
			"3" == var1
			3 == '3'
			var2 =! "3"
			//Extritamento igual ou estritamente diferente
			// Operando iguais e do mesmo tipo
			3 ===var1
			var1 !== "3"
			3 !== '3'

			var2 > var1
			"12" > 2
			var2 >= var1
			var2 <=5

		//-> Condicional
			//Ternário
			condicao ? valor1 : valor2
			true ? 'foo' : 'bar' // 'foo'
			false ? 'foo' : 'bar' // 'bar'

		//-> Lógicos
			// AND lógico &&
			var a1 = true && true; // retorna true
			var a2 = true && false; // false

			//Ou lógico ||
			var o1 = true || true; // true
			var o2 = true || false; // true
			var o3 = false || false; //false

			// Negação do lógico, vai negando o valor informado
			var n1 = !true // false

			// conversão para booleano
			!!expressao

		//-> Spread
			// Consegue iterar cada iten do objeto e passar para a função
			var partes = ['ombro', 'joelhos'];
			var musica = ['cabeca',...partes, 'e', 'pés'];

			var musica = ['cabeca', 'ombro', 'joelhos','e','pés'];

			function fn (x,y,z) {}
			var args = [0, 1, 2];
			fn(...args);

		//-> deletar algo
			delete algo;

		//-> Determinar o tipo;
			typeof algo;

		// instanceof
		objeto instanceof tipoObjeto
		var dia = new Data(2020,12,20);
		if (dia instanceof Date) {
			//code here
		}
		


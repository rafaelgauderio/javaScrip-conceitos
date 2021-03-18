//ITERAR ELEMENTOS EM UM ARRAY
	// forEach -> iteração de cada item dentro de um array
	const array = [1,2,3,4,6];

	array.forEach((value, index) => {
		console.log(`${index}: ${value}`);
	});
	// posicao : valor	0:1	1:2	2:3	3:4	:4:6

	// map: retorna um novo array, de mesmo tamanho, iterando cada item de um array
	const frutas = ['mamao', 'maça','laranja','melância'];

	frutas.map((fruta,index) => `${index} - ${fruta}`); // index concatenado com o valor da fruta
			// 0 - mamao, 1 - maça ...

	//flat : retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com
			// a profunidade especificada(depth)

	const array = [1,2 [3,4]];
	array.flat(); // [1,2,3,4]; recursivamente gera um novo array na mesma profunidade
	const idade = [20,35, [36,56],[79,90]];
	idade.flat(2); // desce 2 niveis e retorna tudo em um único array [20,35,36,56,79,90];

	//flatMap : Retorna um novo array assim como a função map e executa um flat de profundidade 1
	const array = [1,2 3,4];
	array.flatMap(value => [value *2]); // [2,4,6,8]

	//keys : Retorna um Array Iterator que contém as chaves para cada elemento do array
	const array = [1,2 3,4]; 
	const ArrayIterator = array.keys();

	//values : Retorna um Array iterator que contém os valores para cada elemento do array
	const ArrayIterator = array.values();
	ArrayIterator.next();// {valeu: 1 done:false} o false quer dizer que ainda não percorreu todo o array.

	const frutas = ['mamao', 'maça','laranja','melância'];
	const frutasIterator = frutas.entries();
	frutasIterator.next() // [0,mamao]
	frutasIterator.next() // [1,maça]

	//find : retorna o primeiro item de umarray que satisfaz uma condicão
	const array = [1,2 3,4]; 
	const fisrtGreaterThanTwo = array.find(value => value >2); // retorna 3
	console.log(fisrtGreaterThanTwo);

	//findIndex : retorna o índice do primeiro item de uma array que satisfaz a condição
	const fisrtGreaterThanTwo = array.findIndex(value => value >2); // retorna 2 que é o íncide do valor 3

	//filter : Retorna um novo array com todos os elementos que satisfazem a condição
	const allGreaterThanTwo = array.filter(value => value >2);
	console.log(allGreaterThanTwo) // [3,4]

	//indexOf : Retorna o primeiro índice em que um elemento pode ser encontrado no array
	const array = [1,2,3,3,4,5,3];
	const firstIndexOfItem = array.indexOf(3);
	console.log(firstIndexOfItem); // imprime 2, índice da primeira vez que encontra o valor 3

	//lastindexOf : Retorna o último índice em que um elemento pode ser encontrado no array
	const array = [1,2,3,3,4,5,3];
	const lastIndexOfItem = array.lastindexOf(3);
	console.log(lastIndexOfItem); // imprime 6, índice da última vez que encontra o valor 3

	// includes : Retorna um boolean verificando se determinado elemento existe no array
	array.includes(1); //true
	array.includes(9); //false

	// some : retorna um booleano verfificando se pelo menos um item de um array satisfaz a condição
	array.some(value => value %2 ===0); // true, porque tem pelo menos 1 item par no array

	const students = [
		{name: 'Rafael', grade: 9},
		{name: 'Laura', grade: 4},
		{name: 'Clara', grade: 5}		
	];

	students.some(student => aluno.grade >=7); // true
	students.find(student => aluno.grade >=7);  // rafael
	students.findIndexOf(student => aluno.grade >=7);  // 0 = indice no valor rafael

	//every : Retorna se todos os itens de um array satisfazem uma condição
	students.every(student => aluno.grade >=7);  // false, nem todo mundo tirou mais que 7

	// sort : ordena elementode um array
	students.sort((current,next) => current.grade - next.grade);

	// reverse : inverte o sentido do array
	array.reverse();

	//TRANSFORMAR ARRAY EM OUTRO TIPO DE DADO
		//join : junta todo os elementos de um array, separados por um delimitador e retorna uma string
		const array = [1,2 3,4]; 
		array.join('-'); //1-2-3-4

		//reduce : retorna um novo tipo de dados iterando cada posição de um array
		array.reduce((total, value) => total +=value,0); // 10









	

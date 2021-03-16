//for
	const array = ['Rafael', 'Julia','Ana'];

	for (let index =0 ; index < array.lenght; index++) {
		const element = array[index];
		console.log(`Element #${index}: ${element}.`);
	}

//while
	var n=0;
	var y=0;

	while (n <15) {
		n++;
		y+=n;
	}

	console.log(x);

//do...while		executa primeiro e depois verificar
	let i=0;
	do {
		i+=1;
		console.log(i);
	} while (i<15);

//for...in
let  arr = [3, 5 ,20];
arr.name = "rafael";

for (let i in arr) {
	console.log(i); // var acrescentar a propriedade name
}

for (let i of arr) {
	console.log(i); // vai execuar apenas para as propriedade numeradas do array
}

//continue -> capacidade de pular uma iteração
	// Nesse exemplo só vai imprimir os números impares, vai pular quando satisfaze a condição abaixo

conts array2 = [1,2,3,4,5,6];

for (let index=0; index < array2.lenght; index++) {
	const element = array[index];

	if (element %2 ===0) {
		continue;
	}
	console.log(element);
}


//break

var inde =0;
	while(true) {
		index++;
		if (index > 2) {
			break;
		}
		console.log(index);
	}


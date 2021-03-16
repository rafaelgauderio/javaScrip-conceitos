//-> condicionais

const array = [0,1,2,3,4,6,8,15];

array.forEach(item => {
	if (item % 2 ===0) {
		console.log(`O número ${item} é par.`);
	} else {
		console.log(`O número ${item} é impar.`);	
	}
});

// else if 	para ficar encadendo if

//case

const fruit = 'banana';

switch (fruit) {
	case 'banana' :
	console.log('R$ 3,00 / Kg');
	break
	case 'maça' :
	case 'pera' :
	console.log('R$ 4,00 / Kg');
	break;
	default:
	console.log('Produto não encontrado');
	break;	
}
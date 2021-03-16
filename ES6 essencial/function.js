//funções

function fn() {

	return 'Code here';

}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {

	// varias expressões
	return 	'Code here';
}

// funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros

const logValue = valor => console.log(valor);
const logFnResult = FnParam => console.log(FnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec => fnParam => allowed => {

	if (allowed) {
		FnParam();
	}

}

//controlFnExec como função que retornam funções

function controlFnExec(fnParam) {
	return fucntion(allowed) {
		if (allowed) {
			funParam;
		}
	}
}
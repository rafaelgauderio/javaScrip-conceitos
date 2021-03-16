function soma(n1, n2) {
	
	return n1 + n2;

}

function setReplace(frase, nome,novo_nome) {

	return frase.replace(nome,novo_nome)
}



alert(soma(10,25));

alert(setReplace("Novo colaborador chamado João","João","Rafael"));


var validar = false;
function validaIdade(idade) {
	if (idade>=18) {
		validar=true;
	}
	else {
		validar=false;
	}
	return validar;

}

var idade = prompt("Informe a sua idade");

validaIdade(idade);


var frase = "";
function mensagemDeMaioridade() {
	if (validar==true) {

		frase = "Usuario maior de idade";
	}
	else {
		frase = "Usurio menor de idade";
	}
	return frase;
}

alert(mensagemDeMaioridade());



function botaoClicou() {

	alert("Bem-vindo a minha home-page!");


}

function agradecer() {

	document.getElementById("agradecimento").innerHTML = "<b>OBRIGADO PELA VISITA</b>";
}

function redirecionar() {

	window.open("https://google.com.br");
	window.location.href = "https://delucahigiene.com.br"; //vai abrir na mesma janela
}

function trocar(elemento) {

	//document.getElementById("movimentoDomouse")
	elemento.innerHTML = "OBRIGADO PELA MOVIMENTACAO";
}

function voltar(elemento) {

	//document.getElementById("movimentoDomouse").innerHTML = "PASSE O MOUSE AQUI";
	elemento.innerHTML = "PASSE O MOUSE AQUI";
}


function load() {

	alert("Pagina carregada");
}

function funcaoChange(elemento) {
	alert(elemento.value);
}


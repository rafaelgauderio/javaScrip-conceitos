var nome = "Rafael de Luca";
var idade_inicial = 35;
var idade_complemento = 3;
var idade = idade_inicial + idade_complemento;
var frase = "Edenílson é melhor que Messi";


// comentário



console.log(nome);
console.log(idade);
console.log(frase.replace("Edenílson","Adriano Gabiru"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

alert("Mensagem de erro em JavaScript");
alert("Bem vindo " + nome +", idade: " + idade + " anos!");
alert(frase.replace("melhor","pior"));

//array

var lista = ["Barcelona","Arsenal","Bahia"];
lista.push("Internacional");
lista.pop(); // remove o ultimo elemento da lista
console.log(lista[0]);
alert("O segundo elemento da lista: " + lista[1]);  //imprime o segundo elemento da lista
alert("O tamanho da lista: " + lista.length);

alert("Lista reversa: " + lista.reverse());

alert(lista.toString());
alert(lista.toString()[0]); //como converteu para String imprime apena a primeira letras
alert(lista.join(" | "));


// dicionário

var pessoa = [{nome:"Rafael", idade:35} , {nome:"Juliana", idade: 23}]
alert(pessoa[0].nome + ", idade: " + pessoa[0].idade);
alert(pessoa[1].nome);
alert(pessoa[1].idade);


//condicionais

var idade = prompt("Informe a sua idade!");

if (idade >= 18) {

	alert("Maior de idade, você pode acessar o conteúdo");

}
else {
	alert("Menor de idade");
	alert("CONTEUDO IMPROPRIO PARA SUA IDADE");
};

// repetidores

var count = 0;

while (count <=30) {

	console.log(count);
	count++;
};


// repetição com o for
for (var contador=10; contador <=20 ; contador ++) {
	alert(contador);
};

//datas

var date = new Date();

alert(date);
alert("Mês: "  + date.getMonth()+1);
alert("Dia: " + date.getDay());
alert("Hora: " +date.getHours());
alert("Minutos: " + date.getMinutes());







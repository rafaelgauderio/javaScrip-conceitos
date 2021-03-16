const user = ['Rafael', 'Claudia','Pedro'];

const gender = {
	MAN: Symbol('M'),
	WOMAN: Symbol('W')
}

const persons = [
{
	name: 'Rafael',
	age: 35,
	gender: gender.MAN
},
{
	name:'Claudia',
	age: 28,
	gender: gender.WOMAN
}, 
{
	name: 'Pedro',
	age: 19,
	gender: gender.MAN
}
];

//Verificar a quantodade de intens
console.log(persons.length);

//Verificar se é array
console.log(Array.isArray(persons));

//iterar os intens
persons.forEach(person) => {
	console.log(`Nome: ${person.name}`);
});

//Filtrando uma lista
const onlyMens = persons.filter(person => person.gender === gender.MAN);
console.log(onlyMens);

//Transformar um array em um inteiro (ou outro tipo)

const totalAge = persons.reduce((age, person) => {
	age += person.age;
	return age;
},0);


// Juntando várias operações
const totalEvenAges = persons
					.filter(person => person.age % 2 === 0)
					.reduce((age,person) => {
						age += person.age;
						return age;
					}, 0);




















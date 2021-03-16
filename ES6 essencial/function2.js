( () => {
	this.name = 'arrow function';
	const getNameArrowFn = () => this.name;

	function getName() {
		return this.name;
	}

	const user {
		name : 'Rafael De Luca',
		getNameArrowFn : getNameArrowFn,
		getName : getName
	}

	console.log(user.getNameArrowFn());
	console.log(user.getName());

})();


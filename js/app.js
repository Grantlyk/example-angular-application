angular.module('angularExample', [])
	
.controller('mainController', function(People){
	var vm = this;

	vm.message = "Two way databinding!";

	vm.personData = {};

	vm.people = People.list();

	// vm.people = [
	// 	{ name: "James", age: "21" },
	// 	{ name: "David", age: "25" },
	// 	{ name: "Andrew", age: "19" }
	// ];

	vm.addPerson = function(){
		People.addPerson(vm.personData);
		vm.personData = {};
	};

})

.factory('People', function(){
	var people = [];
	return {
		list: function(){
			return people;
		},
		addPerson: function(personData){
			people.push({
				name: personData.name,
				age: personData.age
			});
		}
	};
});
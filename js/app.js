angular.module('angularExample', [])
	
.controller('mainController', function(){
	var vm = this;

	vm.message = "Hello World!";

	vm.people = [
		{ name: "James", age: "21" },
		{ name: "David", age: "25" },
		{ name: "Andrew", age: "19" }
	];

});
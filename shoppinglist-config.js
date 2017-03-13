var app = angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {		//could start with app.config if line 3 had ; at the end, but not best practice
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html"
		}).otherwise({
			redirectTo: "/home"
		})
		.when("/home", {
			templateUrl: "views/home.html",
			controller: "HomeController"		//this way of naming is convention
		})
		.when("/shopping-list", {
			templateUrl: "views/shopping-list.html",
			controller: "ShoppingListController",
			ControllerAs: "shoplist"		//this is creating an alias so we can type less when calling ShoppingListController
		}).otherwise({
			redirectTo: "/home"
		});
	}]);

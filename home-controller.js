angular.module("myApp")

.controller("HomeController", ["$scope", "ShoppingListItems", function($scope, ShoppingListItems) {
	var home = $scope;
	home.items = ShoppingListItems.getList();
}]);
angular.module("myApp")

// $scope is an agular object
.controller("ShoppingListController", ["$scope", "ShoppingListItems", function($scope, ShoppingListItems) {	//second part (array) is dependencies
	var shoplist = $scope;
	shoplist.items = ShoppingListItems.getList();
	// TODO: create a new item
	shoplist.addItem = function(newItem) {
	// add new item
		shoplist.items.push({
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
		});

	// clear the form
		shoplist.newItem.name = "";
		shoplist.newItem.qty = "";
		shoplist.newItem.priority = "";
	};

	// delete a single item
	shoplist.removeItem = function(item) {
		var removedItem = shoplist.items.indexOf(item);
		shoplist.items.splice(removedItem, 1);
	};

	// delete the entire list
	shoplist.removeAll = function() {
		shoplist.items = [];
	};
}]);
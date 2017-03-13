var app=angular.module("myApp",["ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/home.html"}).otherwise({redirectTo:"/home"}).when("/home",{templateUrl:"views/home.html",controller:"HomeController"}).when("/shopping-list",{templateUrl:"views/shopping-list.html",controller:"ShoppingListController",ControllerAs:"shoplist"}).otherwise({redirectTo:"/home"})}]);angular.module("myApp").factory("ShoppingListItems",function(){function e(){return t}var t=[];return{getList:e}}),angular.module("myApp").controller("ShoppingListController",["$scope","ShoppingListItems",function(e,t){var o=e;o.items=t.getList(),o.addItem=function(e){o.items.push({name:o.newItem.name,qty:o.newItem.qty,priority:o.newItem.priority}),o.newItem.name="",o.newItem.qty="",o.newItem.priority=""},o.removeItem=function(e){var t=o.items.indexOf(e);o.items.splice(t,1)},o.removeAll=function(){o.items=[]}}]),angular.module("myApp").controller("HomeController",["$scope","ShoppingListItems",function(e,t){var o=e;o.items=t.getList()}]);
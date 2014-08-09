var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/'           , {controller: listController , templateUrl: 'list.html'}).
	when('/edit/:name' , {controller: editController , templateUrl: 'form.html'}).
	when('/new'        , {controller: newController  , templateUrl: 'form.html'}).
	otherwise({redirectTo:'/'});
});

app.run(function($rootScope){
	$rootScope.fruits = ["banana", "apple", "orange"];
});

app.controller('listController', ['$scope', function($scope){

}]);

app.controller('editController', ['$scope', function($scope, $location, $routeParams){
	$scope.title      = "Edit fruit";
	$scope.fruit      = $routeParams.name;
	$scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

	$scope.save = function(){
		$scope.fruits[$scope.fruitIndex] = $scope.fruit;
		$location.path('/');
	}
}]);

app.controller('newController', ['$scope', function($scope, $location){
	$scope.title = "New fruit";
	$scope.fruit = "";

	$scope.save = function(){
		$scope.fruits.push($scope.fruit);
 		$location.path('/');
 	}
}]);
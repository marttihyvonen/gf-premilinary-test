var app = angular.module('app', ['ngRoute','angularUtils.directives.dirPagination','oitozero.ngSweetAlert']);
var root = "/gamerefinery/";


app.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : root + '/app/templates/users.html',
		controller : 'UsersController'
	}).otherwise({
		controller : 'NotFoundController',
		templateUrl : root + '/app/templates/not_found.html',
	});

});



app.controller('UsersController', function($scope, $sce, $location, SweetAlert) {
	
	$scope.users = generate_users(100);
	
	$scope.sortType     = 'name'; // set the default sort type
  	$scope.sortReverse  = false;
  	
  	$scope.gender = "";
  	$scope.age = "";
  	
  	$scope.addUser = function(name,gender,age) {
  		$scope.users[$scope.users.length] = {"name": $scope.name, "gender": $scope.gender, "age": $scope.age};
  		SweetAlert.swal({title: "New user added"});
  	};
  	
  	$scope.deleteUser = function(user) {
  		SweetAlert.swal({
		   title: "Remove person",
		   text: "Are you sure you want to remove this entry?",
		   showCancelButton: true,
		   confirmButtonColor: "#ee853c",
		   confirmButtonText: "Yes",
		   closeOnConfirm: false}, 
		function(isConfirm) { 
		    if (isConfirm) {
			    var index = $scope.users.indexOf(user);
		  		console.log(index);
		  		if (index > -1) {
		    		$scope.users.splice(index, 1);
				}
				
			   SweetAlert.swal("Person removed.");
			}
		});
  		
  	};
  	
  	$scope.editUser = function(user) {
  		user.edit_mode = !user.edit_mode;
  	};
  	
  	$scope.sortUsersBy = function(field) {
  		$scope.sortReverse = !$scope.sortReverse;
  		$scope.users.sort(function(a,b) {
  			if (a[field] < b[field]) return -1;
  			if (a[field] > b[field]) return 1;
  			return 0;
  		});
  		
  		if($scope.sortReverse) $scope.users.reverse();
  	};
  	
  	
  	$scope.showModal = false;
	$scope.buttonClicked = "";
	$scope.toggleModal = function(btnClicked) {
		$scope.buttonClicked = btnClicked;
		$scope.showModal = !$scope.showModal;
	};
	
	$scope.hideModal = function() {
		$scope.showModal = false;
	};
  	
  	
  	$scope.age_range = get_age_range();
  	
});


app.controller('NotFoundController', function($scope, $sce, $location) {
	
});



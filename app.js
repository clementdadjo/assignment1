(function(){

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.zinput = "";
	$scope.checkIt = function(){
				arrayOfInput = $scope.zinput.split(",");
				arrayLength = arrayOfInput.length;
				if($scope.zinput == "" || $scope.zinput == '""' ){
					$scope.zholder= "Please enter data first";}
				else if (arrayLength>0 && arrayLength<=3) {
					$scope.zholder= "Enjoy!";	}
				else if (arrayLength>3) {
					$scope.zholder= "Too much!";}

	};
}

})();

'use strict';

angular.module('app').directive('appCompany', [function(){
	return{
		restrict: 'A',
		replact: true,
		templateUrl: 'view/template/company.html'
	}
}])
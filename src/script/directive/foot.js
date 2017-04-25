'use strict';

angular.module('app').directive('appFoot', [function(){
	return{
		restrict: 'A',
		replact: true,
		templateUrl: 'view/template/foot.html'
	}
}])
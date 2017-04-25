'use strict'

angular.module('app', ['ui.router']);


'use strict';

// 对路由进行配置
// 第一种之间传入一个函数来配置，称为隐式配置，不推荐
// 第二种使用显式方式进行声明；
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('main', {
		url: '/main',
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	}).state('position',{
		url: '/position/:id',
		templateUrl: 'view/position.html',
		controller: 'positionCtrl'
	});
	$urlRouterProvider.otherwise('main');
}])
"use strict";

angular.module('app').controller('mainCtrl', ['$scope', function($scope){
	$scope.list = [{
		id: '1',
		name: '销售',
		imgSrc: 'image/company-3.png',
		companyName: '千度',
		city: '上海',
		industry: '互联网',
		time: '2016-06-01 11:05'
	},{
		id: '2',
		name: 'WEB前端',
		imgSrc: 'image/company-2.png',
		companyName: '慕课网',
		city: '北京',
		industry: '互联网',
		time: '2016-06-01 15:30'
	}]
}]);
'use strict';

angular.module('app').controller('positionCtrl', ['$scope', function($scope){

}])
'use strict';

angular.module('app').directive('appCompany', [function(){
	return{
		restrict: 'A',
		replact: true,
		templateUrl: 'view/template/company.html'
	}
}])
'use strict';

angular.module('app').directive('appFoot', [function(){
	return{
		restrict: 'A',
		replact: true,
		templateUrl: 'view/template/foot.html'
	}
}])
'use strict';

// 使用directive自定义指令
angular.module('app').directive('appHead', [function() {
	// 返回一个对象
	return {
		// 约束
		restrict: 'A',
		// 替换原本的标签
		replace: true,
		// 写入模版
		templateUrl: 'view/template/head.html'
	}
}])
'use strict'

angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict: 'A',
		replact: true,
		templateUrl: 'view/template/headBar.html',
		scope: {
			// 再了解一下指令的 scope 的用法
			// 为什么使用@，忘了，好像是position页面使用appHeader指令是text传递的参数可以是常量，就使用的@
			text: "@"
		},
		link: function(scope){
			scope.back=function(){
				window.history.back();
			}
		}
	}
}])
'use strict'

angular.module('app').directive('appPositionInfo', [function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionInfo.html',
		scope: {
			isActive: '='
		},
		link: function(scope){
			scope.imagePath = scope.isActive?'image/star-active.png':'image/star.png'
		}
	}
}])
'use strict';

angular.module("app").directive("appPositionList", [function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionList.html'
	}
}])
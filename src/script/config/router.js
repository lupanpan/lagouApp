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
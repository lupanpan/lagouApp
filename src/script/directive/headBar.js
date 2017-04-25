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
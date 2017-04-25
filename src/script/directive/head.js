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
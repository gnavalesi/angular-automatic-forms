/* global angular */

var scripts = document.getElementsByTagName("script"),
	src = scripts[scripts.length - 1].src;

function AutomaticFormDirectiveController($scope) {
	$scope.fields = [];
	$scope.object = $scope.ngObject || {};
	
	$scope.initFields = function() {
		for(var i = 0; i < $scope.ngModel.fields.length; i++) {
			var fieldModel = $scope.ngModel.fields[i];
			var field = {
				'id': fieldModel.id,
				'label': fieldModel.label || fieldModel.id,
				'required': fieldModel.required !== false,
				'disabled': fieldModel.disabled === true
			};

			if(typeof fieldModel.type === 'string') {
				if(fieldModel.type === 'text') {
					field.type = 'text';
				} else if(fieldModel.type === 'number') {
					field.type = 'number';
				} else if(fieldModel.type === 'checkbox') {
					field.type = 'checkbox';
				} else {
					throw new TypeError('Invalid field type ' + fieldModel.type);
				}
			} else if(typeof fieldModel.type === 'object') {
				if(fieldModel.type.name === 'select') {
					field.type = 'select';
					field.options = fieldModel.type.options;
				} else if(fieldModel.type.name === 'radio') {
					field.type = 'radio';
					field.options = fieldModel.type.options;
				} else if(fieldModel.type.name === 'checkbox') {
					field.type = 'checkbox';
					field.options = fieldModel.type.options;
				} else if(fieldModel.type.name === 'number') {
					field.type = 'number';
				} else if(fieldModel.type.name === 'image') {
					field.type = 'image';
					field.height = fieldModel.type.height;
					field.width = fieldModel.type.width;
				} else {
					throw new TypeError('Invalid field type ' + fieldModel.type.name);
				}
			} else {
				throw new TypeError('Invalid field type ' + typeof fieldModel.type);
			}

			$scope.fields.push(field);
		}
	};

	$scope.initFields();
}

function AutomaticFormDirective() {
	return {
		restrict: 'E',
		scope: {
			ngModel: '=',
			ngObject: '='
		},
		templateUrl: src.replace('.js', '.html'),
		controller: AutomaticFormDirectiveController
	};
}

var module = angular.module('automaticForm', []);

module.directive('automaticForm', AutomaticFormDirective);
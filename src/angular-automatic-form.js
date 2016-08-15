/* global angular, _ */

var scripts = document.getElementsByTagName("script"),
	src = scripts[scripts.length - 1].src;

function createField(fieldModel) {
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
			field.min = undefined || fieldModel.type.min;
			field.max = undefined || fieldModel.type.max;
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

	return field;
}

function createFields(fieldModels) {
	return _.flatten(_.map(fieldModels, function(fieldModel) {
		if(_.isArray(fieldModel)) {
			return createFields(fieldModel);
		} else {
			return createField(fieldModel);
		}
	}));
}

function AutomaticFormDirectiveController($scope, $q) {
	$scope.fields = createFields($scope.ngModel.fields);
	$scope.object = $scope.ngObject || {};

	$scope.inArray = function(field, value) {
		return _.contains($scope.object[field.id], value);
	};

	$scope.toggleFromArray = function(field, value) {
		if($scope.inArray(field, value)) {
			$scope.object[field.id] = _.reject($scope.object[field.id], function(val) {
				return val === value;
			});
		} else {
			$scope.object[field.id].push(value);
		}
	};

	$scope.submit = function() {
		var deferred = $q.defer();

		$scope.ngModel.onSave($scope.object, deferred);

		deferred.promise.then(function(result) {
			console.log('success', result);
		}).catch(function(error) {
			console.error('error', error);
		});
	};
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
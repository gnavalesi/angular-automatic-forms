// Begin: ExampleController
/* global app */

function ExampleController($scope) {
	$scope.formModel = {
		fields: [
			{
			'id': '_id',
			'label': 'ID',
			'type': 'text',
			'disabled': true
		}, {
			'id': 'index',
			'label': 'Index',
			'type': 'number',
			'disabled': true
		}, {
			'id': 'guid',
			'label': 'GUID',
			'type': 'text'
		}, {
			'id': 'isActive',
			'label': 'Active',
			'type': 'checkbox'
		}, {
			'id': 'balance',
			'label': 'Balance',
			'type': {
				'name': 'number'
			}
		}, {
			'id': 'picture',
			'label': 'Picture',
			'type': {
				'name': 'image',
				'width': 256,
				'height': 256
			}
		}, {
			'id': 'age',
			'label': 'Age',
			'type': {
				'name': 'number',
				'min': 0
			},
			'required': false
		}, {
			'id': 'eyeColor',
			'type': {
				'name': 'select',
				'options': {
					'blue': 'Blue',
					'brown': 'Brown',
					'green': 'Green',
					'black': 'Black'
				}
			}
		}, {
			'id': 'name',
			'label': 'Name',
			'type': 'text'
		}, {
			'id': 'gender',
			'type': {
				'name': 'radio',
				'options': {
					'male': 'Male',
					'female': 'Female',
					'other': 'Other'
				}
			}
		}, {
			'id': 'company',
			'label': 'Company',
			'type': 'text'
		}, {
			'id': 'email',
			'label': 'E-mail',
			'type': 'text'
		}
			/*, {
			'id': 'tags',
			'type': {
				'name': 'checkbox',
				'options': [
					'ex',
					'tempor',
					'occaecat',
					'reprehenderit',
					'est',
					'ut',
					'fugiat',
					'qwrad',
					'nvdfsg'
				]
			}
		}*/
		],
		onSave: function(object, promise) {
			promise.resolve(object);
		}
	};

	$scope.formObject = {
		"_id": "57ae7ef28414d9da64489108",
		"index": 0,
		"guid": "b1f21c49-9c30-4733-a01d-0c9835d16ede",
		"isActive": false,
		"balance": 1777.81,
		"picture": "http://placehold.it/256x256",
		"age": 38,
		"eyeColor": "blue",
		"name": "Berger Burns",
		"gender": "male",
		"company": "ENAUT",
		"email": "bergerburns@enaut.com",
		"phone": "+1 (921) 571-3085",
		"address": "627 Micieli Place, Jenkinsville, Wisconsin, 9268",
		"about": "Incididunt laboris mollit eu excepteur reprehenderit consectetur. Quis pariatur sint culpa enim officia nisi exercitation cillum non sit id tempor fugiat quis. Ea do adipisicing ad dolor dolor non mollit ut mollit. Ea elit do tempor mollit culpa quis laborum. Mollit non ex sint elit. Reprehenderit do officia veniam esse incididunt velit proident et pariatur deserunt nulla aliquip aliqua.\r\n",
		"registered": "2015-03-04T03:37:36 +03:00",
		"latitude": 70.014225,
		"longitude": -109.274475,
		"tags": [
			"ex",
			"tempor",
			"occaecat",
			"reprehenderit",
			"est",
			"ut",
			"fugiat"
		],
		"friends": [
			{
				"id": 0,
				"name": "Cervantes Lee"
			},
			{
				"id": 1,
				"name": "Elsie Velez"
			},
			{
				"id": 2,
				"name": "Deanne Mclaughlin"
			}
		],
		"greeting": "Hello, Berger Burns! You have 5 unread messages.",
		"favoriteFruit": "banana"
	};
}

app.controller('ExampleController', ['$scope', 'ExampleService', ExampleController]);

// End: ExampleController
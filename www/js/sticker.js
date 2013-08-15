var sticker = angular.module('sticker', []);
sticker.controller('trendingstickers', function($scope, socket) {
	var stickies = [];
		// Incoming
	socket.on('onStickyCreated', function(data) {
		$scope.notes.push(data);
	});
	//Outgoing Shit
	$scope.createNote = function() {
		var note = {
			id: new Date().getTime(),
			title: 'Placement',
			body: 'Placement',
			owner: 'Placement',
			likes: 5,
			clicks 5
		};

		$scope.notes.push(note);
		socket.emit('createSticker', note);
	};
});
sticker.factory('socket', function($rootScope){
var socket = io.connect();
	return {
		on: function(eventName, callback) {
			socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply(socket, args);
				});
			});
		},
		emit: function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					if(callback) {
						callback.apply(socket, args);
					}
				});
			});
		}
	};
});

sticker.directive('stickerDef', function(socket) { 
var link = function(scope, element, attrib) {
		//Init Code
			//element.css(...);
		};
			var controller = function($scope) {
			//Shit that comes in when it's updated!
			socket.on('onStickerUpdated', function(data) {
				
							
			});

			//Shit that goes out when it's updated!
			$scope.updateSticker = function(sticker) {
				socket.emit('updateSticker', sticker);
			};
		};

	return {
		restrict: 'A',
		link: linker,
		controller: controller,
		scope: {
			note: '=',
			ondelete: '&'
		}
	};
});

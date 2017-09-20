
//player controller

var socket = io.connect()//'http://localhost:9666')
// console.log("connection"+socket)
var questionTitle = ''
var question = ''
var answer = ''
var scoreWeight = ''
var results_from_mongo = [];

var log = function(x){console.log(x)}
log('entering appctrl')
function AppCtrl($scope){
	$scope.messages = []
	$scope.sendMessage = function() {
		console.log("message sent"+$scope.messageText)
		socket.emit('send', {message: $scope.messageText, username: username});
		$scope.messageText = "";
	}

	$scope.sendQuestion = function() {
		socket.emit('testThingy', { questionTitle: $scope.questionTitle, question: $scope.question, answer: $scope.answer, scoreweight: $scope.scoreweight, questiontype: $scope.questiontype })
	}
}

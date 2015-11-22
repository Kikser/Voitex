angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

})

    //.controller('jocoCtrl', function ($scope) { })
.controller('FaverCtrl', function ($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

})
.controller('activeCallCtrl', function ($scope) {
    $scope.callText = '';
    var commands = {
        '*val': function (val) {
            $scope.callText += "\n" + val;

            $scope.$apply();
        }
    };
    annyang.addCommands(commands);
    annyang.setLanguage('sr');
    //annyang.setLanguage('bg');
    annyang.debug();
    // Start listening. You can call this here, or attach this call to an event, button, etc.

    annyang.start();

    $scope.stopCall = function () {
        console.log("I don't listen");
        annyang.abort();
    }

    // Text to Speech
    $scope.TTS = {value: ''};
    console.log($scope.TTS.value);
    $scope.talk = function () {
        responsiveVoice.speak($scope.TTS.value, "UK English Female", { rate: 0.7 });
    }
});



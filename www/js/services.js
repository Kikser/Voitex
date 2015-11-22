angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    Phone: '+38970278896',
    face: 'img/ben.png',
    lastCall:'two days ago'
  }, {
    id: 1,
    name: 'Max Lynx',
    Phone: '+3816008896',
    face: 'img/max.png',
    lastCall:'5 min ago'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    Phone: '+380340033221',
    lastCall:'30 min ago',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    Phone: '+389756886669',
    lastCall:'an hour ago',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    Phone: '+3781100348',
    lastCall:'yesterday ago',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

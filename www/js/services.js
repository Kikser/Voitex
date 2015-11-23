angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
  //  id: 0,
  //  name: 'Ben Sparrow',
  //  Phone: '+38970278896',
  //  face: 'img/ben.png',
  //  lastCall: 'two days ago',
  //    mail: 'ben@gmail.com'
  //}, {
  //  id: 1,
  //  name: 'Max Lynx',
  //  Phone: '+3816008896',
  //  face: 'img/max.png',
  //  lastCall: '5 min ago',
  //  mail: 'm.lynx@gmail.com'
  //}, {
  //  id: 2,
  //  name: 'Adam Bradleyson',
  //  Phone: '+380340033221',
  //  lastCall:'30 min ago',
  //  face: 'img/adam.jpg',
  //  mail: 'bradleyson@gmail.com'
  //}, {
  //  id: 3,
  //  name: 'Perry Governor',
  //  Phone: '+389756886669',
  //  lastCall:'an hour ago',
  //  face: 'img/perry.png',
  //  mail: 'perry@gmail.com'
  //}, {
    id: 4,
    name: 'Mike Harrington',
    Phone: '+3781100348',
    lastCall:'yesterday',
    face: 'img/mike.png',
    mail: 'mike@gmail.com'
  }, {
      id: 5,
      name: 'Madi Sharma',
      Phone: '+3781100348',
      lastCall: 'soon',
      face: 'img/madi_sharma.png',
      mail: 'm.sharma@gmail.com'
  }, {
      id: 6,
      name: 'Mark Tutle',
      Phone: '+37213440348',
      lastCall: 'waiting for',
      face: 'img/mark.png',
      mail: 'mTutle@yahoo.com'
  }, {
      id: 7,
      name: 'Ljupka Mitrinovska',
      Phone: '+3781100348',
      lastCall: 'last week',
      face: 'img/ljupka.png',
      mail: 'lMitrinovska@hotmail.com'
  }, {
      id: 8,
      name: 'Damjan Mitev',
      Phone: '+3781100348',
      lastCall: 'yesterday',
      face: 'img/damjan.png',
      mail: 'damjan@gmail.com'
  }, {
      id: 9,
      name: 'Ivana Stankovic',
      Phone: '+3781100348',
      lastCall: 'yesterday ago',
      face: 'img/ivana.png',
      mail: 'stankovic.Iv@gmail.com'
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

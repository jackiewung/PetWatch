var Firebase = require('firebase');
var React = require('react-native');

var helpers = {
  getOwners() {
    console.log('inside getOwners');
    var url = 'https://watchpet.firebaseio.com/owners.json'
    return fetch(url).then(function(res) {
      var text = res.json()
      return text;
    });
  },

  getSitters() {
    var url = 'https://watchpet.firebaseio.com/sitters'
    return fetch(url).then((res) => 
      res.json() );
  }

};

module.exports = helpers;
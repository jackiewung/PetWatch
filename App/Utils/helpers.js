
var helpers = {
  getOwners() {
    var url = 'https://watchpet.firebaseio.com/owners.json'
    return fetch(url).then(function(res) {
      var text = res.json()
      return text;
    });
  },

  getSitters() {
    console.log('inside getSitters')
    var url = 'https://watchpet.firebaseio.com/sitters.json'
    return fetch(url).then(function(res) {
      var text = res.json()
      return text;
    });
  }

};

module.exports = helpers;
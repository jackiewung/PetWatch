var api = {

  postSitter(sitterData){
    var url = 'https://watchpet.firebaseio.com/sitters.json';
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(sitterData)
    }).then((res) => res.json());
  },

  postOwner(ownerData){
    var url = 'https://watchpet.firebaseio.com/owners.json';
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(ownerData)
    }).then((res) => res.json());
  }

};

module.exports = api;
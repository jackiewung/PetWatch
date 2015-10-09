var React = require('react-native');
var Separator = require('../../Utils/Separator');
var OwnerProfile = require('./OwnerProfile');

var { View, Text, Image, StyleSheet, TouchableHighlight, NavigatorIOS } = React;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingLeft: 15
  },

  petName: {
    color: '#000',
    fontSize: 20
  },

  petSpecies: {
    paddingTop: 3,
    color: '#666'
  },

  image: {
    height: 75,
    borderRadius: 37.5,
    width: 75,
    paddingLeft: 15
  },

  paddingText: {
    flexDirection: 'column',
    margin: 16
  },

  arrow: {
    height:30,
    width:30,
    margin: 20,
    position: 'absolute',
    right: 30
  }
});

var OwnerList = React.createClass({
  goToProfile: function(event) {
    console.log(this.props.navigatorProp, ' in sitterlist')
    console.log(this.props.userData, 'is event')
    this.props.navigatorProp.push({
      title: (this.props.userData.firstname + ' ' + this.props.userData.lastname),
      component: OwnerProfile,
      passProps: {userData: this.props.userData}
    })
  },

  render: function(){
    return (
      <View>
        <TouchableHighlight onPress={this.goToProfile}
            underlayColor='transparent'>
          <View style={styles.container}>
            <Image source={{uri: this.props.userData.pets.picURL}} style={styles.image}/>
            
          <View style={styles.paddingText}> 
            <Text style={styles.petName}>{this.props.userData.pets.name}</Text>
            <Text style={styles.petSpecies}>{this.props.userData.pets.species}</Text>
          </View>
          <Image source={require('image!arrowRight')} style={styles.arrow}/>
          </View>
        </TouchableHighlight>
        <Separator/>
      </View>
    )
  }
});


module.exports = OwnerList;
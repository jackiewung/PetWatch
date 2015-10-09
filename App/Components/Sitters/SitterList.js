var React = require('react-native');
var Separator = require('../../Utils/Separator');
var SitterProfile = require('./SitterProfile');

var { View, Text, Image, StyleSheet, NavigatorIOS, TouchableHighlight, navigator } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
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

var SitterList = React.createClass({

  goToProfile: function(event) {
    console.log(this.props.navigatorProp, ' in sitterlist')
    console.log(this.props.userData, 'is event')
    this.props.navigatorProp.push({
      title: (this.props.userData.firstname + ' ' + this.props.userData.lastname),
      component: SitterProfile,
      passProps: {userData: this.props.userData}
    })
  },

  render: function(){
    return (
      <View>
        <TouchableHighlight onPress={this.goToProfile}
            underlayColor='transparent'>
          <View style={styles.container}>
              <Image source={{uri: this.props.userData.picURL}} style={styles.image}/>
          
            <View style={styles.paddingText}> 
              <Text style={styles.petName}>{this.props.userData.firstname}</Text>
              <Text style={styles.petSpecies}>{this.props.userData.preference}</Text>
            </View>
            <Image source={require('image!arrowRight')} style={styles.arrow}/>
          </View>
        </TouchableHighlight>
         <Separator/>
      </View>
    )
  }
});

module.exports = SitterList;
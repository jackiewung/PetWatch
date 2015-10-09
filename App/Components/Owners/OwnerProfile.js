var React = require('react-native');
var Separator = require('../../Utils/Separator');

var { View, Text, Image, StyleSheet } = React;

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

var OwnerProfile = React.createClass({
  render: function(){
    return (
      <View>
        <View style={styles.container}>
          <Image source={{uri: this.props.picUrl}} style={styles.image}/>
          
        <View style={styles.paddingText}> 
          <Text style={styles.petName}>{this.props.name}</Text>
          <Text style={styles.petSpecies}>{this.props.species}</Text>
        </View>
        <Image source={require('image!arrowRight')} style={styles.arrow}/>
        </View>
          <Separator/>
      </View>
    )
  }
});


module.exports = OwnerProfile;
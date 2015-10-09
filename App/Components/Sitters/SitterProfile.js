var React = require('react-native');
var Separator = require('../../Utils/Separator');
var SitterProfile = require('./SitterProfile');

var { View, Text, Image, StyleSheet, TouchableHighlight, ScrollView } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40
  },
  image: {
    height: 350,
    width: 350,
    marginTop: 40

  },
  textView: {
    paddingTop: 15,
    paddingLeft: 15,
    alignItems: 'center',
    width: 350
  },
  imageView: {
    flex: 1
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    color: '#666'
  },
  padding: {
    margin:2
  }
});

var SitterList = React.createClass({

  render: function(){
    console.log(this.props.userData, ' is userData')
    return (
    <View style={styles.container}>


      <Image source={{uri: this.props.userData.picURL}} 
          style={styles.image} />

        <View style={styles.textView}> 
       <Text style={styles.name}>{this.props.userData.firstname} {this.props.userData.lastname}</Text>
       <Text style={styles.description}>{this.props.userData.preference}</Text>

       <Text style={styles.padding}>   </Text>

       <Text>{this.props.userData.description}</Text>

       <Text style={styles.padding}>   </Text>

       <Text>{this.props.userData.email}</Text>
       <Text>{this.props.userData.phone}</Text>
      </View>
    </View>
    )
  }
});

module.exports = SitterList;
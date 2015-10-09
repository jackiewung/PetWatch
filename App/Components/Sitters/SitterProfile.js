var React = require('react-native');
var Separator = require('../../Utils/Separator');
var SitterProfile = require('./SitterProfile');

var { View, Text, Image, StyleSheet, TouchableHighlight, ScrollView } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height:50,
    alignSelf: 'center'
  }
});

var SitterList = React.createClass({

  render: function(){
    console.log(this.props.userData, ' is userData')
    return (
     <View style={styles.container}>

       <Image source={{uri: this.props.userData.picURL}} 
          style={{height:50, width:450,flex:1,padding: 40}} />
         <Text>{this.props.userData.firstname} {this.props.userData.lastname}</Text>
         <Text>{this.props.userData.preference}</Text>
         <Text>{this.props.userData.description}</Text>

         <Text>{this.props.userData.email}</Text>
         <Text>{this.props.userData.phone}</Text>
         <Text>{this.props.userData.address}</Text>

     </View>
    )
  }
});

module.exports = SitterList;
var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  TouchableHighlight,
  Navigator,
  TabBarIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8d63b4'
  },
  pet: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  watch: {
    fontSize: 23,
    color: 'white',
    flexDirection: 'row',
    paddingBottom: 10
  }
});

var Sitters = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>

       <Text style={styles.watch}>
         <Text style={styles.pet}>
           Sitter
         </Text>
         Stuff
       </Text>

      </View>
    )
  }

})


module.exports = Sitters;
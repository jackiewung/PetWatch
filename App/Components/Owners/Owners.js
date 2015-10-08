var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  TouchableHighlight,
  Navigator,
  TabBarIOS,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8d63b4'
  }
});

var Owners = React.createClass({

  render: function() {
    return (
      <ScrollView>
        <View style={styles.container}>

  

       </View>
     </ScrollView>
    )
  }

})


module.exports = Owners;
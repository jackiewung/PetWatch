var React = require('react-native');

var {
  Text,
  View, 
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#8d63b4'
  },
  main: {
    color: '#fff',
    flexDirection: 'row',
    margin: 20,
    marginTop:30
  },
  padding: {
    paddingBottom: 8
  },
  button: {
    backgroundColor: '#725794',
    width: 125
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    margin:6,
    color: 'white'
  }
});

class Signup extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up</Text>

      <TouchableHighlight style={styles.button}
        underlayColor='transparent'>
        <Text style={styles.buttonText}>SITTER SIGN UP</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
        underlayColor='transparent'>
        <Text style={styles.buttonText}>OWNER SIGN UP</Text>
      </TouchableHighlight>

      </View>
    );
  }
}

module.exports = Signup;






































//

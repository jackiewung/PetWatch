var React = require('react-native')

var {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  CheckBox
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
  input: {
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    height:35,
    width:280,
    alignSelf: 'center',
    flexDirection: 'row',
    opacity:0.3,
    borderRadius: 2,
    textAlign: 'left',
    paddingLeft: 10,
  },
  padding: {
    paddingBottom: 8
  },
  left: {
    textAlign: 'left',
    flexDirection: 'row'
  },
  username: {
    paddingRight: 5,
    color: '#fff'
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

var SignUp = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  
  userInput: function(event) {
    this.setState({ username: event.nativeEvent.text })
  },


  render: function() {
    return (
    <View style={styles.container}>

    <Text style={styles.main}>Sign Up</Text>

      <TextInput style={styles.input} 
        placeholder='Full Name'
        placeholderTextColor='white'>
      </TextInput>

      <TextInput style={styles.input} 
        placeholder='Email'
        placeholderTextColor='white'>
      </TextInput>

      <TextInput style={styles.input} 
        placeholder='Password'
        placeholderTextColor='white'>
      </TextInput>

      <Text style={styles.buttonText}></Text>

      <TouchableHighlight style={styles.button}
        underlayColor='transparent'>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableHighlight>

    </View>
    )
  }
})

module.exports = SignUp;

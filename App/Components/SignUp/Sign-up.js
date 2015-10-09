var React = require('react-native');
var SitterForm = require('./SittersSignup');
var OwnerForm = require('./OwnersSignup');

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

  constructor(props){
    super(props)
    this.state = {
      sitterOnClick: false,
      ownerOnClick: false
    }
  }

  handleSubmit(button){
    console.log("here", button);
    if('sitter' === button){
      this.setState({
        sitterOnClick: true,
        ownerOnClick: false
      })
    } else if ('owner' === button) {
      console.log('owner');
      this.setState({
        sitterOnClick: false,
        ownerOnClick: true
      })    
    }
  }

  render() {

    var showSitter = (
      this.state.sitterOnClick ? <SitterForm /> : <View></View>
    );

    var showOwner = (
      this.state.ownerOnClick ? <OwnerForm /> : <View></View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up</Text>

        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleSubmit.bind(this, 'sitter')}
          underlayColor='transparent'>
          <Text style={styles.buttonText}>SITTER SIGN UP</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleSubmit.bind(this, 'owner')}
          underlayColor='transparent'>
          <Text style={styles.buttonText}>OWNER SIGN UP</Text>
        </TouchableHighlight>

        {showSitter}
        {showOwner}

      </View>
    );
  }
}

module.exports = Signup;

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
  buttons: {
    flexDirection: 'row'
  },
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fffbf8'
  },
  main: {
    color: 'black',
    flexDirection: 'row',
    margin: 20
  },
  padding: {
    paddingBottom: 8
  },
  button: {
    backgroundColor: '#34495e',
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

        <View style={styles.buttons}>
          <TouchableHighlight 
            style={styles.button}
            onPress={this.handleSubmit.bind(this, 'sitter')}
            underlayColor='transparent'>
            <Text style={styles.buttonText}>SITTER SIGN UP</Text>
          </TouchableHighlight>

          <Text>  </Text>

          <TouchableHighlight 
            style={styles.button}
            onPress={this.handleSubmit.bind(this, 'owner')}
            underlayColor='transparent'>
            <Text style={styles.buttonText}>OWNER SIGN UP</Text>
          </TouchableHighlight>
        </View>

        {showSitter}
        {showOwner}

      </View>
    );
  }
}

module.exports = Signup;

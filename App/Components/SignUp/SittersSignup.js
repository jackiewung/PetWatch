var React = require('react-native');
var api = require('./api');
var Sitters = require('../Sitters/Sitters');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight, 
  ListView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  main: {
    color: 'black',
    flexDirection: 'row', 
    margin: 20
  },
  input: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
    height:35,
    width:280,
    alignSelf: 'center',
    flexDirection: 'row',
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
    marginTop: 17,
    backgroundColor: '#34495e',
    width: 125
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    margin: 6,
    color: 'white'
  }
});

class SitterSignup extends React.Component{
  
  constructor(props){
    super(props)
    
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      phone: '',
      description: '',
      picURL: ''
    }
  }

  handleChange(){
    var sitterData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      picURL: this.state.picURL
    };

    // check if fields are passing
    var allFieldsComplete = true;
    for(var key in sitterData){
      console.log(allFieldsComplete, sitterData[key]);
      // check the pets object!
      if(sitterData[key] === null){
        allFieldsComplete = false;
        console.log(allFieldsComplete, sitterData[key]);
      }
    }
    // if they all pass do api call
    if(allFieldsComplete){
      api.postSitter(sitterData)
        .then((data) => {
          this.setState({
            isLoading: false,
          });

          this.props.navigatorProp.push({
            component: Sitters,
            title: 'Pet Watch',
          });
          console.log('made it!', data);
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
            error: 'Please fill in all info.'
          });
          console.log('Request failed', error);
        });
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up as a Sitter!</Text>

        <TextInput style={styles.input} 
          placeholder='First Name'
          placeholderTextColor='#34495e'
          onChangeText={(firstname) => this.setState({firstname})}
          value={this.state.firstname} />

        <TextInput style={styles.input} 
          placeholder='Last Name'
          placeholderTextColor='#34495e'
          onChangeText={(lastname) => this.setState({lastname})}
          value={this.state.lastname} />

        <TextInput style={styles.input} 
          placeholder='Email'
          placeholderTextColor='#34495e'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email} /> 

        <TextInput style={styles.input} 
          placeholder='Address'
          placeholderTextColor='#34495e'
          onChangeText={(address) => this.setState({address})}
          value={this.state.address} /> 

        <TextInput style={styles.input} 
          placeholder='Phone Number'
          placeholderTextColor='#34495e'
          onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} /> 

        <TextInput style={styles.input} 
          placeholder='A description about yourself'
          placeholderTextColor='#34495e'
          onChangeText={(description) => this.setState({description})}
          value={this.state.description} /> 

        <TextInput style={styles.input} 
          placeholder='A URL to your profile picture'
          placeholderTextColor='#34495e'
          onChangeText={(picURL) => this.setState({picURL})}
          value={this.state.picURL} /> 

        <TouchableHighlight 
            style={styles.button}
            onPress={this.handleChange.bind(this)}
            underlayColor='transparent'>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableHighlight>

      </View>
    );
  }
}

module.exports = SitterSignup;

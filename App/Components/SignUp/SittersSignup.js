var React = require('react-native');

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
    flexDirection: 'column',
    backgroundColor: '#8d63b4'
  },
  main: {
    color: '#fff',
    flexDirection: 'row',
    margin: 20,
    marginTop: 20
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
    margin: 4,
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
    console.log('it was clicked!', this);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up as a Sitter!</Text>

        <TextInput style={styles.input} 
          placeholder='First Name'
          placeholderTextColor='white'
          onChangeText={(firstname) => this.setState({firstname})}
          value={this.state.firstname} />

        <TextInput style={styles.input} 
          placeholder='Last Name'
          placeholderTextColor='white'
          onChangeText={(lastname) => this.setState({lastname})}
          value={this.state.lastname} />

        <TextInput style={styles.input} 
          placeholder='Email'
          placeholderTextColor='white'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email} /> 

        <TextInput style={styles.input} 
          placeholder='Adress'
          placeholderTextColor='white'
          onChangeText={(address) => this.setState({address})}
          value={this.state.address} /> 

          <TextInput style={styles.input} 
          placeholder='Phone Number'
          placeholderTextColor='white'
          onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} /> 

          <TextInput style={styles.input} 
          placeholder='A description of your pet'
          placeholderTextColor='white'
          onChangeText={(description) => this.setState({description})}
          value={this.state.description} /> 

          <TextInput style={styles.input} 
          placeholder='A URL to your pets picture'
          placeholderTextColor='white'
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






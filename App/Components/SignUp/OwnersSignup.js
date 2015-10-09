var React = require('react-native');
var api = require('./api');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight, 
  ListView,
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

class OwnerSignup extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      name: null,
      phone: null,
      description: null,
      species: null,
      picURL: null,
      isLoading: false,
      error: false
    }
  }

  handleChange(){
    console.log('it was clicked!', this.state.firstname);
    this.setState({
      isLoading: true,
    });

    var ownerData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      pets: {
        name: this.state.name,
        description: this.state.description,
        picURL: this.state.picURL,
        species: this.state.species
      }
    };

    // check if fields are passing
    var allFieldsComplete = true;
    for(var key in ownerData){
      console.log(allFieldsComplete, ownerData[key]);
      // check the pets object!
      if(ownerData[key] === null){
        allFieldsComplete = false;
        console.log(allFieldsComplete, ownerData[key]);
      }
    }
    console.log(allFieldsComplete, "this is the check");
    if(false){
      api.postOwner(ownerData)
        .then((data) => {
          this.setState({
            isLoading: false,
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
    // add page change on success

  }

  render(){

    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up as a Owner!</Text>

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
          placeholder='Pets Name'
          placeholderTextColor='white'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name} /> 

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
          placeholder='What kind of animal is your pet?'
          placeholderTextColor='white'
          onChangeText={(species) => this.setState({species})}
          value={this.state.species} /> 

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

          {showErr}
      </View>
    );
  }
}

module.exports = OwnerSignup;

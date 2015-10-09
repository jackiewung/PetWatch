var React = require('react-native');
var api = require('./api');
var Owners = require('../Owners/Owners');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight, 
  ListView,
  ActivityIndicatorIOS,
  ScrollView
} = React;

var styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  main: {
    color: 'black',
    alignItems: 'center',
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
    if(allFieldsComplete){
      api.postOwner(ownerData)
        .then((data) => {
          this.setState({
            isLoading: false,
          });

          this.props.navigatorProp.push({
            component: Owners,
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

    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Sign Up as an Owner!</Text>
        {showErr}

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
          placeholder='Pets Name'
          placeholderTextColor='#34495e'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name} /> 

        <TextInput style={styles.input} 
          placeholder='Phone Number'
          placeholderTextColor='#34495e'
          onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} /> 

        <TextInput style={styles.input}
          placeholder='A description of your pet'
          placeholderTextColor='#34495e'
          onChangeText={(description) => this.setState({description})}
          value={this.state.description} /> 

        <TextInput style={styles.input} 
          placeholder='What kind of animal is your pet?'
          placeholderTextColor='#34495e'
          onChangeText={(species) => this.setState({species})}
          value={this.state.species} /> 

        <TextInput style={styles.input} 
          placeholder='A URL to your pets picture'
          placeholderTextColor='#34495e'
          onChangeText={(picURL) => this.setState({picURL})}
          value={this.state.picURL} /> 

        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleChange.bind(this)}
          underlayColor='transparent'>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableHighlight>

        <ActivityIndicatorIOS 
          animating={this.state.isLoading}
          color='#111'
          size='large'></ActivityIndicatorIOS>

      </View>
    );
  }
}

module.exports = OwnerSignup;

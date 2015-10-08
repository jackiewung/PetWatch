var React = require('react-native');
var SignUp = require('./SignUp/SignUp')
var Sitters = require('./Sitters/Sitters')
var Owners = require('./Owners/Owners')

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
    backgroundColor: '#8d63b4',
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
  },
  padding: {
    paddingBottom: 0
  }
});

var TabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'Owners'
    }
  },

  render: function() {
    return (
      <TabBarIOS 
        barTintColor='black'
        tintColor='white'
        selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Owners'}
          icon={require('image!paw')}
          title='Owners'
          onPress={() => {
            this.setState({
              selectedTab: 'Owners'
            });
          }}>
          <Owners/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'true'}
          icon={require('image!dogleash')}
          title='Sitters'
          onPress={() => {
            this.setState({
              selectedTab: 'true'
            });
          }}>
          <Sitters/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'false'}
          icon={require('image!arrow')}
          title='Sign Up'
          onPress={() => {
            this.setState({
              selectedTab: 'false'
            });
          }}>
          <SignUp/>
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }

})


module.exports = TabBar

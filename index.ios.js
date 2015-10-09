/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TabBar = require('./App/Components/TabBarIOS')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  NavigatorIOS,
  navigator
} = React;

var testingProject = React.createClass({

  render: function() {
    return (
    <NavigatorIOS
     style={{flex: 1}}
     barTintColor='#2ecc71'
     titleTextColor='white'
      initialRoute={{
        title:'PetWatch',
        component: TabBar
      }} />
    );
  }
});

AppRegistry.registerComponent('testingProject', () => testingProject);

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
} = React;

var testingProject = React.createClass({

  render: function() {
    return (
     <TabBar />
    );
  }
});



AppRegistry.registerComponent('testingProject', () => testingProject);

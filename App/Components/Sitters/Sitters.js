var React = require('react-native');
var Firebase = require('firebase');
var helpers = require('../../Utils/helpers');
var SitterProfile = require('./SitterProfile');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  TouchableHighlight,
  Navigator,
  TabBarIOS,
  ScrollView,
  ListView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#8d63b4'
  },
  main: {
    flex: 1,
    color: '#fff',
    flexDirection: 'column'
  }
});

var Sitters = React.createClass({
  getInitialState: function() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      owners: [],
      dataBlob: {},
      dataSource: '',
      loaded: false
    }
  },

  componentWillMount: function() {
    var self = this;
    helpers.getSitters()
      .then((res) => {
        self.setState({dataSource: self.ds.cloneWithRows(res)})
      })
  },

  renderRow: function(rowData) {
    return (
      <View style={styles.container}>
        <SitterProfile picURL={rowData.picURL} firstname={rowData.firstname}
           lastname={rowData.lastname} description={rowData.description}
           phone={rowData.phone} email={rowData.email} address={rowData.address}/>
      </View>
    )
  },

  render: function() {
    console.log(this.state.dataSource)
    var listData= this.state.dataSource === '' ?  null : (<ListView dataSource={this.state.dataSource} 
          renderRow={this.renderRow} />)

    return (
      <View style={styles.container}>
        <ScrollView>
            {listData}
        </ScrollView>
      </View>
    )
  }

})


module.exports = Sitters;
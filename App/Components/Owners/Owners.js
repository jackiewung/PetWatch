var React = require('react-native');
var Firebase = require('firebase');
var helpers = require('../../Utils/helpers');
var OwnerProfile = require('./OwnerProfile');

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

var Owners = React.createClass({
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
    helpers.getOwners()
      .then((res) => {
        self.setState({dataSource: self.ds.cloneWithRows(res)})
      })
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('will update', nextState.dataSource)
  },

  renderRow: function(rowData) {
    return (
      <View style={styles.container}>
        <OwnerProfile picUrl={rowData.pets.picURL} firstname={rowData.firstname}
          lastname={rowData.lastname} name={rowData.pets.name} description={rowData.pets.description} phone={rowData.phone}
          email={rowData.email}/>
      </View>
    )
  },

  render: function() {
    console.log(this.state.dataSource, 'hey render')
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


module.exports = Owners;
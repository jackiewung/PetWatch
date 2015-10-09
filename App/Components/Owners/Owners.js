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
  bigger: {
    marginTop:37
  },
  container: {
    flex: 1,
    backgroundColor: '#fffbf8',
  },
  scroll: {
    flex: 1
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

  renderRow: function(rowData) {
    return (
      <View style={styles.container}>
        <OwnerProfile picUrl={rowData.pets.picURL} firstname={rowData.firstname}
          lastname={rowData.lastname} name={rowData.pets.name} description={rowData.pets.description} phone={rowData.phone}
          email={rowData.email} species={rowData.pets.species}/>
      </View>
    )
  },

  render: function() {
    var listData= this.state.dataSource === '' ?  null : (<ListView dataSource={this.state.dataSource} 
          renderRow={this.renderRow} />)

    return (
      <View style={styles.bigger}>
        <View style={styles.container}>
          <ScrollView>
              {listData}
          </ScrollView>
        </View>
      </View>
    )
  }

})


module.exports = Owners;
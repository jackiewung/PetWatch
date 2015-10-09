var React = require('react-native');
var Firebase = require('firebase');
var helpers = require('../../Utils/helpers');
var OwnerList = require('./OwnerList');

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
    paddingTop: 55,
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
      <View>
        <OwnerList userData={rowData} navigatorProp={this.props.navigatorProp}/>
      </View>
    )
  },

  render: function() {
    var listData= this.state.dataSource === '' ?  null : (<ListView dataSource={this.state.dataSource} 
          renderRow={this.renderRow} />)

    return (

        <View style={styles.container}>
         
              {listData}
        
        </View>

    )
  }

})


module.exports = Owners;
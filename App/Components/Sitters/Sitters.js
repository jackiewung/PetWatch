var React = require('react-native');
var Firebase = require('firebase');
var helpers = require('../../Utils/helpers');
var SitterList = require('./SitterList');

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
          <SitterList userData={rowData} navigatorProp={this.props.navigatorProp}/>
        </View>
    )
  },

  render: function() {
    console.log(this.state.dataSource)
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


module.exports = Sitters;
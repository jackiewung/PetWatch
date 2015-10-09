var React = require('react-native');

var {
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    width: 330,
    alignSelf: 'center',
  },

  container: {
    paddingVertical: 15
  }
})

var Separator = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
      </View>
    )
  }
})

module.exports = Separator;
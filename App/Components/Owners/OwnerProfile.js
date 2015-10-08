var React = require('react-native');

var { View, Text, Image, StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ownerText: {
    color: '#fff'
  },
  image: {
    height: 350
  }
});

var OwnerProfile = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View>
          <Image source={{uri: this.props.picUrl}} style={styles.image}/>
          <Text>{this.props.name}</Text>
          <Text>{this.props.description}</Text>
          <Text>Owner: {this.props.firstname} {this.props.lastname}</Text>
          <Text>Phone: {this.props.phone}</Text>
          <Text>Email: {this.props.email}</Text>
        </View>
      </View>
    )
  }
});

module.exports = OwnerProfile;
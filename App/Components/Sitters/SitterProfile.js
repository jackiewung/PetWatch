var React = require('react-native');

var { View, Text, Image, StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ownerText: {
    color: '#fff',
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
  }
});

var SitterProfile = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View>
        <Image source={{uri: this.props.picURL}} style={styles.image}/>
          <Text>{this.props.firstname} {this.props.lastname}</Text>
          <Text>{this.props.description}</Text>
          <Text>Address: {this.props.address}</Text>
          <Text>Phone: {this.props.phone}</Text>
          <Text>Email: {this.props.email}</Text>
        </View>
      </View>
    )
  }
});

SitterProfile.propTypes = {
  picUrl: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  firstname: React.PropTypes.string.isRequired,
  lastname: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  address: React.PropTypes.string.isRequired
}

module.exports = SitterProfile;
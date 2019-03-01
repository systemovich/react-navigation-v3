import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}

//ME
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact Us'
  };
  render() {
    return (
      <ScrollView>
        <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
          <Text> 1 Nucamp Way</Text>
          <Text> Seattle, WA 98001</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
          <Text>Phone</Text>
          <Text>Email</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;

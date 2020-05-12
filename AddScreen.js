import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { firebaseApp } from './util/Firebase';

export default class AppScreen extends React.Component {
  state = {
    name: '',
    phone: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          vallue={this.state.name}
          label='Name'
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          style={{ margin: 10 }}
        />
        <TextInput
          vallue={this.state.phone}
          label='Phone'
          keyboardType='phone-pad'
          onChangeText={(text) => {
            this.setState({ phone: text });
          }}
          style={{ margin: 10 }}
        />

        <Button
          onPress={() => {
            if (this.state.name != '' && this.state.phone != '') {
              const user = firebaseApp.auth().currentUser;
              console.log(user.uid);

              firebaseApp
                .firestore()
                .collection('data')
                .doc(user.uid)
                .collection('contacts')
                .add({ name: this.state.name, phone: this.state.phone })
                .then((result) => {
                  this.props.navigation.goBack();
                })
                .catch((error) => console.log(error));
            } else {
              alert('Provide information');
            }
          }}
          mode='contained'
          style={{ margin: 10 }}
        >
          Save
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

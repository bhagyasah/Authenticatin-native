import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button, Card, CardSection, Input,
} from './common';

class LoginForm extends Component {
  state ={ email: '', password: null, error: '' };

  onButtonPress = () => {
    // console.log('login button pressed');
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password).then(v => console.log(v))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((er) => {
            console.log('error message: ', er.message, 'email:', email, 'pass: ',password);
            this.setState({ error: 'Athentication Fialed' });
          });
      });
  }

  render() {
    const { text, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={text}
            onChangeText={v => this.setState({ email: v })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={v => this.setState({ password: v })}
            placeholder="Password"
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          { error }
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;

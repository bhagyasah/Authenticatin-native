import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button, Card, CardSection, Input, Spinner,
} from './common';

class LoginForm extends Component {
  state ={ email: '', password: null, error: '', loading: false };

  onButtonPress = () => {

    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch( errmsg => this.onLoginFail(errmsg));
      });
  }

  onLoginFail = (errmsg) => {
    this.setState({
      error: errmsg.message,
      loading: false,
    });
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress}>
      Log in
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={email}
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
          {this.renderButton()}
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

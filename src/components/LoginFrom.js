import React, { Component } from 'react';
import {
  Button, Card, CardSection, Input,
} from './common';

class LoginForm extends Component {
  state ={ text: '', password: null,  };

  render() {
    const { text, password } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={text}
            onChangeText={v => this.setState({ text: v })}
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
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;

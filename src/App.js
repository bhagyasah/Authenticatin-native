import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginFrom';


class App extends Component {
  state={ loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDN1UImvjMdbTsQIcCv_sSJ7DVGbKajeEs',
      authDomain: 'authentication-168a9.firebaseapp.com',
      databaseURL: 'https://authentication-168a9.firebaseio.com',
      projectId: 'authentication-168a9',
      storageBucket: 'authentication-168a9.appspot.com',
      messagingSenderId: '325488281662',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {

    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

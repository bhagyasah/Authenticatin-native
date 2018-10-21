import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginFrom';


class App extends Component {
  state={};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDN1UImvjMdbTsQIcCv_sSJ7DVGbKajeEs',
      authDomain: 'authentication-168a9.firebaseapp.com',
      databaseURL: 'https://authentication-168a9.firebaseio.com',
      projectId: 'authentication-168a9',
      storageBucket: 'authentication-168a9.appspot.com',
      messagingSenderId: '325488281662',
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

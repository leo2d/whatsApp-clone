import React, { Component } from 'react';
import Routes from './src/components/Routes';
import reducers from './src/reducers';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Firebase from '@firebase/app'

export default class App extends Component {

  componentWillMount() {
    const config = {
    //dados de conexao com Firebase aqui
    };

    Firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
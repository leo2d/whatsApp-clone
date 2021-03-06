import React, { Component } from 'react';
import Routes from './src/components/Routes';
import reducers from './src/reducers';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk'

export default class App extends Component {

  componentWillMount() {
    const config = {
    //dados de conexao com Firebase aqui
    };

    Firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
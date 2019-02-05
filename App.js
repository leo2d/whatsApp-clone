import React, { Component } from 'react';
import Routes from './src/components/Routes';
import reducers from './src/reducers';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       // <LoginForm />
//       <SiginUpForm />
//     );
//   }
// }
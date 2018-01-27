import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { StyleProvider } from 'native-base';
import AppNavigator from './app/app.navigator';
import stores from './app/stores';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

export default class App extends Component {
  render() {
    return (
      <Provider stores={stores} >
        <Styleprovider style={getTheme(custom)}>
          <AppNavigator />
        </Styleprovider>
      </Provider>
    );
  }
}

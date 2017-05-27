import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppContainer from './src/AppContainer'
import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

const store = configureStore()

class StudentApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('StudentApp', () => StudentApp);
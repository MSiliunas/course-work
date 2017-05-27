import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppContainer from './src/AppContainer'

const store = configureStore()

class LecturerApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('LecturerApp', () => LecturerApp);
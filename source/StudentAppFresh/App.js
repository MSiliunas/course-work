import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
    TextInput,
    Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    }

    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onLoginClick = () => {
        const {navigate} = this.props.navigation;
        this.refs['password'].blur()
        navigate('home')
    }

    onUsernameChange = (text) => {
        this.setState({
            username: text
        })
    }

    onPasswordChange = (text) => {
        this.setState({
            username: text
        })
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center',  flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <Image style={{ resizeMode: 'contain', flex: 1 }} source={require('./src/assets/img/icon-antenna.png')} />
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Skaitytuvas</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput onChangeText={this.onUsernameChange}
                        placeholder={'Naudotojo vardas'}
                        keyboardType={'email-address'}
                        returnKeyType={'next'} />
                    <TextInput onChangeText={this.onPasswordChange}
                        placeholder={'Slaptažodis'}
                        ref='password'
                        returnKeyType={'go'}
                        secureTextEntry
                        onSubmitEditing={this.onLoginClick} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button onPress={this.onLoginClick} title='Prisijungti'/>
                </View>
            </View>
        )
    }
}

const StudentAppFresh = StackNavigator({
    login: {screen: HomeScreen},
    home: {screen: Home}
});

AppRegistry.registerComponent('StudentAppFresh', () => StudentAppFresh);
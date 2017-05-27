import React from 'react'
import {View, Image, Text, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onLoginClick = () => {
        this.props.dispatch(login(this.state.username, this.state.password))
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

    render = () => {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, padding: 10 }}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <Image style={{resizeMode: 'contain', flex: 1}}
                           source={require('../assets/img/icon-react.png')}/>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 1}}>
                    <TextInput onChangeText={this.onUsernameChange}
                               placeholder={'Naudotojo vardas'}
                               keyboardType={'email-address'}
                               returnKeyType={'next'}/>
                    <TextInput onChangeText={this.onPasswordChange}
                               placeholder={'Slaptažodis'}
                               ref='password'
                               returnKeyType={'go'}
                               secureTextEntry
                               onSubmitEditing={this.onLoginClick}/>
                </View>
                <View style={{flex: 1}}>
                    <Button onPress={this.onLoginClick} title='Prisijungti'/>
                </View>
            </View>
        )
    }
}

export default connect()(Login)
import React from 'react'
import { Text, View, Picker, Button } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import ActiveLecture from './ActiveLecture'
const Item = Picker.Item

class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        drawerLabel: 'Test Drawer'
    }

    onLectureChange = (value, index) => {

    }

    onLectureStart = () => {
        this.props.navigation.navigate('activeLecture', {
            lecture: {
                title: 'Paskaita va'
            }
        })
    }

    render = () => {
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ paddingVertical: 20, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                    Pradėti paskaitą
                </Text>
                <View>
                    <Text>Paskaita</Text>
                    <Picker onValueChange={this.onLectureChange} mode='dropdown'>
                        <Item label='hello' value='key0' />
                        <Item label='world' value='key1' />
                    </Picker>
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Text>Grupė</Text>
                    <Picker onValueChange={this.onLectureChange} mode='dropdown'>
                        <Item label='hello' value='key0' />
                        <Item label='world' value='key1' />
                    </Picker>
                </View>
                <Button title={'Pradėti paskaitą'} onPress={this.onLectureStart} />
            </View>
        )
    }
}

const HomeDrawerNavigator = StackNavigator({
    home: {
        screen: Home
    },
    activeLecture: {
        screen: ActiveLecture
    }
})

export default HomeDrawerNavigator
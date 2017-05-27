import React from 'react'
import { Text, View, Picker, Button } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation'
const Item = Picker.Item

class Home extends React.Component {
    static navigationOptions = {
        title: 'Studentas'
    }

    getLectureStatus = () => {
        return false
    }

    render = () => {
        return (
            <View style={{ padding: 10 }}>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Paskaita:</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                        Taikomoji informatika
                    </Text>
                </View>
                <View>
                    {this.getLectureStatus() ? (
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'green' }}>
                            Pažymėta
                        </Text>
                    ) : (
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'red' }}>
                            Nepažymėta
                        </Text>
                    )}
                </View>
            </View>
        )
    }
}

const HomeDrawerNavigator = StackNavigator({
    home: {
        screen: Home
    }
})

export default HomeDrawerNavigator
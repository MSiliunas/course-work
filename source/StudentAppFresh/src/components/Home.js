import React from 'react'
import {
    Text,
    View,
    Picker
} from 'react-native';
const Item = Picker.Item

class Home extends React.Component {
    render = () => {
        return (
            <View>
                <Text>Va veikia bent kažkas</Text>
                <Picker
                    mode="dropdown">
                    <Item label="hello" value="key0" />
                    <Item label="world" value="key1" />
                </Picker>
            </View>
        )
    }
}

export default Home
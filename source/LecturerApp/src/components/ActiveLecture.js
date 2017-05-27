import React from 'react'
import { Text, View, ListView, Button } from 'react-native'
import { BleManager } from 'react-native-ble-plx'
import HttpClient from './utils/HttpClient'

class ActiveLecture extends React.Component {
    static navigationOptions = {
        title: 'Vykstanti Paskaita'
    }

    constructor (props) {
        super(props)
        this.manager = new BleManager()
        this.state = {
            discoveredDevices: [],
            attendingStudents: []
        }
    }

    componentWillUnmount = () => {
        this.manager.stopDeviceScan()
        this.manager.destroy()
    }

    componentWillMount = () => {
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanNearDevices()
                subscription.remove()
            }
        })
    }

    scanNearDevices = () => {
        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                this.onEndLecture()
                return
            }
            if (!this.state.discoveredDevices.includes(device.id)) {
                this.newDeviceDiscovered(device)
            }
        })
    }

    newDeviceDiscovered = (device) => {
        let newDeviceList = this.state.discoveredDevices.splice()
        newDeviceList.push(device.id)
        this.setState({
            discoveredDevices: newDeviceList
        })
        this.postStudentToAPI(device)
    }

    postStudentToAPI = (device) => {
        HttpClient.post(
            '/lecture/attend',
            {
                deviceId: device.id
            }
        ).then(response => {
            if (response.fullName) {
                let newList = this.state.attendingStudents.splice()
                newList.push(response.fullName)
                this.setState({
                    attendingStudents: newList
                })
            }
        }).catch(error => {
            if (error) {
                console.log(error)
            }
        })
    }

    getDataSource = () => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        return ds.cloneWithRows(this.state.attendingStudents)
    }

    onEndLecture = () => {
        this.props.navigation.goBack()
    }

    render = () => {
        const { lecture } = this.props.navigation.state.params
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ paddingVertical: 20, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                    {lecture.title}
                </Text>
                <Button color='#FF0000' title={'Baigti žymėjimą'} onPress={this.onEndLecture} />
                <View>
                    <Text style={{ fontWeight: 'bold', paddingVertical: 20, textAlign: 'center' }}>
                        Dalyvaujantys studentai
                    </Text>
                    <ListView dataSource={this.getDataSource()}
                        renderRow={(rowData) => <Text>{rowData}</Text>} />
                </View>
            </View>
        )
    }
}

ActiveLecture.propTypes = {
    lecture: React.PropTypes.object
}

export default ActiveLecture
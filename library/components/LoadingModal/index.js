import React from 'react'
import { Modal, View, ActivityIndicator } from 'react-native'

const LoadingModal = (props) => {
    return(
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.visible !== undefined ? props.visible : true}
            onRequestClose={props.close !== undefined ? props.close : () => null}
        >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                <View style={{backgroundColor: 'white', width: 100, height: 100}}>
                    <ActivityIndicator size='large' style={{flex: 1}}/>
                </View>
            </View>
        </Modal>
        )
}

export default LoadingModal
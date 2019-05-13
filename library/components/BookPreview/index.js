import React from 'react';
import { Image, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

import Images from 'res/images'

export default class BookPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsOpen: false
        }
    }
    render(){
        return (
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.detailsOpen}
                    onRequestClose={() => {
                        this.setState({ detailsOpen: false })}
                    }
                >
                    <TouchableOpacity onPress={() => this.setState({detailsOpen: false})} activeOpacity={1} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                        <View style={{
                            backgroundColor: 'white',
                            width: '80%', 
                            height: '70%',
                            padding: '10%',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.4,
                            shadowRadius: 8,
                            
                            elevation: 1,}}
                        >
                            {Object.entries(this.props.data).map(([key, val], i) => {
                                return <View key={i} style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
                                    <View style={{flex: 1, alignSelf: 'stretch'}}>
                                        <Text style={{fontFamily: 'SemiBold',fontSize: 18}} >{`${key.toUpperCase()}:`}</Text>
                                    </View>
                                    <View style={{flex: 1, alignSelf: 'stretch'}}>
                                        <Text style={{fontFamily: 'Regular',fontSize: 18}} >{`${val}`}</Text>
                                    </View>
                                </View>
                            })}
                        </View>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity activeOpacity={1} onPress={() => this.setState({detailsOpen: true})}>
                    <Image 
                        source={Images[this.props.image]}
                        style={{height: (Dimensions.get('window').height), width: (Dimensions.get('window').width)}}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
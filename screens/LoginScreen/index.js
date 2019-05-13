import React from 'react';
import { Image, TextInput, Text, Alert, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux'
import { signIn, fetchUser, signOut, acknowledgeError } from '../../store/actions/sessionActions'
import { booksInit } from '../../store/actions/bookActions'

import styles from './styles'

import LoadingModal from 'library/components/LoadingModal'
import Images from 'res/images'

class SignInPage extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.showAlert = this.showAlert.bind(this)
    };

    componentDidMount() {
        if(this.props.books[0] !== null) {
            this.props.booksInit()
        }
    }

    componentDidUpdate() {
        if (this.props.status === 'SIGN_IN_SUCCESS' && this.props.user === null) {
            this.props.fetchUser();
        } else if (this.props.status === 'SIGN_IN_SUCCESS' && this.props.user !== null && this.state.isLoading) {
            this.props.navigation.navigate('App')
        }
        else if (this.props.error && this.state.isLoading) {
            this.showAlert(this.props.error)
            this.props.acknowledgeError()
            this.setState({
                ...this.state,
                isLoading: false
            })
        }
    }

    handleSubmit() {
        this.props.signIn(this.state.email, this.state.pass)
        this.setState({
            ...this.state,
            isLoading: true
        })
    }

    handleBack() {
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    showAlert(message) {
        Alert.alert('Error Signing In', message)
    }

    render() {
        return (
            <View style={styles.container}>
                <LoadingModal 
                    visible={this.state.isLoading}
                    close={this.handleBack}
                />
                <View style={styles.loginBackground}>
                    <View style={styles.loginContainer}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={Images.logo}
                                style={{flex: 1, height: undefined, width: undefined}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.inputContaienr}>
                            <TextInput
                                placeholder='Email'
                                autoCapitalize='none'
                                style={styles.input}
                                onChangeText={text => this.setState({email: text})}
                                textContentType='emailAddress'
                                placeholderTextColor='rgba(0,0,0,0.5)'
                            />
                            <TextInput
                                placeholder='Password'
                                autoCapitalize='none'
                                style={styles.input}
                                onChangeText={text => this.setState({pass: text})}
                                secureTextEntry={true}
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                textContentType='password'
                            />
                        </View>
                        <View style={{flex: 0.75, justifyContent: 'center'}}>
                            <TouchableOpacity
                                onPress={this.handleSubmit}
                                activeOpacity={0.8}
                                style={styles.loginButton}
                            >
                                <Text style={{fontFamily: 'Bold', fontSize: 24}}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.sessions.user,
        status: state.sessions.status,
        error: state.sessions.error,
        books: state.books.books
    }
}

export default connect(mapStateToProps, { signIn, fetchUser, signOut, acknowledgeError, booksInit })(SignInPage)
import React from 'react';
import { Text, TextInput, Button, Alert, View } from 'react-native';

import { connect } from 'react-redux'
import { signIn, fetchUser, signOut, acknowledgeError } from '../../store/actions/sessionActions'

import LoadingModal from 'library/components/LoadingModal'

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
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <LoadingModal 
                    visible={this.state.isLoading}
                    close={this.handleBack}
                />
                <View style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
                    <Text>Login</Text>
                    <TextInput
                        placeholder='Username'
                        onChangeText={text => this.setState({email: text})}
                    />
                    <TextInput
                        placeholder='Password'
                        onChangeText={text => this.setState({pass: text})}
                        secureTextEntry={true}
                    />
                    <Button
                        onPress={this.handleSubmit}
                        title='Login'
                    />
                    <Button
                        onPress={() => this.props.signOut()}
                        title='Logout'
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.sessions.user,
        status: state.sessions.status,
        error: state.sessions.error
    }
}

export default connect(mapStateToProps, { signIn, fetchUser, signOut, acknowledgeError })(SignInPage)
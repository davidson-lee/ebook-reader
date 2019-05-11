import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect } from 'react-redux'

import { signOut } from '../../store/actions/sessionActions'

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.user) this.props.navigation.navigate('Auth')
    }

    componentDidUpdate() {
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    hi, {this.props.user ? this.props.user.email : null}
                </Text>
                <Button
                    onPress={this.props.signOut}
                    title='Logout'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.sessions.user
    }
}

export default connect(mapStateToProps, { signOut })(Home)
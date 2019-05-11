import React from 'react'
import {
    ActivityIndicator,
    View
} from 'react-native'

import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/sessionActions'

import LoadingModal from 'library/components/LoadingModal'

class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    componentDidUpdate() {
        this.props.navigation.navigate(this.props.user ? 'App' : 'Auth')
    }

    render() {
        return (
            <LoadingModal />
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.sessions.user,
    }
}

export default connect(mapStateToProps, { fetchUser })(AuthLoadingScreen)
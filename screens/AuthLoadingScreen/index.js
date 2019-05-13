import React from 'react'

import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/sessionActions'
import { getFonts} from '../../store/actions/styleActions'

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
        this.props.getFonts()
    }

    componentDidUpdate() {
        this.props.navigation.navigate(this.props.user && this.props.font ? 'App' : 'Auth')
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
        font: state.style.loadedFonts
    }
}

export default connect(mapStateToProps, { fetchUser, getFonts })(AuthLoadingScreen)
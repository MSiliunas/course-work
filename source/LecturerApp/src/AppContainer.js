import React from 'react'
import { connect } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'

class AppContainer extends React.Component {
    render = () => {
        return (
            this.props.auth.isLoggedIn ? (
                <Home />
            ) : (
                <Login />
            )
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AppContainer)
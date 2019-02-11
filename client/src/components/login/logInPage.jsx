import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/users'
import LogInForm from './logInForm'
import Paper from 'material-ui/Paper'
import '../components.css'


class LogInPage extends PureComponent {
    handleSubmit = (data) => {
        this.props.login(data.email, data.password)
    }

    render() {
        if (this.props.currentUser) return (
            <Redirect to="/batches" />
        )
        
        return (
            <Paper className="login-paper">
                <h1>Login</h1>

                <LogInForm onSubmit={this.handleSubmit} />

                {this.props.error && <span style={{ color: 'blue' }}>{this.props.error}</span>}
            </Paper>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
        //error: state.login.error
    }
}

export default connect(mapStateToProps, { login })(LogInPage)
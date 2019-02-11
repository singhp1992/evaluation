import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'
import SignUpForm from './signUpForm'
import { Redirect } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import '../components.css'

class SignUpPage extends PureComponent {
    handleSubmit = (data) => {
        const { firstName, lastName, email, password } = data
        this.props.postSignUp(firstName, lastName, email, password)
    }

    render() {
        if (this.props.signup.success) return (
            <Redirect to="/login" />
        )

        return (
            <Paper className="paper">
                <h1>Sign Up</h1>

                <SignUpForm onSubmit={this.handleSubmit} />

                <p style={{ color: 'red' }}> {this.props.signup.error}</p>
            </Paper>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        signup: state.signup
    }
}

export default connect(mapStateToProps, { postSignUp: signup })(SignUpPage)
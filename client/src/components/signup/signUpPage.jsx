import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'
import SignUpForm from './signUpForm'
import { Redirect } from 'react-router-dom'
import '../components.css'

class SignUpPage extends PureComponent {
    handleSubmit = (data) => {
        console.log(this.props)
        const { firstName, lastName, email, password, teacher } = data
        // console.log(firstName)
        this.props.postSignUp(firstName, lastName, email, password, teacher)
    }

    render() {
        if (this.props.signup.success) return (
            <Redirect to="/" />
        )
        console.log(this.props)


        return (
            <div className="paper">
                <h1>Sign Up</h1>

                <SignUpForm onSubmit={this.handleSubmit} />

                <p style={{ color: 'red' }}>{this.props.signup.error}</p>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        signup: state.signup
    }
}

export default connect(mapStateToProps, { postSignUp: signup })(SignUpPage)
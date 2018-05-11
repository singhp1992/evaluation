
import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';

export default class SignUpForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <TextField
                        id="firstName"
                        name='firstName'
                        label="First Name"
                        type="text"
                        margin="normal"
                        onChange={this.handleChange}
                        value={
                            this.state.firstName || ''
                        }
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="lastName"
                        name='lastName'
                        label="Last Name"
                        type="text"
                        margin="normal"
                        onChange={this.handleChange}
                        value={
                            this.state.lastName || ''
                        }
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="email"
                        name='email'
                        label="Email"
                        type="email"
                        margin="normal"
                        onChange={this.handleChange}
                        value={
                            this.state.email || ''
                        }
                        required
                    />
                </div>

                <div>
                    <TextField
                        id="password"
                        name='password'
                        label="Password"
                        type="password"
                        margin="normal"
                        onChange={this.handleChange}
                        value={
                            this.state.password || ''
                        }
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="confirmPassword"
                        name='confirmPassword'
                        label="Confirm Password"
                        type="password"
                        margin="normal"
                        onChange={this.handleChange}
                        value={
                            this.state.confirmPassword || ''
                        }
                        required
                    />
                </div>
                {
                    this.state.password &&
                    this.state.confirmPassword &&
                    this.state.password !== this.state.confirmPassword &&
                    <p style={{ color: 'red' }}>The passwords do not match!</p>
                }


                <Button variant="raised" type="submit"> Submit </Button>

            </form>
        )
    }
}
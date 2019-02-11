import React, { PureComponent } from 'react'
import '../components.css'
import Button from 'material-ui/Button';

export default class LogInForm extends PureComponent {
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
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={
                        this.state.email || ''
                    } onChange={this.handleChange} />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={
                        this.state.password || ''
                    } onChange={this.handleChange} />
                </div>
                <br/>
                <Button variant="raised" type="submit">Login</Button>
            </form>
        )
    }
}
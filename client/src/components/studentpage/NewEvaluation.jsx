import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import { addEvaluation } from '../../actions/evaluations'
import '../components.css'


class NewEvaluation extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addEvaluation(this.state)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='evaluation'
                    name='batchNumber'
                    label='Batch Number'
                    value={this.state.lastEvaluation || ''}
                    onChange={this.handleChange}
                />
                <TextField
                    id='startDate'
                    name='startDate'
                    label='Start Date'
                    value={this.state.startDate || ''}
                    onChange={this.handleChange}
                />
                <TextField
                    id='endDate'
                    name='endDate'
                    label='End Date'
                    value={this.state.endDate || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-batch"
                >
                    Create Batch
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        batches: state.batches
    }
}

export default connect(mapStateToProps, { addEvaluation })(NewEvaluation)
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import { addEvaluation } from '../../actions/evaluations'
import '../components.css'


class NewEvaluation extends PureComponent {
    state = {
        studentId: Number((window.location.href).split('/').pop()),
        date: new Date()
    }

    handleSave = (e) => {
        const { history, student } = this.state
        
        e.preventDefault()
        this.props.addEvaluation(this.state)
        console.log(this.state)
        history.push(`/batches/${student.batchNumber}`)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='date'
                    name='date'
                    label='Date'
                    value={this.state.date || ''}
                    onChange={this.handleChange}
                />
                <TextField
                    id='evaluation'
                    name='evaluation'
                    label='Evaluation'
                    value={this.state.evaluation || ''}
                    onChange={this.handleChange}
                />
                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-batch"
                >
                    Save
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        batches: state.batches,
        student: state.studentById,
        evaluations: state.evaluations
    }
}

export default connect(mapStateToProps, { addEvaluation })(NewEvaluation)
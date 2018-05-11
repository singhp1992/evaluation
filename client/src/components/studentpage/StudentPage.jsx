import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//need to add student by id - you have an endpoint 
import { getEvaluation } from '../../actions/evaluations'
import { getStudent } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewEvaluation from './NewEvaluation'
import Paper from 'material-ui/Paper'

class StudentView extends PureComponent {
    state = {}

    componentWillMount() {
        this.props.getStudent(this.props.match.params.id)
        this.props.getEvaluation(this.props.match.params.id)
    }

    render() {
        const { evaluation, student } = this.props
        return (
            <Paper className="outer-paper">
                <h1>Student</h1>
                <NewEvaluation />
                {/* {student.map((student) =>
                    <div className="evaluation">
                        <h2>First Name: {student.lastEvaluation}</h2>
                    </div>
                )} */}
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    batch: state.batch,
    students: state.students
})

export default connect(mapStateToProps, { getStudent, getEvaluation })(StudentView)
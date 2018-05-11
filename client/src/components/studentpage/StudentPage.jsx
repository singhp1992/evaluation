import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//need to add student by id - you have an endpoint 
import { getEvaluation } from '../../actions/evaluations'
import { getStudent } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewEvaluation from './NewEvaluation'
import Paper from 'material-ui/Paper'

class StudentView extends PureComponent {

    state = {

    }

    componentWillMount() {
        const studentId = Number((window.location.href).split('/').pop())
        this.props.getStudent(studentId)
        this.props.getEvaluation(this.props.match.params.id)
        console.log(studentId)
    }


    render() {
        const { evaluation, student } = this.props
        console.log(student, 'hallo')
        return (
            <Paper className="outer-paper">
                <h1>{student.firstName} {student.lastName}</h1>
                <h2>Last Evaluation: {student.lastEvaluation}</h2>
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
    student: state.studentById
})

export default connect(mapStateToProps, { getStudent, getEvaluation })(StudentView)
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//need to add student by id - you have an endpoint 
import { getEvaluation } from '../../actions/evaluations'
import { getStudent } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewEvaluation from './NewEvaluation'
import Paper from 'material-ui/Paper'

class StudentView extends PureComponent {

    componentWillMount() {
        this.props.getStudent()
        this.props.getEvaluation(this.props.id)
    }

    render() {
        const { evaluation, student } = this.props
        return (
            <Paper className="outer-paper">
                <h1>Student</h1>
                <NewEvaluation />
                {evaluation.map((evaluation, index) =>
                    <div className="evaluation" key={index}>
                        <Link to={`/students/${student.lastEvaluation}`}><h2>First Name: {student.lastEvaluation}</h2></Link>
                    </div>
                )}
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    batch: state.batch,
    students: state.students
})

export default connect(mapStateToProps, { getStudent, getEvaluation })(StudentView)
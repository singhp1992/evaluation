import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addStudent, deleteStudent, getStudents, getBatch } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewStudent from './NewStudent'
import AskQuestion from './Question'
import Paper from 'material-ui/Paper'

class BatchPage extends PureComponent {

    componentWillMount() {
        this.props.getBatch(this.props.match.params.id)
        this.props.getStudents(this.props.match.params.d)
    }

    render() {
        const { batch, students } = this.props
        //const students = this.props.students

        return (
            <Paper className="outer-paper">
                <h1>Batch</h1>
                <NewStudent />
                <br />
                {students.map((student, index) =>
                    <div className="student" key={index}>
                        <Link to={`/students/${student.id}`}>
                            <img src={student.profilePic} height="100" width="100" />
                            <h2> {student.firstName} {student.lastName} Last Evaluation: {student.lastEvaluation}</h2>

                        </Link>
                    </div>
                )}
                <AskQuestion />
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    students: state.students,
    batch: state.batch
})

export default connect(mapStateToProps, { getStudents, getBatch, addStudent, deleteStudent })(BatchPage)

//this should work
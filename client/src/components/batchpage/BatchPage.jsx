import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addStudent, deleteStudent, getStudents, getBatch } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewStudent from './NewStudent'
import AskQuestion from './Question'
import Paper from 'material-ui/Paper'

class BatchPage extends PureComponent {

    componentWillMount() {
        this.props.getBatch(this.props.match.params.batch)
        this.props.getStudents(this.props.match.params.id)
    }

    render() {
        const { batch, students } = this.props
        //const students = this.props.students

        return (
            <Paper className="outer-paper">
                <h1>Batch</h1>
                <NewStudent />
                {students.map((student, index) =>
                    <div className="student" key={index}>
                        <Link to={`/students/${student.batchNumber}`}><h2>Full Name: {student.firstName} {student.lastName} </h2></Link>
                    </div>
                )}
                <br />
                <br />
                <AskQuestion />
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    batch: state.batch,
    students: state.students
})

export default connect(mapStateToProps, { getStudents, getBatch, addStudent, deleteStudent })(BatchPage)
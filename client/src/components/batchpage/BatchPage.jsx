import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudents, getBatch } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewStudent from './NewStudent'
import Paper from 'material-ui/Paper'

class BatchPage extends PureComponent {

    componentWillMount() {
        this.props.getBatch(this.props.match.params.id)
        this.props.getStudents(this.props.match.params.id)
    }

    render() {
        //const { batch, students } = this.props
        const batch = this.props
        const students = this.props.students
        const batchNumber = batch.batchNumber
        console.log(students.studentId)

        return (
            <Paper className="outer-paper">
                <h1>Batch {batchNumber}</h1>
                <NewStudent />
                {students.map(student =>
                    <div className="student">
                        <Link to={`/students/${student.id}`}><h2>{student.firstName}</h2></Link>
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

export default connect(mapStateToProps, { getStudents, getBatch })(BatchPage)
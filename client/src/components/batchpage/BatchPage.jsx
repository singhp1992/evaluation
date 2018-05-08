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
        const { batch, students } = this.props

        return (
            <Paper className="outer-paper">
                <h1>Batch {batch.batchNum}</h1>
                <NewStudent />
                {students.map(student =>
                    <div className="studentsContainer">
                        <Link to={`/students/${student.id}`}><h2>{student.name}</h2></Link>
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
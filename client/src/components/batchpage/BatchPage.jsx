import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBatch } from '../../actions/batches'
import { addStudent, deleteStudent, getStudents } from '../../actions/students'
import { Link } from 'react-router-dom'
import NewStudent from './NewStudent'
//import AskQuestion from './Question'
import AskAnotherQuestion from './QuestionAgain'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import PercentageBar from './PercentageBar'

//added
import studentRandomizer from './redoLogic'

class BatchPage extends PureComponent {
    state = {}

    componentWillMount() {
        this.props.getBatch(this.props.match.params.id)
        this.props.getStudents(this.props.match.params.d)
        this.props.deleteStudent(this.props.match.params.id)
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.deleteStudent(this.state)
    // }

    // handleChange = (e) => {
    //     const { name, value } = e.target

    //     this.setState({
    //         [name]: value
    //     })
    // };

    render() {
        const { batch, students } = this.props

        return (

            <Paper className="outer-paper">
                <h1>Batch</h1>
                <PercentageBar />
                <NewStudent />
                <br />
                {students.map((student, index) => <div className="student" key={index}>
                        <Link to={`/students/${student.id}`}>
                            <img src={student.profilePic} height="150" width="200" />
                            <h2> {student.firstName} {student.lastName} <br /> Last Evaluation: {student.lastEvaluation}</h2>
                        </Link>
                        <Button type='submit'
                            color="secondary"
                            variant="raised" 
                            onClick= { () => this.props.deleteStudent(student.id)} 
                        >
                            Delete
                        </Button>
                    </div>
                )}
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="askQuestion"
                    onClick={(event) => { studentRandomizer(this.props.students, event) }}

                >
                    HERE WE GO BITCHES
                        </Button>
                <br />
            {/* <AskAnotherQuestion /> */}
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    students: state.students,
    batch: state.batch
})

export default connect(mapStateToProps, { getStudents, getBatch, addStudent, deleteStudent })(BatchPage)

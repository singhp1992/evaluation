import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBatch } from '../../actions/batches'
import { addStudent, deleteStudent, getStudents } from '../../actions/students'
import { Link } from 'react-router-dom'
import NewStudent from './NewStudent'
//import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import PercentageBar from './PercentageBar'
import './students.css'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar';

//added
import studentRandomizer from './redoLogic'

class BatchPage extends PureComponent {
    state = { }

    componentWillMount() {
        this.props.getBatch(this.props.match.params.id)
        this.props.getStudents(this.props.match.params.id)
    }

    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId)
    }
    
    render(index) {
        const { batch, students } = this.props

        return (
            <Grid className="outer-paper">
                <h1>Batch</h1>
                <PercentageBar />
                <NewStudent />
                <br />
                {students.map((student, index) =>
                    <Card className="student-card" key={index}>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Name: {student.firstName} {student.lastName}
                                <br />
                                Last Evaluation: {student.lastEvaluation}
                            </Typography>
                            <Avatar src={student.profilePic} style={{ margin: 'auto', width: 150, height: 150 }} />
                        </CardContent>
                        <CardActions>
                            <Link to={`/students/${student.id}`}>
                                Click for more student info
                            </Link>
                            <br />
                            <Button type='submit'
                                color="secondary"
                                variant="raised"
                                onClick={() => this.deleteStudent(student.id)}
                            >
                                Delete
                        </Button>
                        </CardActions>
                    </Card>
                )}
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="askQuestion"
                    onClick={(event) => { studentRandomizer(this.props.students, event) }}

                >
                    ask a question
                        </Button>
                <br />
                {/* <AskAnotherQuestion /> */}
            </Grid>
        )
    }
}


const mapStateToProps = (state) => ({
    students: state.students,
    batch: state.batch
})

export default connect(mapStateToProps, { getStudents, getBatch, addStudent, deleteStudent })(BatchPage)

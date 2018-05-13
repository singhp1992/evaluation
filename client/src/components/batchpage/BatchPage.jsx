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
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import PercentageBar from './PercentageBar'
import './students.css'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

//added
import studentRandomizer from './redoLogic'

class BatchPage extends PureComponent {
    state = {}

    componentWillMount() {
        this.props.getBatch(this.props.match.params.id)
        this.props.getStudents(this.props.match.params.d)
        this.props.deleteStudent(this.props.match.params.id)
    }

    render(index) {
        const { batch, students } = this.props

        return (
            <Grid item xs={12} sm={4} key={index}>
                <h1>Batch</h1>
                <PercentageBar />
                <NewStudent />
                <br />
                {students.map((student, index) =>
                    <Card className="student" key={index}>
                        <CardMedia
                            className='media'
                            title='student pic'
                            image={student.profilePic}
                            height="150" 
                            width="200"
                            style={{ height: 0, paddingTop: '56.25%' }}
                        />
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Name: {student.firstName} {student.lastName}
                            </Typography>
                            <Typography component="p">
                                Last Evaluation: {student.lastEvaluation}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/students/${student.id}`}>
                                Click for more student info
                            </Link>
                            <br />
                            <Button type='submit'
                                color="secondary"
                                variant="raised"
                                onClick={() => this.props.deleteStudent(student.id)}
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
                    HERE WE GO BITCHES
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

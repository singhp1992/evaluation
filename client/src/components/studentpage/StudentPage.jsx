import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//need to add student by id - you have an endpoint 
import { getEvaluation } from '../../actions/evaluations'
import { getStudent } from '../../actions/students'
import NewEvaluation from './NewEvaluation'
import Card, { CardContent } from 'material-ui/Card';
import { Typography } from 'material-ui';

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
        const { student } = this.props
        console.log(student, 'hallo')
        return (
            <Card className="outer-paper">
                <CardContent>
                    <Typography>
                        <h1>{student.firstName} {student.lastName}</h1>
                        <h2>Last Evaluation: {student.lastEvaluation}</h2>
                    </Typography>
                    <NewEvaluation />
                </CardContent>
            </Card>
        )
    }
}


const mapStateToProps = (state) => ({
    batch: state.batch,
    student: state.studentById
})

export default connect(mapStateToProps, { getStudent, getEvaluation })(StudentView)
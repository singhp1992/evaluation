import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';

class AskAnotherQuestion extends PureComponent {

    generatePercentageColor = (colors, percentages) => {
        let percentage_colors = []

        colors.forEach((color, index) => {
            let colorArray = Array(percentages[index]).fill(color)
            percentage_colors.push(...colorArray)
        })

        return percentage_colors;
    }

    randomStudent = (event) => {
        event.preventDefault()
        const { students } = this.props

        const colors = ['red', 'yellow', 'green']
        const percentages = [53, 28, 19]
        const percentage_colors = this.generatePercentageColor(colors, percentages)

        let pickedColor = percentage_colors[Math.floor(Math.random() * percentage_colors.length)]

        let selectedStudents = students.filter(student => student.evaluations[0].color === pickedColor)

        let chosenStudent = selectedStudents[Math.floor(Math.random() * selectedStudents.length)]

        if (!chosenStudent) {
            alert("need more evaluations")
        } else {
            alert(chosenStudent.firstName + ' ' + chosenStudent.lastName)
        }
    }

    state = {}

    handleClick = (e) => {
        e.preventDefault()
        
    }


    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            batch: this.props.batch.id,
            [name]: value
        })
    };

    render() {
        return (
            <form onClick={this.handleClick}>
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="askQuestion"
                    onClick={this.randomStudent}

                >
                    ASK ANOTHER QUESTION!
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        batch: state.batch
    }
}

export default connect(mapStateToProps)(AskAnotherQuestion)
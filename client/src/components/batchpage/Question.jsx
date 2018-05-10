import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import { askQuestion } from '../../actions/batches'

const colors = [
    {
        person:"Student 1",
        color: "red",
        chance: 0.53
    },
    {
        person:"Student 2",
        color: "yellow",
        chance: 0.28
    },
    {
        person:"Student 3",
        color: "green",
        chance: 0.19
    }
];


class AskQuestion extends PureComponent {

    state = {}

    handleClick = (e) => {
        e.preventDefault()
        this.props.askQuestion(this.state)
    }


    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            batch: this.props.batch.id,
            [name]: value
        })
    };

    render() {

        function getColor(random) {
            for (var i = 0; i < colors.length; i++) {
                var color = colors[i];
                if (random < color.chance) {
                    return color.color;
                }
                random -= color.chance;
            }
        }

        document.body.addEventListener("click", () => {
            const random = Math.random(),
                color = getColor(random);

            console.log(random);
            console.log("pick a " + color + " student!");
        })

        return (
            <form onClick={this.handleClick}>
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="askQuestion"
                >
                    ASK QUESTION!
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

export default connect(mapStateToProps, { askQuestion })(AskQuestion)
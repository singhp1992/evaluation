import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import { askQuestion } from '../../actions/batches'

class AskQuestion extends PureComponent {

    state = {}

    handleSubmit = (e) => {
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
        const colors = [
            {
                color: "red",
                chance: 0.53
                //percent chance they'll 'win'
            },
            {
                color: "yellow",
                chance: 0.28
            },
            {
                color: "green",
                chance: 0.19
            }
        ];

        document.body.addEventListener("click", function () {
            const random = Math.random(),
                color = getColor(random);

            console.log(random);
            console.log(color + " student picked");
        })

        function getColor(random) {
            for (var i = 0; i < colors.length; i++) {
                var color = colors[i];
                if (random < color.chance) {
                    return color.color;
                }
                random -= color.chance;
            }
        }

        return (
            <form onSubmit={this.handleSubmit}>
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
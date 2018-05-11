import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';

class AskQuestion extends PureComponent {

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
        const colors = [
            {
                person: "Rebecca",
                color: "red",
                chance: 0.53
                //0.00 - 0.53
            },
            {
                person: "Simi",
                color: "yellow",
                chance: 0.28
                //0.54 - 0.81
            },
            {
                person: "Joey",
                color: "green",
                chance: 0.19
                //0.82-0.99999
            }
        ];

        function getColor(random) {
            for (var i = 0; i < colors.length; i++) {
                var colorOne = colors[i];
                if (random < colorOne.chance) {
                    return colorOne.person;
                }
                random -= colorOne.chance;
            }
        }

        document.body.addEventListener("click", () => {
            const random = Math.random(),
                color = getColor(random);

            console.log(random);
            console.log("Ask "+ color + " a question!");
        })

        return (
            <form onClick={this.handleClick}>
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="askQuestion"
                >
                    ASK A QUESTION!
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

export default connect(mapStateToProps)(AskQuestion)
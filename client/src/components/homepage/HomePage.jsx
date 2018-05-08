import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBatches } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewBatch from './NewBatch'
import Paper from 'material-ui/Paper'

class HomePage extends PureComponent {

    componentWillMount() {
        this.props.getBatches(this.props.match.params.id)
        }

    // sendResponse = (response) => {
    //     this.props.sendResponse(response)
    // }

    // handleSubmit = 
    render() {
        const { batches } = this.props
        console.log(batches.batchNumber)
        return (
            <Paper className="outer-paper">
                <h1>Home Page</h1>
                <NewBatch />
                {batches.map(batch =>
                    <div className="batch">
                        <Link to={`/batches/${batch.id}`}><h2> {batch.id} </h2></Link>
                       {/* {batch.batchNum} */}
                    </div>
                )}
            </Paper>
        )
        
    }
}

const mapStateToProps = (state) => ({
    batches: state.batches
})

export default connect(mapStateToProps, { getBatches })(HomePage)
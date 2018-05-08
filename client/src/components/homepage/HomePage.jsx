import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBatches } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewBatch from './NewBatch'
import Paper from 'material-ui/Paper'

class HomePage extends PureComponent {

    componentWillMount() {
        this.props.getBatches()
        }
    //this.props.match.params.id
    // sendResponse = (response) => {
    //     this.props.sendResponse(response)
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.sendResponse(response)
    // }
    render() {
        const { batches } = this.props
        return (
            <Paper className="outer-paper">
                <h1>Home Page</h1>
                <NewBatch />
                {batches.map(batch =>
                    <div className="batch">
                        <Link to={`/batches/${batch.batchNumber}`}><h2> {batch.batchNumber} </h2></Link>
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
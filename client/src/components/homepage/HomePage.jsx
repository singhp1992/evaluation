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


    render() {
        const {batches}= this.props
        return (
            <Paper className="outer-paper" >
                <h1>Home Page</h1>
                <NewBatch />
                {batches.map((batch, index) =>
                    <div className="batch" key={index}>
                        <Link to={`/batches/${batch.batchNumber}`}><h2> Batch #{batch.batchNumber} Start Date: {batch.startDate} End Date: {batch.endDate} </h2></Link>
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
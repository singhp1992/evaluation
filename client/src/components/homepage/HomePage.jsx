import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBatches } from '../../actions/batches'
import { Link } from 'react-router-dom'
import NewBatch from './NewBatch'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'


class HomePage extends PureComponent {

    componentWillMount() {
        this.props.getBatches()
        }


    render(batch, index) {
        const {batches}= this.props
        return (
            <Grid className='outer-paper'>
                <h1>Home Page</h1>
                <NewBatch />
                {batches.map((batch, index) =>
                    <Card className="batch-card">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Batch #{batch.batchNumber}
                            </Typography>
                            <Typography component="p">
                                Start Date: {batch.startDate}<br />
                                End Date: {batch.endDate}
                            </Typography>
                        </CardContent>
                            <CardActions> 
                                <Link to={`/batches/${batch.batchNumber}`} style={{ textDecoration: 'none' }}> 
                                    <Button
                                        size="small"
                                        color="secondary"
                                        variant="raised"
                                    > Select
                                    </Button>
                                </Link>
                            </CardActions>
                    </Card>
                )}
            </Grid>
        )
        
    }
}

const mapStateToProps = (state) => ({
    batches: state.batches
})

export default connect(mapStateToProps, { getBatches })(HomePage)
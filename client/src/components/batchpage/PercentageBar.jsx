import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './students.css'

class PercentageBar extends PureComponent {

    render() {

        return (
            <div id="myProgress">
                <div id="myBar">33%
          <div id='mySecBar'>33%
            <div id='myThirdBar'>33%
            </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        students: state.students,
    }
}

export default connect(mapStateToProps)(PercentageBar);
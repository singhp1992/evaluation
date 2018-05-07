import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router'
import { userId } from '../../jwt'
import { connect } from 'react-redux'

// export const userId = jwt => jwtData(jwt).id

const TopBar = (props) => {
    const { location, history, user } = props

    return (
        <AppBar position="absolute" style={{
            zIndex: 10,
            backgroundColor: '#F50057'
        }}>
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                    Test Your Knowledge
        </Typography>
                {
                    user &&
                    <Button color="inherit">{user.firstName}</Button>
                }

                {
                    location.pathname.indexOf('signup') > 0 &&
                    <Button color="inherit" onClick={() => history.push('/login')}>Log In</Button>
                }
                {
                    location.pathname.indexOf('login') > 0 &&
                    <Button color="inherit" onClick={() => history.push('/signup')}>Sign Up</Button>
                }
                {
                    location.pathname.indexOf('quizzes/') > 0 &&
                    <Button color="inherit" onClick={() => history.push('/quizzes')}>All Batches</Button>
                }
                {
                    /quizzes$/.test(location.pathname) &&
                    <Button color="inherit" onClick={() => history.push('/logout')}>Log Out</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    user: state.currentUser && state.users &&
        state.users[userId(state.currentUser.jwt)]
})

export default withRouter(
    connect(mapStateToProps)(TopBar)
)
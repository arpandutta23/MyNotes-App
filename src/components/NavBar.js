import React from 'react'
import {Link, Route} from 'react-router-dom'

import Home from './Home'
import Register from  './Register'
import Login from './Login'

import Mynotes from './Mynotes'
import Account from './Account'

const NavBar = (props) => {
    const {userLoggedIn, handleAuth } = props


    return(
        <div>
            <ul>
               <li> <Link to="/"> Home </Link> </li>
                {userLoggedIn ? (
                    <div>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/mynotes">MyNotes</Link></li>
                        <li><Link onClick={()=>{
                            alert('successfully logged out')
                            handleAuth()
                            //props.history.push('/')
                        }}>Logout</Link></li>
                    </div>
                ) : (
                    <div>
                        <li><Link to="register">Register</Link> </li>
                        <li><Link to="login"> Login</Link></li>
                    </div>
                )}
                 
            </ul>

            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/login" render={(props)=>{
                return <Login
                          {...props}
                          handleAuth={handleAuth}
                />
            }}/>
            <Route path="/mynotes" component={Mynotes} exact />
            <Route path="/account" component={Account} exact />
        </div>
    )
}

export default NavBar
import React, {useState} from 'react'
import NavBar from './components/NavBar'



const App = (props) => {
    const[userLoggedIn, setUserLoggedIn] = useState(false)

    const handleAuth = () => {
        setUserLoggedIn(!userLoggedIn)
    }

    return(
        <div>
            <h1> User Auth </h1>
            <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
            

          
        </div>
    )
}

export default App
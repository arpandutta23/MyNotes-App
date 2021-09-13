import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email:email,
            password:password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
           .then((response)=>{
               //console.log(formData)
            const result = response.data
            if(result.hasOwnProperty('error')){
                alert(result.error)
            }else{
                alert('succesfully logged in')
                localStorage.setItem('token',result.token) 
                props.history.push('/')
                props.handleAuth()

            }

           })
           .catch((err)=>{
               console.log(err)
           })


    }

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    return(
        <div>
            <h2> Login Component </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="enter mail"
                    value={email}
                    onChange={handleChange}
                    name="email"
                /><br/>

                <input 
                    type="text"
                    placeholder="enter password"
                    value={password}
                    onChange={handleChange}
                    name="password"
                /><br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login
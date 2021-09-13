import React, {useState} from 'react'
import axios from 'axios'

const NotesForm = (props) =>{
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')

    const { formSubmit } = props


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title:title,
            body:body
        }
        //console.log(formData)
        formSubmit(formData)
        setTitle('')
        setBody('')
    }

    const handleChange = (e) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            if(e.target.name === "body"){
                setBody(e.target.value)
            }    

        }

    }

  

    return(
        <div>
            <h2>Add Note </h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input 
                   type="text" 
                   value={title} 
                   placeholder="Enter a text here"
                   onChange={handleChange}
                   name="title"
                />
                <br/>

                <label>Body</label><br/>
                <textarea 
                   type="text" 
                   value={body} 
                   placeholder="Enter a text here"
                   onChange={handleChange}
                   name="body"/>
                <br/>
                <input type="submit" value="save"/>
            </form>

        </div>
    )
}

export default NotesForm
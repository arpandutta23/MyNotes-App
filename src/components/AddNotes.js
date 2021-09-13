import React from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'

const AddNotes = (props) => {
    const { addNote } = props

    const formSubmit = (details) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', details, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                //console.log(response.data)
                addNote(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return(
        <div>
            <NotesForm 
                formSubmit={formSubmit}
            />

        </div>
        
    )
}
export default AddNotes
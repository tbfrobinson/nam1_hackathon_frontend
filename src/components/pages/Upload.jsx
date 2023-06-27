import axios from 'axios'
import { useState } from 'react'
import "./Upload.css"
import { redirect } from 'react-router-dom'

export default function Upload({ currentUser }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [pet, setPet] = useState('Dog')
    const [image, setImage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const formData = new FormData()

            formData.append('userId', currentUser.id)
            formData.append('title', title)
            formData.append('image', image)
            formData.append('content', content)
            formData.append('petType', pet)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, formData)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="postFormContainer">
            <form 
            className="postForm"
                onSubmit={handleSubmit}
                encType='multipart/form-data'
            >
                <input 
                    type="file" 
                    id='image'
                    onChange={e => setImage(e.target.files[0])}
                    />
                <label>Select a category: </label>
                <select id='petType' onChange={e => setPet(e.target.value)}>
                    <option value='Dog'>Dog</option>
                    <option value='Cat'>Cat</option>
                    <option value='Bird'>Bird</option>
                    <option value='Fish'>Fish</option>
                </select>
                <input 
                    type='text'
                    id='title'
                    placeholder='Title'
                    onChange = {e => setTitle(e.target.value)}
                    />
                <textarea 
                    id='content'
                    placeholder='Content'
                    onChange={e => setContent(e.target.value)}
                    />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}
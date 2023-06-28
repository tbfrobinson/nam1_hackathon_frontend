import axios from 'axios'
import { useState } from 'react'
import "./Upload.css"
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div className="postFormContainer">
            <div className='topBar'><span className='back' onClick={goBack}>Back</span></div>
            <form 
            className="postForm"
                onSubmit={handleSubmit}
                encType='multipart/form-data'
            >
                <div className='communitySeparator'>
                    <select 
                        className='petType' 
                        id='petType' 
                        onChange={e => setPet(e.target.value)}>
                        <option value=''>Community</option>
                        <option value='Dog'>Dog</option>
                        <option value='Cat'>Cat</option>
                        <option value='Bird'>Bird</option>
                        <option value='Fish'>Fish</option>
                    </select>
                </div>
                <div className='titleSeparator'>
                    <input 
                        className='title'
                        type='text'
                        id='title'
                        placeholder='Add your title'
                        onChange = {e => setTitle(e.target.value)}
                        />
                </div>
                <div className='contentSeparator'>
                    <textarea 
                        className='content'
                        id='content'
                        placeholder='Add some text...'
                        onChange={e => setContent(e.target.value)}
                        />
        
                </div>
                <input 
                    className='imageUpload'
                    type="file" 
                    id='image'
                    onChange={e => setImage(e.target.files[0])}
                    />

                <button className='submit'onClick={handleSubmit}>Post</button>
            </form>
        </div>
    )

}
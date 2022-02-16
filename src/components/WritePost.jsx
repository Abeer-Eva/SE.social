import React, { useState } from 'react'
import '../style/WritePosts.css'

const WritePost = () =>{

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        setInput('')
        setImageUrl('')

    }


    return(
        <section className='messageSender'>
            <article className="messageSender-typeBox">
                <form >
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className='messageSender-input'
                    placeholder={`What's on your mind`}/>
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                    placeholder='image URL (optional)'  />
                </form>
            </article>
            <button onClick={handleSubmit} type='submit'>Send</button>
        </section>
    )
}

export default WritePost
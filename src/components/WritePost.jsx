import React, { useState } from 'react'
import '../style/WritePosts.css'
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const WritePost = () =>{

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        setInput('')
        setImageUrl('')

    }


    return(
        <section className='messagesender'>
            <article className="messagesender__typeBox">
                <form >
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className='messagesender__input'
                    placeholder={`What's on your mind`}/>
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                    placeholder='image URL (optional)'  />
                </form>
            </article>
            <button onClick={handleSubmit}   className="messagesender__send" type='submit'><SendRoundedIcon/></button>
        </section>
    )
}

export default WritePost
import React from 'react'

const CreatePost = () => {
    return (
        <div className='create-post'>
            <form action="#">
                <caption>ADD POST</caption>
                <textarea className='form-control' rows='3'/>
                <button className='btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default CreatePost

import React, { useState } from 'react';
import Axios from 'axios';

const CreatePost = () => {
    const [content, setContent] = useState('');
    const [postData, setPostData] = useState([]);

    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const sendPostData = (e) => {
        e.preventDefault();

        if (!content) {
            alert("Field is empty!");
        } else {
            const postDataObj = {
                content: content
            };

            Axios.post('http://localhost:5000/posts', postDataObj)
                .then(response => {
                    console.log(response.data);
                    postData.push(response.data);
                    setPostData(postData.map((object) => {
                        return object
                    }));
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className='create-post'>
            <h3>ADD POST</h3>
            <form action="#">
                <textarea className='form-control' rows='3' type='text'
                    value={content} onChange={contentHandler} />
                <button className='btn-primary' type='submit'
                    onClick={sendPostData}>Add</button>
            </form>
        </div>
    )
}

export default CreatePost
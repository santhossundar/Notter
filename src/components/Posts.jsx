import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Post from './Post';

const Posts = () => {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/posts')
            .then(response => {
                setPostData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='posts container-fluid'>
            {postData.map(item => {
            return <Post content={item.content} key={item.id}/>
        })}
        </div>
    )
}

export default Posts

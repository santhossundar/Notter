import React, { useState } from 'react'
import CreatePost from './CreatePost'

const NavBar = () => {
    const [view, setView] = useState(false);    
    const [btnText, setBtnText] = useState('+');

    const showCreatePost = () => {
        setView(!view);

        if (view !== true) {
            setBtnText('x');
        } else {
            setBtnText('+');
        }
    }

    return (
        <>
        <nav className="navbar container-fluid">
                <span className="navbar-brand mb-0 pl-3 h1">
                    Notter
                </span>
                <button className="btn-primary btn-add-new-post" onClick={() => {showCreatePost()}}> {btnText} </button>
        </nav>
        
        {view ? <CreatePost/>:this}
        </>
    )
}

export default NavBar

import React, { useState } from 'react';
import CreatePost from './CreatePost';
import { HiMenu } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from 'react-icons/ai'

const NavBar = () => {
    const [view, setView] = useState(false);
    const [btnIconText, setBtnIconText] = useState('IoIosAddCircleOutline');

    const showCreatePost = () => {
        setView(!view);

        if (view !== true) {
            setBtnIconText('AiOutlineCloseCircle');
        } else {
            setBtnIconText('IoIosAddCircleOutline');
        }
    }

    return (
        <>
            <nav className="navbar container-fluid">
                <HiMenu size={30} />
                <span className="navbar-brand mb-0 pl-3 h1">
                    Notter
                </span>
                {view?<AiOutlineCloseCircle size={30} onClick={showCreatePost}/>:<IoIosAddCircleOutline size={30} onClick={showCreatePost}/>}
            </nav>

            {view ? <CreatePost /> : this}
        </>
    )
}

export default NavBar

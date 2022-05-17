import React from 'react';
// Styles
import './Searcher.scss'
// Assets
import {MdNotificationsNone, MdOutlineBookmarkBorder, MdOutlineSearch} from 'react-icons/md'

const Searcher = () => {
    return (
        <nav className="Searcher">
            <form action="" className="Searcher_bar">
                <MdOutlineSearch className="icon"/>
                <input type="search" name="id" placeholder='Search resources'/>
            </form>

            <div className="Searcher_notifications">
                <button className="button icon"><MdNotificationsNone className="icon"/></button>
                <button className="button icon"><MdOutlineBookmarkBorder className="icon"/></button>
            </div>

            <div className="Searcher_actions">
                <button className="button ghost">New Post</button>
            </div>
        </nav>
    );
};

export default Searcher;
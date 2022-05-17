import React from 'react';
// Styles
import './UserButton.scss'
// Data
import { user } from "./data";

const UserButton = () => {
    return (
        <button className="UserButton">
            <img src={user.avatar} className="user_avatar"/>
            <p className="user_description">
                <span className="description_name">{user.name}</span>
                <span className="description_title">{user.title}</span>
            </p>
        </button>
    );
};

export default UserButton;
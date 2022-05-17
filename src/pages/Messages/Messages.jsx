import React from 'react';
// Styles
import './Messages.scss'
// Data
import { content } from "./data";

const Messages = () => {
    return (
        <section id="Messages">
            <header>
                <h1>{content.title}</h1>
            </header>
        </section>
    );
};

export default Messages;
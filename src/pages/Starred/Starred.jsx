import React from 'react';
// Styles
import './Starred.scss'
// Data
import { content } from "./data";

const Starred = () => {
    return (
        <section id="Starred">
            <header>
                <h1>{content.title}</h1>
            </header>
        </section>
    );
};

export default Starred;
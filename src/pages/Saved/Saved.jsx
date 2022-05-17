import React from 'react';
// Styles
import './Saved.scss'
// Data
import { content } from "./data";

const Saved = () => {
    return (
        <section id="Saved">
            <header>
                <h1>{content.title}</h1>
            </header>
        </section>
    );
};

export default Saved;
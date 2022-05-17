import React from 'react';
// Styles
import './DetailsList.scss'
// Assets
import { MdKeyboardArrowRight } from 'react-icons/md';

const DetailsList = ({collection}) => {
    return (
        <ul className="DetailsList">
            {collection.map((colection) => (
                <figure role="listitem" className="DetailsList_item" key={colection.id}>
                    <picture className="avatar">
                        <img src={colection.cover.src} alt={colection.cover.alt} />
                    </picture>
                    <figcaption>
                        <h4>{colection.title}</h4>
                        <p>{colection.subtitle}</p>
                    </figcaption>
                    <button className="button icon"><MdKeyboardArrowRight/></button>
                </figure>
            ))}
        </ul>
    );
};

export default DetailsList;
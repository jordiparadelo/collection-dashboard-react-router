import React from "react";
import { Link } from "react-router-dom";
// Data
import { resources } from "./data";
// Styles
import "./ResourcesList.scss";

const ResourcesList = () => {
  return (
    <ul className="ResourcesList">
      {resources.map((resource) => {
        const linkTo = `${resource.id}-${resource.title}`;

        return (
          <Link
            to={`/resources/${linkTo}`}
            id={resource.id}
            key={linkTo}
            style={{ "--backgroundColor": `${resource.color}` }}
            role="listitem"
            className="ResourcesList_item"
          >
            <figure>
              <figcaption>
                <header>
                  <h3>{resource.title}</h3>
                </header>
                <p>{resource.content}</p>
              </figcaption>
              <picture>
                <img src="" alt="" />
              </picture>
            </figure>
          </Link>
        );
      })}
    </ul>
  );
};

export default ResourcesList;

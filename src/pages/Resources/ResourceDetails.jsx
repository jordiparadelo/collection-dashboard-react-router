import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// Styles
import "./ResourceDetails.scss";
// Assets
import { MdCollectionsBookmark, MdEast, MdOutlineClose, MdOutlineShare, MdStarOutline, MdWest } from "react-icons/md";
// Components
import { DetailsCover, DetailsList } from "../../components";
// Data
import { resources } from "./data";

const ResourceDetails = () => {
  let navigate = useNavigate();
  const { resourcesId } = useParams();
  const RESOURCE_ID = resourcesId.split("-")[0];
  const resource = resources.find(({ id }) => id === RESOURCE_ID);

  console.log(resource)

  return (
    <aside className="ResourceDetails">
        <button
          className="button icon close"
          onClick={() => navigate("/resources")}
        >
          <MdOutlineClose />
        </button>
      <DetailsCover covers={resource.collection} />
      <header className="ResourceDetails_header">
        <h3>{resource.title}</h3>
        <p>{resource.subtitle}</p>
      </header>
      <DetailsList collection={resource.collection} />
      <footer className="ResourceDetails_footer">
          <div className="share-links">
              <button className="button icon"><MdCollectionsBookmark className="icon"/></button>
              <button className="button icon"><MdOutlineShare className="icon"/></button>
              <button className="button icon"><MdStarOutline className="icon"/></button>
          </div>
          <div className="pagination">
              <button className="button icon"><MdWest className="icon"/></button>
              <button className="button icon"><MdEast className="icon"/></button>
          </div>
      </footer>
    </aside>
  );
};

export default ResourceDetails;

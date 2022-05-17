import React from "react";
import { Outlet } from "react-router-dom";
// Styles
import "./Resources.scss";
// Data
import { content } from "./data";
// Layout
import { Searcher } from "../../layouts";
import ResourcesList from "./ResourcesList";
// Assets
import { MdExpandMore } from "react-icons/md";

const Resources = () => {
  return (
    <section id="Resources">
      <div className="wrapper">
        <Searcher />
        <header>
          <h1 className="header_title">{content.title}</h1>
          <div className="header_actions">
            <button className="button secondary">This week <MdExpandMore className="icon"/></button>
          </div>
        </header>
        <ResourcesList />
      </div>
      <Outlet />
    </section>
  );
};

export default Resources;

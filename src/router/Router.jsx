import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { App, Resources, Starred, Saved, Messages } from "../pages";
import ResourceDetails from "../pages/Resources/ResourceDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/resources" element={<Resources />}>
              <Route path=":resourcesId" element={<ResourceDetails />}/>
          </Route>
          <Route path="/starred" element={<Starred />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Outlet } from "react-router-dom";
// Layouts
import { Layout, SideNav } from "../layouts";

const App = () => {
  return (
    <Layout>
      <SideNav />
      <hr />
      <Outlet />
    </Layout>
  );
};

export default App;

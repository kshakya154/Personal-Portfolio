import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutNav from "./components/NavLinks/AboutNav";
import ContactNav from "./components/NavLinks/ContactNav";
import SkillsNav from "./components/NavLinks/SkillsNav";
import ProjectsNav from "./components/NavLinks/ProjectsNav";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutNav /> },
      { path: "skills", element: <SkillsNav /> },
      { path: "projects", element: <ProjectsNav /> },
      { path: "contact", element: <ContactNav /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

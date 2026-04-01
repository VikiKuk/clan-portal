import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import ProjectPage from "../pages/Project/ProjectPage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects/:id", element: <ProjectPage /> },
]);
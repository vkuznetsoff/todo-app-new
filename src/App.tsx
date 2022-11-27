import React from "react";

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Project from "./components/Project/Project";

import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:projectID" element={<ProjectList />} />

          {/* <Route path="/project" element={<Project project: IProject= />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

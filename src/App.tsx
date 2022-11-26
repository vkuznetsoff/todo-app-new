import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaslList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

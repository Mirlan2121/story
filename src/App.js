import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import Country from "./components/county/Country";
import Task from "./components/task/Task";
import Portfolio from "./components/portfolio/Portfolio";
import Layout from "./components/layout/Layout";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
          <Route path="/Country" element={<Country />} />
          <Route path="/Tasks" element={<Task />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

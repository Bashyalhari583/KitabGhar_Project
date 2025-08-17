import React from "react";
import Home from "./home/Home";
import { Routes,Route } from "react-router-dom";
import Courses from "./courses/Courses";


function App() {
  return (
  <>
  {/* <Home />
  <Course /> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      {/* Add more routes as needed */}
    </Routes>

    </>
)}

export default App;

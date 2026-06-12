import React from "react";
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/search" />
        <Route path="*" />
      </Routes>
      <hr />
    </div>
  );
}

export default App;

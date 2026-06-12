import React from "react";
import { Routes, Route, } from "react-router";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/search" element = {<SearchPage/>}/>
        <Route path="*" element = {<NotFound/>} />
      </Routes>
      <hr />
    </>
  );
}

export default App;

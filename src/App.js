import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./layouts/Navbar";


function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    </BrowserRouter>
    </>
  );
}

export default App;

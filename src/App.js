import './App.css';
import React from 'react';
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drop from "./Components/Drop";

import Trans from "./Components/Trans";
import SpeechRecog from "./Components/SpeechRecog";
import About from './pages/about';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";







function App() {
  return (
   <><Router><Header/><Routes><Route path='/about' element={<About/>} /></Routes></Router><br></br><br></br><br></br><br></br>
<br></br><br></br><Trans/>
   <Drop/><br></br><br></br>   <br></br><br></br>
   <SpeechRecog/>
   

   
   </>  

  );
}

export default App;

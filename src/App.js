// src/App.js
import React, { useEffect,useState } from "react";
import MyNav from "./components/MyNav";
import Slider from "./components/Slider";
import "./App.css";
import "./styles.css"


function App() {
  const [navHeight, setNavHeight] = useState(0);
   useEffect(() => {
    document.title = "Developer Portfolio";
  }, []); 


  return (
    <div className="App">
      <MyNav setNavHeight={setNavHeight} />
      <Slider topSpacing={navHeight} />
    </div>
  );
}

export default App;

import Topbar from "./Components/Topbar";
import Image from "./Components/Image";
import About from "./Components/About";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import JoinUs from "./Components/JoinUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />

      <Router>
        <header className="App-header">
       
          <Routes>
            {" "}
            <Route path="/" element={<Image />}></Route>
         
            <Route path="/join-us" element={<JoinUs />}></Route>
          </Routes>
         
        </header>
      </Router>
    </div>
  );
}

export default App;

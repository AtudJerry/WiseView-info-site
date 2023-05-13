import Topbar from "./Components/Topbar"
import Image from "./Components/Image";

import './App.css';
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <header className="App-header">
      <Topbar/>
      {/* <Login/> */}
      <Image/>
      
      </header>
    </div>
  );
}

export default App;

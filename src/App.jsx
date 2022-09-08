import Hackathon from "./Pages/Hackathon";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Tables from "./Pages/Tables_Admin";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Hackathon</Link>
          </li>
          <li>
            You can create, edit and delete the Hackathons{" "}
            <Link to="/tables">here</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Hackathon />}></Route>
        <Route path="/tables" element={<Tables />}></Route>
      </Routes>
    </div>
  );
}

export default App;

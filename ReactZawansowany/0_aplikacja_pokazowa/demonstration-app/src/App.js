import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="user" element={<User />} >
              <Route path=":id" element={<User />} />
          </Route>
          <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

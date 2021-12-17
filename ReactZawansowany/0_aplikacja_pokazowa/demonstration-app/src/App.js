import './App.css';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "./components/Home";
import {Component} from "react";

class About extends Component {
    render() {
        return null;
    }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Home />} />
        <Router to="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

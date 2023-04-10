import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Receiver from "./receiver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
    </Router>
  );
}

export default App;

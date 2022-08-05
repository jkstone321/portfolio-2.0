import Home from "./pages/homepage";
import About from "./pages/aboutme";
import Projects from "./pages/project";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

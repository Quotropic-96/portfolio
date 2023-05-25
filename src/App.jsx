import { Routes, Route, useLocation } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";
import TestColor from "./views/TestColor";
import { AnimatePresence } from "framer-motion";
import { useViewportHeight } from "./hooks/useViewPortHeight";

function App() {
  const location = useLocation();
  const vh = useViewportHeight();

  const appHeight = { height: `${vh}px` };

  return (
    <div className="App" style={appHeight}>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestColor />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

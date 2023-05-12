import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import AboutUs from './views/AboutUs';
import TestColor from './views/TestColor';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<TestColor /> } />
      </Routes>
    </div>
  )
}

export default App;

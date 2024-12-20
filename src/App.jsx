import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Blogs from './components/Blogs'; // Blog preview page
import BlogDetails from './components/BlogDetails'; // Individual blog page
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-pink-200 to-purple-300">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} /> {/* Blog preview page */}
            <Route path="/blogs/:id" element={<BlogDetails />} /> {/* Individual blog page */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <div className="main-content">
        <SideNav />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;


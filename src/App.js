import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';
import 'aos/dist/aos.css';

function App() {
  return (
    <>
    <Navbar />

    <Home />

    <Features />

    <About />

    <Testimonial />

    <Footer />
    </>
  );
}

export default App;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Framework from "./components/Framework";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Framework />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";

function App() {
  return (
    <div className="bg-[#f0ede6] text-[#306398]">
      <Navbar />
      <Hero />
      <Certification />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

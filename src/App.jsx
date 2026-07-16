import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Resume from "./components/sections/Resume/Resume";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import ScrollProgress from "./components/ui/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ui/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;
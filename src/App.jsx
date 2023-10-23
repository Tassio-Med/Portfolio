import About from "./Components/About";
import Nav from "./Components/Navbar"
import Hero from "./Components/Hero";
import Carousel from "./Components/Carousel";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer"

function App() {
  return (
      <div className="bg-neutral-900">
        <Nav/>
        <Hero/>
        <About/>
        <Carousel/>
        <ContactMe/>
        <Footer/>
      </div>
  );
}

export default App;
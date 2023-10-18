import About from "./Components/About";
import Nav from "./Components/Navbar"
import Hero from "./Components/Hero";
import Carousel from "./Components/Carousel";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer"

function App() {
  return (
      <div className="bg-[#001021]">
        <Nav/>
        <Hero/>
        <Carousel/>
        <About/>
        <ContactMe/>
        <Footer/>
      </div>
  );
}

export default App;
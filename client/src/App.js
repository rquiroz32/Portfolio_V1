import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio/Portfolio";



function App() {
  return (
    <div className="App">
   
      <Navbar/>
      
     
      <Hero/>
   
      <About/>
   
      <Portfolio/>
      <Contact/>
     

      <Footer/>
     
    </div>
  );
}

export default App;

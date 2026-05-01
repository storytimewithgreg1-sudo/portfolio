import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";

function App() {
 
  return (
    <div className='min-h-screen bg-base-200'>
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>

    </div>
  )
}

export default App

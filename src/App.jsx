
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection"
import About from  "./components/About/About"
import Skills from "./components/Skils/Skills"
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App

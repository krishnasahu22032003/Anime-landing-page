import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Story from "./components/Story"




function App() {
  return (
    
<main className="min-h-screen w-screen overflow-x-hidden relative" >
  <Navbar/>
  <Hero/>
  <About/>
  <Features/>
  <Story/>
</main>

  )
}

export default App

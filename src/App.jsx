import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"




function App() {
  return (
    
<main className="min-h-screen w-screen overflow-x-hidden relative" >
  <Navbar/>
  <Hero/>
  <About/>
  <Features/>
</main>

  )
}

export default App

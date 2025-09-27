import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero key={110}/>
      <Services/>
    </div>
  )
}

export default App

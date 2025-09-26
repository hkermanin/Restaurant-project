import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero key={110}/>
    </div>
  )
}

export default App

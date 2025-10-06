import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Download from "./components/Download/Download"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero key={110}/>
      <Services/>
      <Banner/>
      <Download/>
    </div>
  )
}

export default App

import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Download from "./components/Download/Download"
import SliderApp from "./components/Slider/SliderApp"
import Footer from "./components/Footer/Footer"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"


function App() {

  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  },[])


  return (
    <div>
      <Navbar/>
      <Hero key={110}/>
      <Services/>
      <Banner/>
      <Download/>
      <SliderApp/>
      <Footer/>
    </div>
  )
}

export default App

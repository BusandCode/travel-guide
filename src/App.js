import React from "react"
import Package from "./components/Package/Package"
import Header from "./components/Header/Header"
import About from "./components/about/About"
import Services from "./components/Services/Services"
import Destination from "./components/Destination/Destination"
import Booking from "./components/Booking/Booking"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
  <div className="bg-slate-200">
    <Header />
    <About />
    <Services />
    <Destination />
    <Package />
    <Booking />
    <Footer />
  </div>
  )
}

export default App

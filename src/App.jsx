import { DarkModeProvider } from "./components/DarkModeContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./sections/About"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Popular from "./sections/Popular"
import Properties from "./sections/Properties"
import Services from "./sections/Services"

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <Popular />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  )
}
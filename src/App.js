import { useState, useEffect } from "react"
import Header from "./components/js/Header"
import Footer from "./components/js/Footer"
import WhatsAppButton from "./components/js/WhatsAppButton"
import SplashScreen from "./components/js/SplashScreen"
import Home from "./components/js/pages/Home"
import Services from "./components/js/pages/Services"
import About from "./components/js/pages/About"
import Portfolio from "./components/js/pages/Portfolio"
import Contact from "./components/js/pages/Contact"
import "./components/css/App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "services":
        return <Services />
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
{/* 
      <img 
          src={require('./assets/marca.png')}
          alt="Marca d'água" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            opacity: 0.2, 
            zIndex: 9999,
            pointerEvents: 'none' 
          }} 
        /> */}



    </div>
  )
}

export default App

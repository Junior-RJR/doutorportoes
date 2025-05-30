import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../css/Header.css"

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Portfólio" },
    { id: "contact", label: "Contato" },
  ]

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Contact Bar */}
      {/* <div className="top-bar">
        <div className="container"> */}
          {/* <div className="top-bar-content">
            <div className="contact-info">
              <span>📞 (11) 99999-9999</span>
              <span>🕒 Atendimento 24h</span>
            </div> */}
            {/* <div className="emergency-info">
              <span>Emergências: (11) 88888-8888</span>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => handleMenuClick("home")}>
              <div className="logo-icon">DP</div>
              <div className="logo-text">
                <h1>Doutor Portões</h1>
                <span>Especialistas em Automação</span>
              </div>
            </div>

            <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button className="cta-button" onClick={() => handleMenuClick("contact")}>
              Orçamento Grátis
            </button>

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

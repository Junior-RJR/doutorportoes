import { useState } from "react"
import "../css/Header.css"

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <header className="header">
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
            <div className="nav-gate-top"></div>
            <div className="nav-content">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <button className="cta-button" onClick={() => handleMenuClick("contact")}>
            Orçamento Grátis
          </button>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

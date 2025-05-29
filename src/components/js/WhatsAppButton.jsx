import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import "../css/WhatsAppButton.css"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"
    const message = "Olá! Gostaria de solicitar um orçamento para portão automático."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className={`whatsapp-button ${isVisible ? "visible" : ""}`}>
      <button onClick={handleWhatsAppClick} aria-label="Falar no WhatsApp">
        <div className="whatsapp-icon">
          <MessageCircle size={24} />
        </div>
        <div className="whatsapp-text">
          <span>Fale Conosco</span>
          <small>WhatsApp</small>
        </div>
      </button>
      <div className="pulse-ring"></div>
    </div>
  )
}

export default WhatsAppButton

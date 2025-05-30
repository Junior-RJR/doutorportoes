import { useState, useEffect, useRef } from "react"
import { MessageCircle, Send } from "lucide-react"
import "../../css/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const contactRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const refs = [contactRef, locationRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = "5511999999999"

    const serviceName = formData.service
      ? document.querySelector(`option[value="${formData.service}"]`).textContent
      : "Não especificado"

    const message = `
*Solicitação de Orçamento - Doutor Portões*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${serviceName}
Mensagem: ${formData.message || "Olá! Gostaria de solicitar um orçamento."}
    `.trim()

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Entre em Contato</h1>
            <p>Solicite seu orçamento gratuito ou tire suas dúvidas</p>
          </div>
        </div>
      </section>

      <section className="contact-content" ref={contactRef}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              {/* <h2>Fale Conosco</h2>
              <p>
                Estamos prontos para atender você! Entre em contato através dos canais abaixo ou preencha o formulário
                ao lado.
              </p> */}

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h3>Telefone</h3>
                    <p>(11) 99999-9999</p>
                    <small>Segunda a Sexta: 8h às 18h</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🚨</div>
                  <div className="method-info">
                    <h3>Emergência</h3>
                    <p>(11) 88888-8888</p>
                    <small>24 horas por dia</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h3>E-mail</h3>
                    <p>contato@doutorportoes.com.br</p>
                    <small>Resposta em até 24h</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-info">
                    <h3>WhatsApp</h3>
                    <p>(11) 99999-9999</p>
                    <small>Atendimento rápido</small>
                  </div>
                </div>
              </div>

            </div>
              <div className="business-hours">
                <h3>Horário de Atendimento</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Segunda a Sexta:</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="hours-item">
                    <span>Sábado:</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="hours-item">
                    <span>Domingo:</span>
                    <span>Apenas emergências</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Solicite seu Orçamento</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Serviço de Interesse</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange}>
                    <option value="">Selecione um serviço</option>
                    <option value="instalacao">Instalação de Portão</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="reparo">Reparo de Emergência</option>
                    <option value="automacao">Automação</option>
                    <option value="modernizacao">Modernização</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades ou dúvidas..."
                  ></textarea>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary">
                    <Send size={18} />
                    Enviar por E-mail
                  </button>

                  <button type="button" onClick={handleWhatsAppSubmit} className="btn btn-whatsapp">
                    <MessageCircle size={18} />
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        {/* </div> */}
      </section>

      <section className="location-section" ref={locationRef}>
        <div className="container">
          <div className="section-header">
            <h2>Nossa Localização</h2>
            <p>Atendemos toda a região metropolitana de São Paulo</p>
          </div>

          <div className="location-content">
            <div className="location-info">
              <h3>Endereço</h3>
              <div className="address">
                <p>📍 Rua Forte de Iguatemi, 220</p>
                <p>Jardim Adutora, São Paulo - SP</p>
                <p>CEP: 05163-000</p>
              </div>

              <h3>Área de Atendimento</h3>
              <ul>
                <li>São Paulo - Capital</li>
                <li>Grande São Paulo</li>
                <li>ABC Paulista</li>
                <li>Alphaville</li>
                <li>Região dos Jardins</li>
                <li>Morumbi e Vila Olímpia</li>
              </ul>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4!2d-46.7!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a7%3A0x8b86c2e725c53e3a!2sRua%20Forte%20de%20Iguatemi%2C%20220%20-%20Jardim%20Adutora%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Doutor Portões - Rua Forte de Iguatemi, 220"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

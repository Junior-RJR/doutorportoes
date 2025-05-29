import { useState, useEffect, useRef } from "react"
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

    if (contactRef.current) observer.observe(contactRef.current)

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
              <h2>Fale Conosco</h2>
              <p>
                Estamos prontos para atender você! Entre em contato através dos canais abaixo ou preencha o formulário
                ao lado.
              </p>

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

                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossa Localização</h2>
            <p>Atendemos toda a região metropolitana de São Paulo</p>
          </div>

          <div className="location-content">
            <div className="location-info">
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

            <div className="map-placeholder">
              <div className="map-content">
                <h3>📍 São Paulo - SP</h3>
                <p>Atendimento em toda a região metropolitana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

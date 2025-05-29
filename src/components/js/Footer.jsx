import { Phone, Mail, MapPin, AlertTriangle, MessageCircle, Heart, ExternalLink } from "lucide-react"
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">DP</div>
              <div className="logo-text">
                <h3>Doutor Portões</h3>
                <span>Especialistas em Automação</span>
              </div>
            </div>
            <p>
              Mais de 15 anos de experiência em instalação, manutenção e reparo de portões automáticos com garantia de
              qualidade e excelência no atendimento.
            </p>
            <div className="footer-badges">
              <div className="badge">
                <span>🏆</span>
                <small>Empresa Certificada</small>
              </div>
              <div className="badge">
                <span>⭐</span>
                <small>5000+ Clientes</small>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li>Instalação de Portões</li>
              <li>Manutenção Preventiva</li>
              <li>Reparo de Emergência</li>
              <li>Automação Residencial</li>
              <li>Automação Comercial</li>
              <li>Modernização</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-item">
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="contact-item">
              <AlertTriangle size={18} />
              <span>(11) 88888-8888</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>contato@doutorportoes.com.br</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>São Paulo - SP</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Horário de Atendimento</h4>
            <div className="schedule">
              <div className="schedule-item">
                <span>Segunda a Sexta:</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="schedule-item">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="schedule-item">
                <span>Emergências:</span>
                <span>24 horas</span>
              </div>
            </div>

            <div className="social-section">
              <h5>Redes Sociais</h5>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-link">
                  <div className="social-icon">f</div>
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <div className="social-icon">ig</div>
                </a>
                <a href="#" aria-label="WhatsApp" className="social-link">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2024 Doutor Portões. Todos os direitos reservados.</p>
            <div className="developer-credit">
              <span>Feito com</span>
              <Heart size={16} className="heart-icon" />
              <span>por</span>
              <a href="https://kjrdev.com.br" target="_blank" rel="noopener noreferrer" className="developer-link">
                KJR Desenvolvimento
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

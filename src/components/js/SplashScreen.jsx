import { Shield, Clock, Star } from "lucide-react"
import "../css/SplashScreen.css"

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <div className="logo-animation">
            <div className="logo-icon">DP</div>
          </div>
          <div className="logo-text">
            <h1>Doutor Portões</h1>
            <span>Especialistas em Automação</span>
          </div>
        </div>

        <div className="loading-animation">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p>Carregando...</p>
        </div>

        <div className="splash-features">
          <div className="feature-item">
            <Shield size={20} />
            <span>15+ Anos de Experiência</span>
          </div>
          <div className="feature-item">
            <Clock size={20} />
            <span>Atendimento 24h</span>
          </div>
          <div className="feature-item">
            <Star size={20} />
            <span>Garantia de Qualidade</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

import { useEffect, useRef } from "react"
import "../../css/About.css"

const About = () => {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) observer.observe(aboutRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Sobre a Doutor Portões</h1>
            <p>Mais de 15 anos de experiência em automação de portões</p>
          </div>
        </div>
      </section>

      <section className="about-content" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nossa História</h2>
              <p>
                A Doutor Portões nasceu da paixão por tecnologia e do compromisso em oferecer soluções de automação de
                alta qualidade. Com mais de 15 anos no mercado, nos tornamos referência em São Paulo e região.
              </p>
              <p>
                Nossa equipe é formada por técnicos especializados e certificados, sempre atualizados com as mais
                modernas tecnologias do setor. Trabalhamos apenas com equipamentos de primeira linha e oferecemos
                garantia em todos os nossos serviços.
              </p>
              <p>
                Acreditamos que a automação deve ser sinônimo de segurança, praticidade e tranquilidade. Por isso, cada
                projeto é desenvolvido pensando nas necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Portões Instalados</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24h</div>
                <div className="stat-label">Atendimento</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Valores</h2>
            <p>Os princípios que guiam nosso trabalho</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Qualidade</h3>
              <p>Utilizamos apenas equipamentos de primeira linha e seguimos os mais altos padrões de qualidade.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Confiança</h3>
              <p>Construímos relacionamentos duradouros baseados na transparência e honestidade.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Agilidade</h3>
              <p>Atendimento rápido e eficiente, especialmente em situações de emergência.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Segurança</h3>
              <p>Priorizamos a segurança em todos os nossos projetos e instalações.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossa Equipe</h2>
            <p>Profissionais qualificados e experientes</p>
          </div>

          <div className="team-features">
            <div className="team-feature">
              <div className="feature-icon">👨‍🔧</div>
              <h3>Técnicos Certificados</h3>
              <p>Todos os nossos técnicos possuem certificação e treinamento especializado</p>
            </div>

            <div className="team-feature">
              <div className="feature-icon">📚</div>
              <h3>Atualização Constante</h3>
              <p>Investimos continuamente em treinamento e atualização tecnológica</p>
            </div>

            <div className="team-feature">
              <div className="feature-icon">🎓</div>
              <h3>Experiência Comprovada</h3>
              <p>Mais de uma década de experiência em automação de portões</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

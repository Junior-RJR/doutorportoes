import { useEffect, useRef } from "react"
import { Target, Users, Zap, Shield } from "lucide-react"
import "../../css/About.css"

const About = () => {
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

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

    const refs = [aboutRef, valuesRef, teamRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "5000+", label: "Portões Instalados" },
    { number: "24h", label: "Atendimento" },
    { number: "100%", label: "Satisfação" },
  ]

  const values = [
    {
      icon: <Target size={32} />,
      title: "Qualidade",
      description: "Utilizamos apenas equipamentos de primeira linha e seguimos os mais altos padrões de qualidade.",
    },
    {
      icon: <Users size={32} />,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade.",
    },
    {
      icon: <Zap size={32} />,
      title: "Agilidade",
      description: "Atendimento rápido e eficiente, especialmente em situações de emergência.",
    },
    {
      icon: <Shield size={32} />,
      title: "Segurança",
      description: "Priorizamos a segurança em todos os nossos projetos e instalações.",
    },
  ]

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
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Nossos Valores</h2>
            <p>Os princípios que guiam nosso trabalho</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section" ref={teamRef}>
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

import { useEffect, useRef } from "react"
import "../../css/Services.css"

const Services = () => {
  const servicesRef = useRef(null)

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

    if (servicesRef.current) observer.observe(servicesRef.current)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: "🔧",
      title: "Instalação de Portões",
      description:
        "Instalação profissional de portões automáticos residenciais e comerciais com garantia de qualidade.",
      features: ["Portões basculantes", "Portões deslizantes", "Portões pivotantes", "Sistemas de segurança"],
    },
    {
      icon: "🛠️",
      title: "Manutenção Preventiva",
      description: "Manutenção regular para garantir o funcionamento perfeito e prolongar a vida útil do equipamento.",
      features: ["Lubrificação", "Ajustes mecânicos", "Teste de segurança", "Relatório técnico"],
    },
    {
      icon: "🚨",
      title: "Reparo de Emergência",
      description: "Atendimento 24 horas para reparos urgentes e emergenciais em portões automáticos.",
      features: ["Atendimento 24h", "Diagnóstico rápido", "Peças originais", "Garantia do serviço"],
    },
    {
      icon: "🏠",
      title: "Automação Residencial",
      description: "Sistemas completos de automação para residências com controle remoto e aplicativo.",
      features: ["Controle remoto", "App mobile", "Sensor de presença", "Câmeras integradas"],
    },
    {
      icon: "🏢",
      title: "Automação Comercial",
      description: "Soluções robustas para empresas com sistemas de controle de acesso avançados.",
      features: ["Controle de acesso", "Cartão RFID", "Biometria", "Sistema de monitoramento"],
    },
    {
      icon: "⚡",
      title: "Modernização",
      description: "Atualização de portões manuais para automáticos com tecnologia moderna.",
      features: ["Retrofit completo", "Novos motores", "Sistemas inteligentes", "Economia de energia"],
    },
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nossos Serviços</h1>
            <p>Soluções completas em automação de portões com qualidade e garantia</p>
          </div>
        </div>
      </section>

      <section className="services-content" ref={servicesRef}>
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-outline">Saiba Mais</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Como Trabalhamos</h2>
            <p>Nosso processo garantido em 4 etapas simples</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Avaliação</h3>
              <p>Visita técnica gratuita para avaliar suas necessidades</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Orçamento</h3>
              <p>Orçamento detalhado sem compromisso</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Instalação</h3>
              <p>Instalação profissional com equipamentos de qualidade</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Garantia</h3>
              <p>Garantia de 12 meses e suporte técnico</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

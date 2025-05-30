import { useEffect, useRef } from "react"
import { Settings, Wrench, AlertCircle, HomeIcon, Building, Zap, CheckCircle } from "lucide-react"
import "../../css/Services.css"

const Services = () => {
  const servicesRef = useRef(null)
  const processRef = useRef(null)

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
    if (processRef.current) observer.observe(processRef.current)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Settings size={32} />,
      title: "Instalação de Portões",
      description:
        "Instalação profissional de portões automáticos residenciais e comerciais com garantia de qualidade.",
      features: ["Portões basculantes", "Portões deslizantes", "Portões pivotantes", "Sistemas de segurança"],
    },
    {
      icon: <Wrench size={32} />,
      title: "Manutenção Preventiva",
      description: "Manutenção regular para garantir o funcionamento perfeito e prolongar a vida útil do equipamento.",
      features: ["Lubrificação", "Ajustes mecânicos", "Teste de segurança", "Relatório técnico"],
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Reparo de Emergência",
      description: "Atendimento 24 horas para reparos urgentes e emergenciais em portões automáticos.",
      features: ["Atendimento 24h", "Diagnóstico rápido", "Peças originais", "Garantia do serviço"],
    },
    {
      icon: <HomeIcon size={32} />,
      title: "Automação Residencial",
      description: "Sistemas completos de automação para residências com controle remoto e aplicativo.",
      features: ["Controle remoto", "App mobile", "Sensor de presença", "Câmeras integradas"],
    },
    {
      icon: <Building size={32} />,
      title: "Automação Comercial",
      description: "Soluções robustas para empresas com sistemas de controle de acesso avançados.",
      features: ["Controle de acesso", "Cartão RFID", "Biometria", "Sistema de monitoramento"],
    },
    {
      icon: <Zap size={32} />,
      title: "Modernização",
      description: "Atualização de portões manuais para automáticos com tecnologia moderna.",
      features: ["Retrofit completo", "Novos motores", "Sistemas inteligentes", "Economia de energia"],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Avaliação",
      description: "Visita técnica gratuita para avaliar suas necessidades",
    },
    {
      number: "02",
      title: "Orçamento",
      description: "Orçamento detalhado sem compromisso",
    },
    {
      number: "03",
      title: "Instalação",
      description: "Instalação profissional com equipamentos de qualidade",
    },
    {
      number: "04",
      title: "Garantia",
      description: "Garantia de 12 meses e suporte técnico",
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
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-btn">Saiba Mais</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" ref={processRef}>
        <div className="container">
          <div className="section-header">
            <h2>Como Trabalhamos</h2>
            <p>Nosso processo garantido em 4 etapas simples</p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="step" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

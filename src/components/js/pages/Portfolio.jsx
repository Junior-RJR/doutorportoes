import { useState, useEffect, useRef } from "react"
import "../../css/Portfolio.css"

import alphaville from '../../../assets//portfolio/alphaville.png';
import brooklin from '../../../assets/portfolio/brooklin.png';
import jardins from '../../../assets/portfolio/jardins.png';
import logistica from '../../../assets/portfolio/logistica.png';
import morumbi from '../../../assets/portfolio/morumbi.png';
import shopp from '../../../assets/portfolio/shopp.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const portfolioRef = useRef(null)
  const testimonialsRef = useRef(null)

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

    if (portfolioRef.current) observer.observe(portfolioRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Residência Alphaville",
      category: "residential",
      image: alphaville,
      description: "Portão basculante automático com sistema de segurança integrado",
    },
    {
      id: 2,
      title: "Condomínio Jardins",
      category: "commercial",
      image: jardins,
      description: "Sistema de automação completo para condomínio de luxo",
    },
    {
      id: 3,
      title: "Casa Morumbi",
      category: "residential",
      image: morumbi,
      description: "Portão deslizante com controle por aplicativo",
    },
    {
      id: 4,
      title: "Empresa Logística",
      category: "industrial",
      image: logistica,
      description: "Portões industriais de alta resistência",
    },
    {
      id: 5,
      title: "Shopping Center",
      category: "commercial",
      image: shopp,
      description: "Sistema de controle de acesso automatizado",
    },
    {
      id: 6,
      title: "Residência Brooklin",
      category: "residential",
      image: brooklin,
      description: "Modernização de portão manual para automático",
    },
  ]

  const filters = [
    { id: "all", label: "Todos" },
    { id: "residential", label: "Residencial" },
    { id: "commercial", label: "Comercial" },
    { id: "industrial", label: "Industrial" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "Alphaville",
      rating: 5,
      comment:
        "Excelente serviço! O portão foi instalado rapidamente e funciona perfeitamente. A equipe é muito profissional e atenciosa. Recomendo!",
      service: "Instalação de Portão Basculante",
    },
    {
      id: 2,
      name: "João Santos",
      location: "Morumbi",
      rating: 5,
      comment:
        "Profissionais muito competentes. O atendimento de emergência salvou meu dia! Chegaram em 30 minutos e resolveram o problema rapidamente.",
      service: "Reparo de Emergência",
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Jardins",
      rating: 5,
      comment:
        "Modernizaram nosso portão antigo. Ficou incrível e muito mais seguro! O sistema de automação é fantástico e o app funciona perfeitamente.",
      service: "Modernização",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      location: "Vila Olímpia",
      rating: 5,
      comment:
        "Atendimento excepcional desde o orçamento até a instalação. Cumpriram todos os prazos e o resultado superou nossas expectativas.",
      service: "Automação Residencial",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      location: "Brooklin",
      rating: 5,
      comment:
        "Empresa séria e confiável. Já é a segunda vez que contrato os serviços e sempre fico satisfeita. Preço justo e qualidade garantida.",
      service: "Manutenção Preventiva",
    },
    {
      id: 6,
      name: "Roberto Mendes",
      location: "Tatuapé",
      rating: 5,
      comment:
        "Instalaram um sistema completo na minha empresa. Funcionários educados, trabalho limpo e entrega no prazo. Nota 10!",
      service: "Automação Comercial",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ⭐
      </span>
    ))
  }

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nosso Portfólio</h1>
            <p>Conheça alguns dos nossos projetos realizados</p>
          </div>
        </div>
      </section>

      <section className="portfolio-content" ref={portfolioRef}>
        <div className="container">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="portfolio-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="card-overlay">
                    <button className="view-btn">Ver Detalhes</button>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="category-tag">{filters.find((f) => f.id === project.category)?.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <h2>O que nossos clientes dizem</h2>
            <p>Depoimentos reais de quem confia no nosso trabalho</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="testimonial-header">
                  <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.comment}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

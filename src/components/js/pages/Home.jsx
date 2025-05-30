import { useEffect, useRef, useState } from "react"
import {
  Shield,
  Clock,
  Star,
  ArrowRight,
  Settings,
  Wrench,
  AlertCircle,
  HomeIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import "../../css/Home.css"
import portoes from '../../../assets/carrossel/portoes.png';
import automacao from '../../../assets/carrossel/automacao.png';
import atendimento from '../../../assets/carrossel/atendimento.png';


const Home = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const gateRef = useRef(null)
  const ctaRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerSlides = [
    {
      image: portoes,
      title: "Portões Automáticos de Qualidade",
      description: "Instalação, manutenção e reparo com garantia de qualidade",
    },
    {
      image: automacao,
      title: "Automação Residencial",
      description: "Sistemas completos para sua casa ou empresa",
    },
    {
      image: atendimento,
      title: "Atendimento 24 horas",
      description: "Suporte técnico e emergência quando você precisar",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [bannerSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const refs = [heroRef, servicesRef, gateRef, ctaRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Portões
                <br />
                <span className="highlight">Automáticos</span>
                <br />
                de Qualidade
              </h1>
              <p>
                Instalação, manutenção e reparo de portões automáticos com{" "}
                <span className="highlight">garantia de qualidade</span> e{" "}
                <span className="highlight">atendimento 24 horas</span>.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </button>
                <button className="btn btn-secondary">Ver Serviços</button>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-container">
                <div className="banner-carousel">
                  <div className="banner-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {bannerSlides.map((slide, index) => (
                      <div key={index} className="banner-slide">
                        <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="banner-img" />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-btn prev-btn" onClick={prevSlide}>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="carousel-btn next-btn" onClick={nextSlide}>
                    <ChevronRight size={20} />
                  </button>
                  <div className="carousel-dots">
                    {bannerSlides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="experience-badge">
                  <span className="badge-number">15+</span>
                  <span className="badge-text">
                    Anos de
                    <br />
                    Experiência
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="features-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <div className="feature-content">
                <h3>Garantia</h3>
                <p>12 meses</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={24} />
              </div>
              <div className="feature-content">
                <h3>Atendimento</h3>
                <p>24 horas</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Star size={24} />
              </div>
              <div className="feature-content">
                <h3>Qualidade</h3>
                <p>Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas em automação de portões</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Settings size={32} />
              </div>
              <h3>Instalação</h3>
              <p>Instalação profissional de portões automáticos residenciais e comerciais</p>
              <button className="service-btn">Saiba Mais</button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Wrench size={32} />
              </div>
              <h3>Manutenção</h3>
              <p>Manutenção preventiva e corretiva para garantir o funcionamento perfeito</p>
              <button className="service-btn">Saiba Mais</button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <AlertCircle size={32} />
              </div>
              <h3>Emergência</h3>
              <p>Atendimento de emergência 24 horas para reparos urgentes</p>
              <button className="service-btn">Saiba Mais</button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <HomeIcon size={32} />
              </div>
              <h3>Automação</h3>
              <p>Sistemas de automação completos para residências e empresas</p>
              <button className="service-btn">Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>

      <section className="gate-animation" ref={gateRef}>
        <div className="container">
          <div className="gate-demo">
            <div className="gate-content">
              <h2>Veja Nossos Portões em Ação</h2>
              <p>Passe o mouse sobre a imagem para ver a animação</p>
            </div>
            <div className="gate-image-wrapper">
              <div className="gate-instruction">
                <span>Passe o mouse aqui</span>
              </div>
              <div className="gate-image">
                <img src="/src/assets/animacao/image.png" alt="Portão Automático" className="gate-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" ref={ctaRef}>
        <div className="container">
          <div className="cta-content">
            <h2>Precisa de um Orçamento?</h2>
            <p>Entre em contato conosco e receba um orçamento gratuito sem compromisso</p>
            <button className="btn btn-cta">
              Solicitar Orçamento Grátis
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

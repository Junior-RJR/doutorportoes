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
import image from '../../../assets/animacao/image.png';
import atendimento from '../../../assets/carrossel/atendimento.png';
import automacao from '../../../assets/carrossel/automacao.png';
import portoes from '../../../assets/carrossel/portoes.png';

const Home = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
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

    const refs = [heroRef, featuresRef, servicesRef, gateRef, ctaRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Portões
                <span className="highlight"> Automáticos</span>
                <br />
                de Qualidade
              </h1>

              <p className="hero-description">
                Instalação, manutenção e reparo de portões automáticos
                <br />
                com <span className="highlight">garantia de qualidade</span> e{" "}
                <span className="highlight">atendimento 24 horas</span>.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary">
                  Solicitar Orçamento <ArrowRight size={20} />
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
                        <div className="banner-content">
                          <h3>{slide.title}</h3>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="carousel-btn prev-btn" onClick={prevSlide}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="carousel-btn next-btn" onClick={nextSlide}>
                    <ChevronRight size={24} />
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
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="container">
          <div className="features-grid">
            <div className="feature-card" style={{ animationDelay: "0.1s" }}>
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Garantia</h3>
              <p>12 meses</p>
            </div>

            <div className="feature-card" style={{ animationDelay: "0.2s" }}>
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>Atendimento</h3>
              <p>24 horas</p>
            </div>

            <div className="feature-card" style={{ animationDelay: "0.3s" }}>
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>Qualidade</h3>
              <p>Garantida</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas em automação de portões</p>
          </div>

          <div className="services-grid">
            <div className="service-card" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon">
                <Settings size={40} />
              </div>
              <h3>Instalação</h3>
              <p>Instalação profissional de portões automáticos residenciais e comerciais</p>
            </div>

            <div className="service-card" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon">
                <Wrench size={40} />
              </div>
              <h3>Manutenção</h3>
              <p>Manutenção preventiva e corretiva para garantir o funcionamento perfeito</p>
            </div>

            <div className="service-card" style={{ animationDelay: "0.3s" }}>
              <div className="service-icon">
                <AlertCircle size={40} />
              </div>
              <h3>Emergência</h3>
              <p>Atendimento de emergência 24 horas para reparos urgentes</p>
            </div>

            <div className="service-card" style={{ animationDelay: "0.4s" }}>
              <div className="service-icon">
                <HomeIcon size={40} />
              </div>
              <h3>Automação</h3>
              <p>Sistemas de automação completos para residências e empresas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gate-animation-section" ref={gateRef}>
        <div className="container">
          <div className="gate-animation-container">
            <div className="gate-demo">
              <div className="gate-instruction">
                {/* <span>Passe o mouse aqui</span> */}
                {/* <div className="mouse-icon">🖱️</div> */}
              </div>
              <div className="gate-image">
                {/* <img src="/placeholder.svg?height=400&width=600" alt="Portão Automático" className="gate-img" /> */}
                <img src={image} alt="Portão Automático" className="gate-img" />
              </div>
              <div className="gate-content">
                <h2>Veja Nossos Portões em Ação</h2>
                <p>Qualidade e tecnologia para sua segurança</p>
                <button className="btn btn-primary">Ver Catálogo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div className="cta-content">
            <h2>Precisa de um Orçamento?</h2>
            <p>Entre em contato conosco e receba um orçamento gratuito sem compromisso</p>
            <button className="btn btn-primary btn-large btn-quote">
              Solicitar Orçamento Grátis <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

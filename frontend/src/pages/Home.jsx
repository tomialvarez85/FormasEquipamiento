import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { ChefHat, Briefcase, Home as HomeIcon, Store, Layers, Stethoscope, Mail, Phone, MapPin, ArrowRight, Menu, MessageCircle, ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { BrandWatermark } from '../components/BrandWatermark';
import { services, portfolioItems, portfolioCategories, faqs, processSteps, stats } from '../mock';
import { useToast } from '../hooks/use-toast';

const WHATSAPP_NUMBER = '+5493543601640';

const iconMap = {
  ChefHat: ChefHat,
  Briefcase: Briefcase,
  Home: HomeIcon,
  Store: Store,
  Layers: Layers,
  Stethoscope: Stethoscope
};

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPortfolio = activeCategory === 'todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Crear mensaje de WhatsApp con los datos del formulario
      const whatsappMessage = `¡Hola! Me gustaría solicitar información sobre sus muebles a medida.

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Mensaje:* ${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Abrir WhatsApp con el mensaje
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Te hemos redirigido a WhatsApp con tu mensaje.",
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al abrir WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus muebles a medida.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="home-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </button>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} data-testid="site-header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <h2 className="logo-text">Formas Equipamiento</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#proyectos" className="nav-link">Proyectos</a>
              <a href="#proceso" className="nav-link">Proceso</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </div>
            
            <div className="nav-actions">
              <Button className="btn-primary desktop-cta" onClick={() => window.location.hash = '#contacto'}>Cotiza Ahora</Button>
              
              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="mobile-menu-btn">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="mobile-menu">
                  <div className="mobile-menu-content">
                    <div className="mobile-logo">
                      <h2 className="logo-text">Formas Equipamiento</h2>
                    </div>
                    <nav className="mobile-nav-links">
                      <a href="#inicio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        Inicio
                      </a>
                      <a href="#servicios" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        Servicios
                      </a>
                      <a href="#proyectos" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        Proyectos
                      </a>
                      <a href="#proceso" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        Proceso
                      </a>
                      <a href="#contacto" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        Contacto
                      </a>
                    </nav>
                    <Button className="btn-primary w-full" onClick={() => {
                      window.location.hash = '#contacto';
                      setMobileMenuOpen(false);
                    }}>
                      Cotiza Ahora
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Muebles a Medida que
                <span className="accent-text"> Transforman Espacios</span>
                <span className="hero-tagline">Damos Formas a tus ideas</span>
              </h1>
              <p className="hero-description">
                Diseñamos, fabricamos e instalamos muebles residenciales y corporativos con más de 30 años de experiencia transformando tus planos en espacios funcionales listos para trabajar o habitar.
              </p>
              <div className="hero-buttons">
                <Button className="btn-primary" size="lg" onClick={() => window.location.hash = '#proyectos'}>
                  Ver Proyectos <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button className="btn-secondary" size="lg" onClick={() => window.location.hash = '#contacto'}>Contáctanos</Button>
              </div>
              <div className="stats-row">
                {stats.map(stat => (
                  <div key={stat.id} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/1hq01t3g_imgmainformas.jpeg"
                alt="Cocina con isla y comedor a medida - Formas Equipamiento"
                className="hero-img"
              />
              <BrandWatermark />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-description">
              Ofrecemos soluciones completas en mobiliario a medida para todo tipo de espacios
            </p>
          </div>
          <div className="services-grid">
            {services.map(service => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-card">
                  <CardContent className="service-content">
                    <div className="service-icon">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="proyectos" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Trabajos</h2>
            <p className="section-description">
              Explorá nuestro portafolio de muebles a medida diseñados y fabricados con dedicación
            </p>
          </div>

          {/* Botón Ver / Ocultar Fotos */}
          <div className="portfolio-toggle-wrapper">
            <Button
              className="btn-primary portfolio-toggle-btn"
              onClick={() => setShowPortfolio(prev => !prev)}
              data-testid="portfolio-toggle-btn"
              size="lg"
            >
              {showPortfolio ? (
                <>Ocultar Fotos <ChevronUp size={20} className="ml-2" /></>
              ) : (
                <>Ver Fotos <ChevronDown size={20} className="ml-2" /></>
              )}
            </Button>
          </div>

          {showPortfolio && (
            <>
              {/* Filtros por categoría */}
              <div className="portfolio-filters" data-testid="portfolio-filters">
                {portfolioCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`portfolio-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    data-testid={`portfolio-filter-${cat.id}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Grilla de portafolio */}
              <div className="portfolio-grid" data-testid="portfolio-grid">
                {filteredPortfolio.map(item => (
                  <div
                    key={item.id}
                    className="portfolio-item"
                    data-testid={`portfolio-item-${item.id}`}
                    data-category={item.category}
                  >
                    <div className="portfolio-image-wrapper">
                      {item.image ? (
                        <>
                          <img src={item.image} alt={item.categoryLabel} className="portfolio-image" />
                          <BrandWatermark />
                        </>
                      ) : (
                        <div className="portfolio-placeholder" aria-label="Imagen próximamente">
                          <ImageIcon size={48} strokeWidth={1.2} />
                          <span className="portfolio-placeholder-text">Próximamente</span>
                        </div>
                      )}
                      <div className="portfolio-hover-overlay">
                        <span className="portfolio-category-label">{item.categoryLabel}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPortfolio.length === 0 && (
                <p className="portfolio-empty" data-testid="portfolio-empty">
                  No hay trabajos en esta categoría todavía.
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso</h2>
            <p className="section-description">
              Un proceso simple y transparente de principio a fin
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-description">
              Resolvemos las dudas más comunes sobre nuestros muebles a medida
            </p>
          </div>
          <div className="faq-wrapper">
            <Accordion type="single" collapsible className="faq-accordion" data-testid="faq-accordion">
              {faqs.map(faq => (
                <AccordionItem
                  key={faq.id}
                  value={`faq-${faq.id}`}
                  className="faq-item"
                  data-testid={`faq-item-${faq.id}`}
                >
                  <AccordionTrigger className="faq-trigger">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="contact-title">¿Listo para Comenzar tu Proyecto?</h2>
              <p className="contact-description">
                Contáctanos hoy y transforma tus espacios con muebles únicos diseñados especialmente para ti.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <div className="contact-label">Teléfono</div>
                    <div className="contact-value">+54 9 3543 60-1640</div>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@formasequipamiento.com.ar</div>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <div className="contact-label">Ubicación</div>
                    <div className="contact-value">Córdoba, Argentina</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nombre Completo</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Teléfono</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+54 11 1234-5678"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mensaje</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                      className="form-textarea"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">Formas Equipamiento</h3>
              <p className="footer-description">
                Creamos muebles a medida que combinan diseño, funcionalidad y la más alta calidad en acabados.
              </p>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Navegación</h4>
              <a href="#inicio" className="footer-link">Inicio</a>
              <a href="#servicios" className="footer-link">Servicios</a>
              <a href="#proyectos" className="footer-link">Proyectos</a>
              <a href="#contacto" className="footer-link">Contacto</a>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Servicios</h4>
              <a href="#" className="footer-link">Muebles de Cocina</a>
              <a href="#" className="footer-link">Mobiliario de Oficina</a>
              <a href="#" className="footer-link">Placares</a>
              <a href="#" className="footer-link">Muebles Comerciales</a>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Contacto</h4>
              <p className="footer-link">Córdoba, Argentina</p>
              <p className="footer-link">+54 9 3543 60-1640</p>
              <p className="footer-link">info@formasequipamiento.com.ar</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Formas Equipamiento. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

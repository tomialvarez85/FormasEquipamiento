import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ChefHat, Briefcase, Home as HomeIcon, Store, Mail, Phone, MapPin, ArrowRight, Star, Check } from 'lucide-react';
import { services, projects, testimonials, processSteps, stats } from '../mock';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  ChefHat: ChefHat,
  Briefcase: Briefcase,
  Home: HomeIcon,
  Store: Store
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      toast({
        title: "¡Mensaje Enviado!",
        description: result.message,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <h2 className="logo-text">Formas Equipamiento</h2>
            </div>
            <div className="nav-links">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#proyectos" className="nav-link">Proyectos</a>
              <a href="#proceso" className="nav-link">Proceso</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </div>
            <Button className="btn-primary">Cotiza Ahora</Button>
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
              </h1>
              <p className="hero-description">
                Fabricamos muebles personalizados con diseño único y acabados de la más alta calidad. 
                Cada proyecto refleja tu estilo y se adapta perfectamente a tus necesidades.
              </p>
              <div className="hero-buttons">
                <Button className="btn-primary" size="lg">
                  Ver Proyectos <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button className="btn-secondary" size="lg">Contáctanos</Button>
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
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvcnxlbnwwfHx8fDE3NjM4NDc5MDh8MA&ixlib=rb-4.1.0&q=85"
                alt="Interior moderno"
                className="hero-img"
              />
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
              Ofrecemos soluciones completas en mobiliario personalizado para todo tipo de espacios
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
                    <Button variant="ghost" className="service-link">
                      Más Información <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="proyectos" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Proyectos</h2>
            <p className="section-description">
              Explora algunos de nuestros trabajos más destacados
            </p>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
            <p className="section-description">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.comment}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                    <div className="contact-value">+54 11 1234-5678</div>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@formasequipamiento.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <div className="contact-label">Ubicación</div>
                    <div className="contact-value">Buenos Aires, Argentina</div>
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
              <a href="#" className="footer-link">Closets</a>
              <a href="#" className="footer-link">Muebles Comerciales</a>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Contacto</h4>
              <p className="footer-link">Buenos Aires, Argentina</p>
              <p className="footer-link">+54 11 1234-5678</p>
              <p className="footer-link">info@formasequipamiento.com</p>
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

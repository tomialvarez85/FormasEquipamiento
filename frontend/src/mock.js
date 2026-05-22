// Mock data for Formas Equipamiento

export const services = [
  {
    id: 1,
    title: "Muebles de Cocina",
    description: "Diseñamos y fabricamos cocinas a medida que combinan funcionalidad y estética. Cada proyecto es único y adaptado a tus necesidades.",
    icon: "ChefHat"
  },
  {
    id: 2,
    title: "Mobiliario de Oficina",
    description: "Espacios de trabajo ergonómicos y modernos. Optimizamos cada centímetro para crear ambientes productivos y profesionales.",
    icon: "Briefcase"
  },
  {
    id: 3,
    title: "Closets y Vestidores",
    description: "Soluciones de almacenamiento personalizadas que maximizan el espacio y se adaptan perfectamente a tu estilo de vida.",
    icon: "Home"
  },
  {
    id: 4,
    title: "Muebles Comerciales",
    description: "Equipamiento para restaurantes, hoteles y comercios. Diseño duradero que refleja la identidad de tu negocio.",
    icon: "Store"
  }
];

// Categorías del portafolio
export const portfolioCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'cocinas', label: 'Cocinas' },
  { id: 'dormitorios', label: 'Dormitorios' },
  { id: 'living', label: 'Living' },
  { id: 'oficina', label: 'Oficina' }
];

// Items del portafolio - El usuario subirá las imágenes manualmente.
// Para agregar una imagen real, reemplazar `image: null` por la URL/ruta de la imagen.
export const portfolioItems = [
  { id: 1, category: 'cocinas', categoryLabel: 'Cocinas', image: null },
  { id: 2, category: 'cocinas', categoryLabel: 'Cocinas', image: null },
  { id: 3, category: 'cocinas', categoryLabel: 'Cocinas', image: null },
  { id: 4, category: 'dormitorios', categoryLabel: 'Dormitorios', image: null },
  { id: 5, category: 'dormitorios', categoryLabel: 'Dormitorios', image: null },
  { id: 6, category: 'dormitorios', categoryLabel: 'Dormitorios', image: null },
  { id: 7, category: 'living', categoryLabel: 'Living', image: null },
  { id: 8, category: 'living', categoryLabel: 'Living', image: null },
  { id: 9, category: 'living', categoryLabel: 'Living', image: null },
  { id: 10, category: 'oficina', categoryLabel: 'Oficina', image: null },
  { id: 11, category: 'oficina', categoryLabel: 'Oficina', image: null },
  { id: 12, category: 'oficina', categoryLabel: 'Oficina', image: null }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Antonelli",
    role: "Propietaria",
    comment: "El trabajo de Formas Equipamiento superó todas mis expectativas. La cocina quedó perfecta y el equipo fue muy profesional durante todo el proceso.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Gerente de Oficina",
    comment: "Transformaron completamente nuestra oficina. Los muebles son de excelente calidad y el diseño es exactamente lo que necesitábamos.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Narandini",
    role: "Diseñadora de Interiores",
    comment: "He trabajado con muchos fabricantes, pero Formas Equipamiento destaca por su atención al detalle y compromiso con la calidad. Totalmente recomendados.",
    rating: 5
  }
];

export const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Consulta Inicial",
    description: "Nos reunimos para entender tus necesidades, estilo y presupuesto. Analizamos el espacio y discutimos ideas."
  },
  {
    id: 2,
    step: "02",
    title: "Diseño Personalizado",
    description: "Creamos un diseño 3D detallado de tu proyecto. Seleccionamos materiales y acabados según tus preferencias."
  },
  {
    id: 3,
    step: "03",
    title: "Fabricación",
    description: "Nuestro equipo de expertos fabrica cada pieza con precisión, utilizando materiales de la más alta calidad."
  },
  {
    id: 4,
    step: "04",
    title: "Instalación",
    description: "Instalamos tu mobiliario con cuidado y profesionalismo, asegurando un acabado perfecto en cada detalle."
  }
];

export const stats = [
  { id: 1, number: "500+", label: "Proyectos Completados" },
  { id: 2, number: "25+", label: "Años de Experiencia" },
  { id: 3, number: "98%", label: "Clientes Satisfechos" },
  { id: 4, number: "50+", label: "Diseños Únicos" }
];

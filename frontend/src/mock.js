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
    title: "Placares y Vestidores",
    description: "Soluciones de almacenamiento personalizadas que maximizan el espacio y se adaptan perfectamente a tu estilo de vida.",
    icon: "Home"
  },
  {
    id: 4,
    title: "Muebles Comerciales",
    description: "Equipamiento para restaurantes, hoteles y comercios. Diseño duradero que refleja la identidad de tu negocio.",
    icon: "Store"
  },
  {
    id: 5,
    title: "Desarrollos Integrales",
    description: "Equipamos oficinas corporativas, propiedad horizontal, hoteles, hospitales, escuelas, etc. Coordinamos diseño, fabricación e instalación de principio a fin.",
    icon: "Layers"
  },
  {
    id: 6,
    title: "Mobiliario para el Sector Salud",
    description: "Diseñamos y fabricamos mobiliario para clínicas, consultorios, laboratorios y centros médicos. Materiales resistentes, higiénicos y funcionales que cumplen con las exigencias del rubro.",
    icon: "Stethoscope"
  }
];

// Categorías del portafolio
export const portfolioCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'cocinas', label: 'Cocinas' },
  { id: 'dormitorios', label: 'Dormitorios' },
  { id: 'living', label: 'Living' },
  { id: 'oficina', label: 'Oficina' },
  { id: 'banos', label: 'Baños' }
];

// Items del portafolio - El usuario subirá las imágenes manualmente.
// Para agregar una imagen real, reemplazar `image: null` por la URL/ruta de la imagen.
export const portfolioItems = [
  { id: 1, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/1qatiqkq_cocina.jpeg' },
  { id: 2, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/06eqy80a_cocina2.jpeg' },
  { id: 3, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/5415qike_cocina3.jpeg' },
  { id: 16, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/wffkny0z_cocina4.jpeg' },
  { id: 17, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/cg3uelzm_cocina5.jpeg' },
  { id: 18, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/3a67v86u_cocina6.jpeg' },
  { id: 19, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/b41e0fj9_cocina7.jpeg' },
  { id: 20, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/5v830ciu_cocina8.jpeg' },
  { id: 21, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/2f2xoizf_cocina9.jpeg' },
  { id: 22, category: 'cocinas', categoryLabel: 'Cocinas', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/cb3wf2ab_cocina10.jpeg' },
  { id: 4, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/e39t5xst_dormitorio10.jpeg' },
  { id: 5, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/yo3m33xh_dormitorio11.jpeg' },
  { id: 6, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/xkbpmhut_dormitorio.jpeg' },
  { id: 26, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/vfkt1geg_dormitorio2.jpeg' },
  { id: 27, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/j79ubimj_dormitorio3.jpeg' },
  { id: 28, category: 'dormitorios', categoryLabel: 'Dormitorios', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/i71rtyf5_dormitorio4.jpeg' },
  { id: 7, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/p7f6xenv_living4.jpeg' },
  { id: 8, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/s4imbjlk_living5.jpeg' },
  { id: 9, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/c3p59x2y_living6.jpeg' },
  { id: 23, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/sky8815n_living.jpeg' },
  { id: 24, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/1ve9jgi0_living2.jpeg' },
  { id: 25, category: 'living', categoryLabel: 'Living', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/9y25ww3r_living3.jpeg' },
  { id: 10, category: 'oficina', categoryLabel: 'Oficina', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/1xw8bfjx_oficina.jpeg' },
  { id: 11, category: 'oficina', categoryLabel: 'Oficina', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/l9fc1zo4_oficina2.jpeg' },
  { id: 13, category: 'banos', categoryLabel: 'Baños', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/4e4xnfnj_banio2.jpeg' },
  { id: 14, category: 'banos', categoryLabel: 'Baños', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/18m09coq_banio3.jpeg' },
  { id: 15, category: 'banos', categoryLabel: 'Baños', image: 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/owaoximg_banio.jpeg' }
];

export const faqs = [
  {
    id: 2,
    question: "¿Cómo es el proceso para cotizar mi proyecto?",
    answer: "Es simple: nos contactás por WhatsApp o Email enviándonos los planos de la obra, o presencialmente en nuestro local, donde conjuntamente desarrollamos el diseño que necesitás a partir del cual te brindamos el presupuesto."
  },
  {
    id: 3,
    question: "¿Qué materiales utilizan en sus muebles?",
    answer: "Trabajamos con una amplia selección de materiales — melamina, madera, aluminio, vidrio y acero inoxidable — eligiendo siempre el más adecuado para cada proyecto."
  },
  {
    id: 4,
    question: "¿Realizan envíos e instalación fuera de Córdoba?",
    answer: "Sí, instalamos en toda la provincia de Córdoba y zonas cercanas. Para destinos más alejados podemos coordinar el envío; consultanos por tu localidad."
  },
  {
    id: 5,
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos efectivo, transferencia bancaria y tarjetas. El esquema habitual es una seña al confirmar el diseño y el saldo contra entrega/instalación."
  }
];

export const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Consulta Inicial",
    description: "Nos reunimos para entender tus necesidades, estilo y elaborar un presupuesto. Analizamos el espacio y planteamos alternativas."
  },
  {
    id: 2,
    step: "02",
    title: "Diseño Personalizado",
    description: "Creamos un diseño detallado de tu proyecto. Seleccionamos materiales y acabados según tus preferencias."
  },
  {
    id: 3,
    step: "03",
    title: "Fabricación",
    description: "Nuestro equipo experimentado fabrica cada pieza con precisión, utilizando materiales de la más alta calidad."
  },
  {
    id: 4,
    step: "04",
    title: "Instalación",
    description: "Instalamos tu mobiliario con cuidado y profesionalismo, asegurando una terminación perfecta en cada detalle."
  }
];

export const stats = [
  { id: 1, number: "500+", label: "Proyectos Completados" },
  { id: 2, number: "30+", label: "Años de Experiencia" },
  { id: 3, number: "98%", label: "Espacios Transformados con Éxito" }
];

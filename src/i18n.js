import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      navbar: {
        about: "Sobre mí",
        projects: "Proyectos",
        experience: "Experiencia",
        contact: "Contacto",
      },
      about: {
        title: "¡Hola! Soy Iván",
        intro: "Soy desarrollador web especializado en frontend y backend, enfocado en crear aplicaciones modernas, accesibles y responsivas.",
        description: "Trabajo principalmente con React, JavaScript, HTML, CSS y Tailwind CSS para construir interfaces dinámicas e intuitivas, además de desarrollar APIs y lógica de servidor que permiten crear soluciones completas.",
        passion: "Me gusta transformar ideas en productos digitales funcionales, cuidando tanto la experiencia de usuario como la calidad, escalabilidad y mantenibilidad del código.",
        },        
      experience: {
        title: "Experiencia",
        proxya: {
          title: "Operador Informático, Proxya",
          date: "📅 Septiembre 2022 - Febrero 2023",
          location: "📍 Hibrido",
          responsibilities: [
            "Mantenimiento técnico, diagnóstico y actualización de equipos informáticos y sistemas operativos.",
            "Resolución de incidencias de hardware, software, redes locales y conectividad.",
            "Administración básica de entornos Windows Server y Active Directory (AD): creación de usuarios, gestión de permisos, políticas de grupo y soporte a usuarios.",
            "Soporte y gestión de Microsoft 365: administración de usuarios, licencias, correo electrónico (Outlook) y herramientas colaborativas.",
            "Creación, configuración y mantenimiento de máquinas virtuales con Hyper-V y VMware para entornos de pruebas y producción.",
            "Aplicación de medidas de seguridad informática, control de accesos, copias de seguridad y buenas prácticas de protección de datos.",
            "Elaboración de documentación técnica: incidencias, procedimientos y configuraciones.",
            "Colaboración en tareas de mantenimiento preventivo y mejora continua de la infraestructura IT.",
          ]
        },
        freelance_wordpress: {
          title: "Gestor de páginas web, Profesional independiente",
          date: "📅 Enero 2025 - Julio 2025",
          location: "📍 Remoto",
          responsibilities: [
          "Diseño, configuración y gestión de sitios web utilizando WordPress.",
          "Administración de hosting y dominio a través de IONOS.",
          "Instalación y personalización de WordPress, temas y plugins según requisitos del proyecto.",
          "Desarrollo y mantenimiento de la estructura del sitio y gestión de contenidos.",
          "Optimización del funcionamiento del sitio mediante actualizaciones, copias de seguridad y resolución de incidencias.",
          "Garantía de estabilidad, rendimiento y disponibilidad del sitio web en producción.",
          "Gestión autónoma del proyecto web de principio a fin, adaptándome a las necesidades del cliente.",
          ]
        },
        grupo_oro: {
          title: "Desarrollador Web, Grupo Oro",
          date: "📅 Septiembre 2025 - Diciembre 2025",
          location: "📍 Remoto",
          responsibilities: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando TypeScript, React, PHP y Laravel.",
            "Implementación de interfaces dinámicas y componentes reutilizables con React y Tailwind CSS, orientados a la experiencia de usuario.",
            "Diseño y gestión de bases de datos MySQL, asegurando eficiencia, escalabilidad y buen rendimiento.",
            "Integración de APIs REST y servicios externos, así como automatización de procesos mediante n8n.",
            "Implementación de flujos de automatización con n8n, incluyendo procesos asistidos por inteligencia artificial para optimizar tareas internas.",
            "Pruebas, depuración y optimización de código para mejorar rendimiento, estabilidad y mantenibilidad de las aplicaciones.",
          ]
        }
      },
      education: {
        title: "Formación Academica",
        daw: {
          title: "Grado Superior en Desarrollo de Aplicaciones Web",
          date: "📅 Finalizado en 2025"
        },
        smr: {
          title: "Grado Medio en Sistemas Microinformáticos y Redes",
          date: "📅 Finalizado en 2023"
        }
      },
      technologies: {
        title: "Tecnologías"
      },
      projects: {
        title: "Proyectos",
        status_label: "Estado:",
        view_github: "🔗 Ver en GitHub",
        status: {
          done: "Terminado",
          progress: "En proceso"
        },
        lego: {
          name: "Tienda Lego",
          description: "E-commerce de piezas de LEGO con sistema de usuarios, carrito de compras y gestión de inventario.",
          builtWith: "Laravel + MySQL en el backend y HTML, CSS y JavaScript en el frontend."
        },
        driver: {
          name: "Driver&Go",
          description: "Plataforma de compraventa y alquiler de vehículos con gestión de usuarios, publicación de anuncios y filtrado avanzado.",
          builtWith: "Laravel y PHP en el backend, MySQL como base de datos y HTML y CSS en el frontend."
        },
        southwines: {
          name: "SouthWines",
          description: "Plataforma de gestión académica para administración de cursos, profesores y alumnos.",
          builtWith: "Laravel como framework principal, MySQL para la base de datos y HTML, CSS y JavaScript en el frontend."
        },
        zestcharge: {
          name: "ZestCharge",
          description: "E-commerce de bebidas energéticas con catálogo de productos y sistema de carrito de compras.",
          builtWith: "Laravel en el backend, MySQL como base de datos y Tailwind CSS para la interfaz."
        },
        metotech: {
          name: "MeteoTech",
          description: "Aplicación web para consultar el estado del tiempo mediante consumo de API meteorológica.",
          builtWith: "Angular, TypeScript, HTML y CSS."
        }
      },
    },
  },
  en: {
    translation: {
      navbar: {
        about: "About Me",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
      },
      about: {
        title: "Hello! I'm Iván",
        intro: "I am 25 years old and I am a web developer focused on creating efficient and accessible digital solutions.",
        description: "I specialize in frontend development creating dynamic and attractive interfaces with React, JavaScript, HTML, CSS, and Tailwind CSS, taking care of every detail to transform ideas into intuitive and functional visual experiences.",
        passion: "Curiosity and passion for technology drive me to constantly learn, experiment with new tools, and overcome challenges so that each project is an opportunity to grow and create something unique.",
      },
      experience: {
        title: "Experience",
        proxya: {
          title: "Computer Operator, Proxya",
          date: "📅 September 2022 - February 2023",
          location: "📍 Hybrid",
          responsibilities: [
            "Technical maintenance, diagnosis, and update of computer equipment and operating systems.",
            "Attention and resolution of incidents related to hardware, software, local networks, and connectivity.",
            "Basic administration of Windows Server and Active Directory (AD) environments: user creation, permission management, group policies, and user support.",
            "Management and support of Microsoft 365 services: user administration, licenses, email (Outlook), and collaborative tools.",
            "Creation, configuration, and maintenance of virtual machines using Hyper-V and VMware for testing and production environments.",
            "Application of computer security measures, access control, backups, and data protection best practices.",
            "Preparation of technical reports and documentation of incidents, procedures, and configurations.",
            "Collaboration in preventive maintenance tasks and continuous improvement of technological infrastructure.",
          ]
        },
        freelance_wordpress: {
          title: "Web Page Manager, Freelance",
          date: "📅 April 2025 - July 2025",
          location: "📍 Seville, Andalusia, Spain · Remote",
          responsibilities: [
            "As a freelance professional, I was in charge of the creation, configuration, and management of a website using WordPress, hosted and administered through IONOS.",
            "I carried out the complete construction of the website, including hosting and domain configuration, installation and customization of WordPress, themes, and plugins. I also managed the site structure and content, ensuring a functional and easy-to-maintain design.",
            "In addition, I carried out maintenance tasks, updates, backups, and incident resolution, ensuring the stability and correct functioning of the web. This experience allowed me to work autonomously, organize web projects from start to finish, and adapt to the client's needs."
          ]
        },
        grupo_oro: {
          title: "Web Developer, Grupo Oro",
          date: "📅 September 2025 - December 2025",
          location: "📍 Remote",
          responsibilities: [
            "Development and maintenance of web applications using TypeScript, React, PHP, and Laravel.",
            "Implementation of dynamic interfaces and reusable components with React and Tailwind CSS, focused on user experience.",
            "Design and management of MySQL databases for web applications, ensuring efficiency and scalability.",
            "Integration of REST APIs, external services, and automation flows using n8n, including AI-assisted processes.",
            "Task automation, data synchronization, and workflow optimization using n8n to improve productivity and reduce manual processes.",
            "Testing, debugging, and code optimization to improve application performance, stability, and usability.",
          ]
        }
      },
      education: {
        title: "Education",
        daw: {
          title: "Higher Technician in Web Application Development",
          date: "📅 Finished in 2025"
        },
        smr: {
          title: "Intermediate Technician in Microcomputer Systems and Networks",
          date: "📅 Finished in 2023"
        }
      },
      technologies: {
        title: "Technologies"
      },
      projects: {
        title: "Projects",
        status_label: "Status:",
        view_github: "🔗 View on GitHub",
        status: {
          done: "Completed",
          progress: "In Progress"
        },
        lego: {
          name: "Tienda Lego",
          description: "LEGO pieces e-commerce with user system, shopping cart, and inventory management.",
          builtWith: "Laravel + MySQL on the backend and HTML, CSS, and JavaScript on the frontend."
        },
        driver: {
          name: "Driver&Go",
          description: "Vehicle buying, selling, and rental platform with user management, ad publishing, and advanced filtering.",
          builtWith: "Laravel and PHP on the backend, MySQL as the database, and HTML and CSS on the frontend."
        },
        southwines: {
          name: "SouthWines",
          description: "Academic management platform for courses, teachers, and students administration.",
          builtWith: "Laravel as the main framework, MySQL for the database, and HTML, CSS, and JavaScript on the frontend."
        },
        zestcharge: {
          name: "ZestCharge",
          description: "Energy drinks e-commerce with product catalog and shopping cart system.",
          builtWith: "Laravel on the backend, MySQL as the database, and Tailwind CSS for the interface."
        },
        metotech: {
          name: "MeteoTech",
          description: "Web application to check weather conditions by consuming a weather API.",
          builtWith: "Angular, TypeScript, HTML, and CSS."
        }
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
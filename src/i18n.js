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
        intro: "Tengo 26 años y soy desarrollador web con un enfoque en crear soluciones digitales eficientes y accesibles.",
        description: "Me especializo en el desarrollo frontend creando interfaces dinámicas y atractivas con React, JavaScript, HTML, CSS y Tailwind CSS, cuidando cada detalle para transformar ideas en experiencias visuales intuitivas y funcionales.",
        passion: "La curiosidad y la pasión por la tecnología me impulsan a aprender constantemente, experimentar con nuevas herramientas y superar desafíos para que cada proyecto sea una oportunidad de crecer y crear algo único.",
      },
      experience: {
        title: "Experiencia",
        proxya: {
          title: "Operador Informático, Proxya",
          date: "📅 Septiembre 2022 - Febrero 2023",
          location: "📍 Hibrido",
          responsibilities: [
            "Mantenimiento técnico, diagnóstico y actualización de equipos informáticos y sistemas operativos.",
            "Atención y resolución de incidencias relacionadas con hardware, software, redes locales y conectividad.",
            "Administración básica de entornos Windows Server y Active Directory (AD): creación de usuarios, gestión de permisos, políticas de grupo y soporte a usuarios.",
            "Gestión y soporte de servicios Microsoft 365: administración de usuarios, licencias, correo electrónico (Outlook) y herramientas colaborativas.",
            "Creación, configuración y mantenimiento de máquinas virtuales utilizando Hyper-V y VMware para entornos de pruebas y producción.",
            "Aplicación de medidas de seguridad informática, control de accesos, copias de seguridad y buenas prácticas de protección de datos.",
            "Elaboración de informes técnicos y documentación de incidencias, procedimientos y configuraciones.",
            "Colaboración en tareas de mantenimiento preventivo y mejora continua de la infraestructura tecnológica.",
          ]
        },
        freelance_wordpress: {
          title: "Gestor de páginas web, Profesional independiente",
          date: "📅 Enero 2025 - Julio 2025",
          location: "📍 Remoto",
          responsibilities: [
            "Como profesional independiente, me encargué de la creación, configuración y gestión de una página web utilizando WordPress, alojada y administrada a través de IONOS.",
            "Realicé la construcción completa del sitio web, incluyendo la configuración de hosting y dominio, instalación y personalización de WordPress, temas y plugins. También gestioné la estructura del sitio y los contenidos, asegurando un diseño funcional y fácil de mantener.",
            "Además, llevé a cabo tareas de mantenimiento, actualizaciones, copias de seguridad y resolución de incidencias, garantizando la estabilidad y correcto funcionamiento de la web. Esta experiencia me permitió trabajar de forma autónoma, organizar proyectos web de principio a fin y adaptarme a las necesidades del cliente."
          ]
        },
        grupo_oro: {
          title: "Desarrollador Web, Grupo Oro",
          date: "📅 Septiembre 2025 - Diciembre 2025",
          location: "📍 Remoto",
          responsibilities: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando TypeScript, React, PHP y Laravel.",
            "Implementación de interfaces dinámicas y componentes reutilizables con React y Tailwind CSS, enfocadas en la experiencia de usuario.",
            "Diseño y gestión de bases de datos MySQL para aplicaciones web, asegurando eficiencia y escalabilidad.",
            "Integración de APIs REST, servicios externos y flujos de automatización mediante n8n, incluyendo procesos asistidos por inteligencia artificial.",
            "Automatización de tareas, sincronización de datos y optimización de flujos de trabajo mediante n8n para mejorar la productividad y reducir procesos manuales.",
            "Pruebas, depuración y optimización de código para mejorar el rendimiento, la estabilidad y la usabilidad de las aplicaciones.",
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
          done: "✅ Terminado",
          progress: "⏳ En proceso"
        },
        lego: {
          name: "Tienda Lego - Tienda de piezas de lego",
          description: "Una tienda online para vender piezas de Lego. Incluye registro de usuarios, carrito de compras y gestión de inventario.",
          builtWith: "Backend en Laravel con MySQL, frontend en HTML, CSS y JavaScript."
        },
        driver: {
          name: "Driver&Go - Plataforma de venta y alquiler de vehículos",
          description: "Aplicación web para la venta de coches. Permite la publicación de vehículos, gestión de usuarios y filtrado avanzado de autos.",
          builtWith: "Laravel y PHP en el backend, MySQL para la base de datos, HTML y CSS para la presentación."
        },
        southwines: {
          name: "SouthWines - Academia",
          description: "Plataforma de gestión académica que permite administrar cursos, profesores y alumnos de una academia.",
          builtWith: "Laravel como framework principal, base de datos MySQL y frontend con HTML, CSS y JavaScript."
        },
        zestcharge: {
          name: "ZestCharge - Tienda de bebidas energéticas",
          description: "E-commerce especializado en bebidas energéticas con pasarela de pagos y sistema de carrito.",
          builtWith: "Laravel en el backend, MySQL para la base de datos y TailwindCSS para la interfaz."
        },
        metotech: {
          name: "MeteoTech - Aplicacion Web del tiempo",
          description: "Aplicación Web para consultar el estado del tiempo.",
          builtWith: "Desarrollado con Angular, TypeScript, CSS y HTML."
        }
      }
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
          done: "✅ Completed",
          progress: "⏳ In Progress"
        },
        lego: {
          name: "Lego Store - Lego pieces store",
          description: "An online store to sell Lego pieces. Includes user registration, shopping cart, and inventory management.",
          builtWith: "Backend in Laravel with MySQL, frontend in HTML, CSS, and JavaScript."
        },
        driver: {
          name: "Driver&Go - Vehicle sales and rental platform",
          description: "Web application for selling cars. Allows vehicle publication, user management, and advanced car filtering.",
          builtWith: "Laravel and PHP in the backend, MySQL for the database, HTML and CSS for presentation."
        },
        southwines: {
          name: "SouthWines - Academy",
          description: "Academic management platform that allows administering courses, teachers, and students of an academy.",
          builtWith: "Laravel as main framework, MySQL database, and frontend with HTML, CSS, and JavaScript."
        },
        zestcharge: {
          name: "ZestCharge - Energy drinks store",
          description: "E-commerce specialized in energy drinks with payment gateway and shopping cart system.",
          builtWith: "Laravel in the backend, MySQL for the database, and TailwindCSS for the interface."
        },
        metotech: {
          name: "MeteoTech - Weather Web App",
          description: "Web Application to check weather status.",
          builtWith: "Developed with Angular, TypeScript, CSS, and HTML."
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
import { Injectable, inject } from '@angular/core';
import { Project } from '../models/project.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private languageService = inject(LanguageService);

  private projects: Project[] = [

    {
      slug: 'portfolio-v2',
      title: 'AnthoFu Portfolio v2',
      year: 2026,
      status: 'active',
      featured: true,
      period: 'Sep 2025 - Present',
      shortDescription: {
        en: 'Modernizing and optimizing my personal portfolio with Angular 18 and a focus on UX/UI.',
        es: 'Modernizando y optimizando mi portafolio personal con Angular 18 y un enfoque en UX/UI.'
      },
      fullDescription: {
        en: 'In this version, I am implementing advanced features like project grouping by year, unified design systems, and advanced animations using the latest Angular features.',
        es: 'En esta versión, estoy implementando características avanzadas como agrupación de proyectos por año, sistemas de diseño unificados y animaciones avanzadas utilizando las últimas funciones de Angular.'
      },
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://anthofu-portfolio.firebaseapp.com',
      repository: 'https://github.com/AnthoFu'
    },

    {
      slug: 'anthocito-discord-bot',
      title: 'Anthocito Bot - Discord Assistant',
      year: 2025,
      status: 'active',
      period: 'March 2024 - March 2026',
      shortDescription: {
        en: 'A multifunctional Discord bot built with TypeScript and Node.js, featuring a modular architecture, dynamic command handling, and MongoDB integration.',
        es: 'Un bot de Discord multifuncional construido con TypeScript y Node.js, con una arquitectura modular, manejo dinámico de comandos e integración con MongoDB.'
      },
      fullDescription: {
        en: 'Anthocito is a comprehensive Discord bot developed to manage servers, provide utility tools, and offer interactive minigames. What started as a JavaScript project evolved into a robust, type-safe TypeScript application.\n\nTechnical Highlights:\nI designed a highly modular architecture utilizing dynamic handlers for slash commands and Discord API events. This ensures the codebase remains clean and easily extensible as new features are added. Data persistence is managed through MongoDB and Mongoose schemas, providing reliable storage for server configurations and user statistics. \n\nResults:\nThe project currently serves as a solid, production-ready foundation with fully functional moderation and utility commands. It is optimized for continuous deployment on cloud platforms like Render, demonstrating a complete backend development lifecycle from local testing to live production.',
        es: 'Anthocito es un bot de Discord integral desarrollado para gestionar servidores, proporcionar herramientas de utilidad y ofrecer minijuegos interactivos. Lo que comenzó como un proyecto de JavaScript evolucionó hacia una aplicación TypeScript robusta y segura.\n\nAspectos Técnicos Destacados:\nDiseñé una arquitectura altamente modular utilizando controladores dinámicos para comandos de barra y eventos de la API de Discord. Esto asegura que el código se mantenga limpio y fácilmente extensible a medida que se agregan nuevas funciones. La persistencia de datos se gestiona a través de esquemas de MongoDB y Mongoose, proporcionando un almacenamiento confiable para las configuraciones del servidor y las estadísticas de los usuarios.\n\nResultados:\nEl proyecto actualmente sirve como una base sólida y lista para producción con comandos de moderación y utilidad totalmente funcionales. Está optimizado para el despliegue continuo en plataformas en la nube como Render, demostrando un ciclo de vida de desarrollo backend completo, desde las pruebas locales hasta la producción en vivo.'
      },
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB', 'Mongoose'],
      images: ['images/anthocito-banner.png', 'images/AnthoFu-Icon_2.png'],
      selectedImageIndex: 0,
      repository: 'https://github.com/anthofu/anthocito'
    },

    {
      slug: "teslo-shop",
      title: "Teslo Shop - Fullstack E-commerce API",
      year: 2026,
      status: "completed",
      featured: true,
      period: "January 2026 - February 2026",
      shortDescription: {
        en: "A complete e-commerce backend solution featuring a NestJS REST API, PostgreSQL integration, and real-time WebSockets.",
        es: "Una solución completa de backend para comercio electrónico que cuenta con una API REST NestJS, integración con PostgreSQL y WebSockets en tiempo real."
      },
      fullDescription: {
        en: "Teslo Shop is a robust and scalable e-commerce platform built with modern backend technologies. The project features a comprehensive RESTful API powered by NestJS, with advanced implementations of JWT authentication, custom authorization decorators, and TypeORM for efficient PostgreSQL database management. It also includes a specialized WebSocket service to handle real-time communication and a dedicated client for live interaction.\n\nTechnical Challenges:\nThe main challenge was implementing a secure and flexible authentication and authorization system using JWT and Passport, ensuring granular access control across different user roles. Additionally, managing complex product data with multiple image relationships required a sophisticated database schema and efficient file upload handling with Multer. Integrating real-time features with Socket.io while maintaining strict type safety across the entire system was another significant architectural focus.\n\nResults:\nThe project delivers a production-ready API with full CRUD capabilities, automated database seeding, and a documented structure using Swagger. It provides a powerful and extensible foundation for modern e-commerce applications, complemented by a Vite-based WebSocket client for real-time monitoring and interaction.",
        es: "Teslo Shop es una plataforma de comercio electrónico robusta y escalable construida con tecnologías de backend modernas. El proyecto cuenta con una API RESTful integral impulsada por NestJS, con implementaciones avanzadas de autenticación JWT, decoradores de autorización personalizados y TypeORM para una gestión eficiente de la base de datos PostgreSQL. También incluye un servicio de WebSocket especializado para manejar la comunicación en tiempo real y un cliente dedicado para la interacción en vivo.\n\nDesafíos Técnicos:\nEl principal desafío fue implementar un sistema de autenticación y autorización seguro y flexible utilizando JWT y Passport, asegurando un control de acceso granular a través de diferentes roles de usuario. Además, la gestión de datos de productos complejos con múltiples relaciones de imagen requirió un esquema de base de datos sofisticado y un manejo eficiente de la carga de archivos con Multer. La integración de funciones en tiempo real con Socket.io manteniendo una estricta seguridad de tipos en todo el sistema fue otro enfoque arquitectónico significativo.\n\nResultados:\nEl proyecto ofrece una API lista para producción con capacidades CRUD completas, siembra automatizada de bases de datos y una estructura documentada con Swagger. Proporciona una base potente y extensible para aplicaciones de comercio electrónico modernas, complementada por un cliente WebSocket basado en Vite para el monitoreo e interacción en tiempo real."
      },
      technologies: ["NestJS", "PostgreSQL", "TypeORM", "WebSockets", "JWT","TypeScript", "Vite"],
      images: ["images/banner-pc.png", "images/banner-cel.png", "static/products/100042301_0_2000.jpg"],
      selectedImageIndex: 0,
      repository: "https://github.com/AnthoFu/04-teslo-shop",
      liveDemo: "https://anthofu-chatter.netlify.app"
    },

    {
      slug: 'financiame-mobile-app',
      title: 'FinanciaMe - Personal Finance Manager',
      year: 2025,
      status: 'active',
      featured: true,
      period: 'August 2025 - Present',
      shortDescription: {
        en: 'I developed an offline-first mobile application using React Native and Zustand to help users manage multi-currency finances, track expenses, and reach savings goals with real-time exchange rates.',
        es: 'Desarrollé una aplicación móvil "offline-first" utilizando React Native y Zustand para ayudar a los usuarios a gestionar finanzas multi-moneda, realizar un seguimiento de los gastos y alcanzar metas de ahorro con tipos de cambio en tiempo real.'
      },
      fullDescription: {
        en: 'FinanciaMe was born from the need for a robust, offline-first personal finance tool tailored for users in multi-currency environments, such as Venezuela. Young professionals often struggle to consolidate balances across different currencies (USD, VES, USDT). This application provides a unified view of their financial health by fetching real-time exchange rates while keeping all sensitive data securely on the device.\n\nTechnical Challenges:\nThe primary challenge was implementing a reliable offline-first architecture. I utilized Zustand with custom persistence logic and migration strategies to ensure data integrity across app updates. Managing complex financial logic, such as multi-currency transfers with commissions and automated recurring expenses, required a strict state management pattern to prevent balance inconsistencies. Additionally, creating a smooth, interactive user experience with Expo Reanimated and custom UI components was essential for user engagement.\n\nResults:\nThe final product is a high-performance, type-safe mobile application built with TypeScript and Expo. Key technologies include Zustand for lightweight state management and React Native Chart Kit for data visualization. The app features a comprehensive budgeting system, savings tracking, and an automated notification system for fixed expenses, making it a complete solution for modern financial management.',
        es: 'FinanciaMe nació de la necesidad de una herramienta de finanzas personales robusta y "offline-first", adaptada para usuarios en entornos multi-moneda, como Venezuela. Los jóvenes profesionales a menudo tienen dificultades para consolidar los saldos en diferentes monedas (USD, VES, USDT). Esta aplicación proporciona una vista unificada de su salud financiera al obtener tipos de cambio en tiempo real mientras mantiene todos los datos sensibles de forma segura en el dispositivo.\n\nDesafíos Técnicos:\nEl principal desafío fue implementar una arquitectura "offline-first" confiable. Utilicé Zustand con lógica de persistencia personalizada y estrategias de migración para asegurar la integridad de los datos a través de las actualizaciones de la aplicación. La gestión de la lógica financiera compleja, como las transferencias multi-moneda con comisiones y los gastos recurrentes automatizados, requirió un patrón de gestión de estado estricto para evitar inconsistencias en el saldo. Además, la creación de una experiencia de usuario fluida e interactiva con Expo Reanimated y componentes de interfaz de usuario personalizados fue esencial para el compromiso del usuario.\n\nResultados:\nEl producto final es una aplicación móvil de alto rendimiento y segura, construida con TypeScript y Expo. Las tecnologías clave incluyen Zustand para una gestión de estado ligera y React Native Chart Kit para la visualización de datos. La aplicación cuenta con un sistema de presupuesto integral, seguimiento de ahorros y un sistema de notificaciones automatizadas para gastos fijos, lo que la convierte en una solución completa para la gestión financiera moderna.'
      },
      technologies: ['React Native', 'TypeScript', 'Zustand', 'Expo', 'Reanimated'],
      images: ['images/screenshot-home.jpg', 'images/screenshot-billeteras.jpg', 'images/screenshot-metas.jpg'],
      selectedImageIndex: 0,
      repository:'https://github.com/AnthoFu/FinanciaMe',
      liveDemo:'https://play.google.com/store/apps/details?id=com.anthofu.FinanciaMe'
    },

    {
      slug: 'anthofu-fake-store-angular',
      title: 'AnthoFu\'s Fake Store',
      year: 2025,
      status: 'completed',
      period: 'February 2025 - April 2025',
      shortDescription: {
        en: 'A dynamic e-commerce frontend built with Angular 17, featuring external REST API integration, reactive state management with Signals, and category filtering.',
        es: 'Un frontend de comercio electrónico dinámico construido con Angular 17, que cuenta con integración de API REST externa, gestión de estado reactiva con Signals y filtrado por categorías.'
      },
      fullDescription: {
        en: 'Developed as the main project for an intensive Angular 17 course, this application is a fully functional e-commerce frontend. It seamlessly connects to the Platzi FakeAPI to fetch and render a comprehensive product catalog. Users can explore items, filter by categories, view detailed product pages, and interact with a real-time shopping cart where the total automatically updates.\n\nTechnical Highlights:\nThis project showcases the implementation of modern Angular 17 features. I utilized Signals for efficient and reactive state management across components, allowing for seamless cart updates. The UI benefits from the modern control flow syntax (@if, @for, @switch) for cleaner, more readable templates. Additionally, I focused on frontend performance optimization by implementing advanced routing techniques like Lazy Loading and component prefetching. The architecture is highly modular, relying on reusable components, custom pipes, and robust dependency injection.',
        es: 'Desarrollada como el proyecto principal para un curso intensivo de Angular 17, esta aplicación es un frontend de comercio electrónico totalmente funcional. Se conecta a la perfección con la FakeAPI de Platzi para obtener y renderizar un catálogo completo de productos. Los usuarios pueden explorar artículos, filtrar por categorías, ver páginas detalladas de productos e interactuar con un carrito de compras en tiempo real donde el total se actualiza automáticamente.\n\nAspectos Técnicos Destacados:\nEste proyecto muestra la implementación de las características modernas de Angular 17. Utilicé Signals para una gestión de estado eficiente y reactiva en todos los componentes, permitiendo actualizaciones fluidas del carrito. La interfaz de usuario se beneficia de la sintaxis moderna de flujo de control (@if, @for, @switch) para plantillas más limpias y legibles. Además, me enfoqué en la optimización del rendimiento del frontend mediante la implementación de técnicas de enrutamiento avanzadas como Lazy Loading y pre-búsqueda de componentes. La arquitectura es altamente modular, basándose en componentes reutilizables, tuberías personalizadas y una robusta inyección de dependencias.'
      },
      technologies: ['Angular 17', 'TypeScript', 'REST API', 'Signals', 'Vercel'],
      images: ['images/ecommerce-banner-pc.png', 'images/ecommerce-banner-cel.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://anthofu-ecommerce.vercel.app',
      repository: 'https://github.com/AnthoFu/Angular-17-Platzi'
    },

    {
      slug: 'unexca-prototype-website',
      title: 'UNEXCA Prototype Website',
      year: 2025,
      status: 'completed',
      period: 'November 2024 - March 2025',
      shortDescription: {
        en: 'I led the development of a modern, intuitive prototype website for UNEXCA, utilizing vanilla web technologies and integrating the Meta API for real-time social media updates.',
        es: 'Lideré el desarrollo de un sitio web prototipo moderno e intuitivo para UNEXCA, utilizando tecnologías web "vanilla" e integrando la API de Meta para actualizaciones de redes sociales en tiempo real.'
      },
      fullDescription: {
        en: 'As the lead developer, I guided a team over four key months to modernize the digital presence of the Universidad Nacional Experimental de la Gran Caracas (UNEXCA), in association with Universidad Nacional Experimental Francisco de Miranda.\n\nOur main objective was to build an intuitive and engaging platform. I focused on leading the team to deliver features that empower the university community:\n\n• Real-Time Information: We integrated the Meta API to fetch and display the latest social media news directly on the homepage.\n• Simplified Navigation: We structured a clear interface so users can easily find Academic Programs, News, and all campus locations.\n• Institutional Identity: We developed dedicated sections highlighting the university\'s values, history, and mission.\n\nBuilt entirely with vanilla web technologies, this project is in constant evolution, successfully laying the foundation for future functionalities like a virtual thesis library.',
        es: 'Como desarrollador principal, guié a un equipo durante cuatro meses clave para modernizar la presencia digital de la Universidad Nacional Experimental de la Gran Caracas (UNEXCA), en asociación con la Universidad Nacional Experimental Francisco de Miranda.\n\nNuestro objetivo principal fue construir una plataforma intuitiva y atractiva. Me enfoqué en liderar al equipo para ofrecer características que empoderen a la comunidad universitaria:\n\n• Información en Tiempo Real: Integramos la API de Meta para obtener y mostrar las últimas noticias de las redes sociales directamente en la página de inicio.\n• Navegación Simplificada: Estructuramos una interfaz clara para que los usuarios puedan encontrar fácilmente Programas Académicos, Noticias y todas las ubicaciones del campus.\n• Identidad Institucional: Desarrollamos secciones dedicadas que destacan los valores, la historia y la misión de la universidad.\n\nConstruido íntegramente con tecnologías web "vanilla", este proyecto está en constante evolución, sentando con éxito las bases para futuras funcionalidades como una biblioteca virtual de tesis.'
      },
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Meta API', 'Project Management'],
      images: ['images/unexca-banner-pc.png', 'images/unexca-banner-cel.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://unexca-website.netlify.app'
    },

    {
      slug: 'legacy-project',
      title: 'Old Portfolio',
      year: 2024,
      status: 'completed',
      period: 'June 2024 - September 2024',
      shortDescription: {
        en: 'My very first portfolio built with vanilla HTML/CSS/JS.',
        es: 'Mi primer portafolio construido con HTML/CSS/JS "vanilla".'
      },
      fullDescription: {
        en: 'This is where everything started. A simple but effective way to showcase my first steps in the development world.',
        es: 'Aquí es donde empezó todo. Una forma sencilla pero eficaz de mostrar mis primeros pasos en el mundo del desarrollo.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0,
      repository:'https://github.com/AnthoFu/Portfolio/tree/main/archive/legacy'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(limit: number = 3): Project[] {
    return this.projects
      .filter(p => p.featured)
      .sort((a, b) => b.year - a.year) // Ordenamos por mas reciente primero
      .slice(0, limit);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}

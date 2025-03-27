// NAVBAR-----------------------------------------------------------------

export const Navbar_ES = {
  Home: 'Inicio',
  About: 'Sobre mí',
  Projects: 'Proyectos',
  Studies: 'Estudios',
  Skills: 'Habilidades',
  WorkExperience: 'Experiencia',
  ContactMe: 'Contacto'
};

// HOME--------------------------------------------------------------------

export const Home_ES = {
  Title: 'S<span>o</span>y Rafael',
  Subtitle: 'Desarollador <span>Full Stack</span>',
  Button: 'Conóceme'
};

// ABOUT ME----------------------------------------------------------------

export const About_ES = {
  Title: 'Sobre mí',
  About:
    "Programador <span>Full Stack</span> con 3 años de experiencia, soy un Desarrollador Web <span>DevOps</span> con experiencia en desarrollo con <span>Javascript</span> con frameworks como <span>Vue.js</span>, <span>Reactjs</span> y de css como <span>Tailwind css</span> y <span>Boostrap</span>. También poseo habilidades sólidas con herramientas de programación full stack como lo son los frameworks <span>Laravel</span> en Php y <span>Next</span> en Javascript, además de un amplio conocimiento en la creación, actualización y mantenimiento de <span>APIs</span> y <span>API RESTFUL</span> con herramientas de desarrollo como <span>Node.js</span>, <span>Php</span> o <span>Python</span>, así como en el manejo de bases de datos relacionales como <span>MYSQL</span>, <span>PostgreSQL</span>, <span>Oracle</span>, <span>MS SQL Server</span> y herramientas de control de versiones como <span>GIT</span>. Durante mi trayectoria, además, he tenido la responsabilidad de realizar despliegues con protocolos <span>HTTP</span> y <span>WS</span> en servicios web como <span>AWS</span>, <span>Vercel</span> y <span>Cloudflare</span> demostrando mi capacidad para gestionar eficientemente el ciclo de vida completo de desarrollo de aplicaciones web."
};

// PROJECTS----------------------------------------------------------------
//HARMON-IA
import HarmonHome from '../assets/Harmon-IA/Harmon-IA-Page.png';
import HarmonSearch from '../assets/Harmon-IA/Harmon-IA-Search.png';
// NEXUS IMG
import NexusLanding from '../assets/NexusApp/NexusLanding.jpg';
import NexusHome from '../assets/NexusApp/NexusHome.jpg';
import NexusDetail from '../assets/NexusApp/NexusDetail.jpg';
import NexusFrom from '../assets/NexusApp/NexusForm.jpg';
// BAIT IMG
import BaitLanding1 from '../assets/BaitApp/BaitLading1img.jpg';
import BaitLanding2 from '../assets/BaitApp/BaitLading2img.jpg';
import BaitHome from '../assets/BaitApp/BaitHomeimg.jpg';
import BaitLocal from '../assets/BaitApp/BaitLocalimg.jpg';
import BaitIncrip from '../assets/BaitApp/BaitInscriptionimg.jpg';
import BaitReview from '../assets/BaitApp/BaitReviewFormlimg.jpg';
import BaitReviewList from '../assets/BaitApp/BaitReviewListlimg.jpg';
// WEATHER APP
import WeatherApp from '../assets/WeatherApp/WeatherAppImg.jpg';
// Gif Generator
import GifGen from '../assets/GifCreator/GifCreator.jpg';
// 4Game
import Game from '../assets/Game4/Game4Img.jpg';
// IsiClinic
import IsiClinicDashboard from '../assets/IsiClinic/IsiClinicDashboard.png';
// Mesura
import MesuraDashboard from '../assets/Mesura/MesuraDashboard.png';
// NeoNet
import NeoNetHome from '../assets/Neonet/NeoNetHome.png';
// El Roble
import ElRobleHome from '../assets/ElRoble/ElRobleHome.png';

export const Projects_ES = {
  Title: 'Proyectos',
  Projects: [
    {
      id: 0,
      name: 'IsiClinic',
      img: [IsiClinicDashboard],
      description:
        'IsiClinic es una plataforma integral para la gestión de clínicas médicas que permite administrar pacientes, citas, historiales clínicos y facturación en un solo lugar. Este sistema facilita el trabajo diario del personal médico y administrativo, mejorando la eficiencia y la atención al paciente.',
      url: 'https://isi.clinic/'
    },
    {
      id: 1,
      name: 'NeoNet',
      img: [NeoNetHome],
      description:
        'NeoNet es una plataforma de servicios de pagos electrónicos que facilita transacciones seguras y eficientes. El sistema ofrece múltiples opciones de pago, conciliación automática y reportes detallados, permitiendo a empresas y usuarios gestionar sus operaciones financieras de manera ágil y confiable.',
      url: 'https://neonet.com.gt/'
    },
    {
      id: 2,
      name: 'El Roble',
      img: [ElRobleHome],
      description:
        'El Roble es una empresa de seguros líder en Guatemala que ofrece una amplia gama de coberturas, desde seguros de vida y salud hasta protección para vehículos, viviendas y empresas. Su plataforma digital permite a los usuarios cotizar, contratar y gestionar sus pólizas de manera eficiente y transparente.',
      url: 'https://www.elroble.com/'
    },
    {
      id: 3,
      name: 'Mesura',
      img: [MesuraDashboard],
      description:
        'Mesura es una plataforma de comercio electrónico completa que no solo facilita las ventas online sino que también ofrece herramientas avanzadas para la administración personalizada de toda la tienda. El sistema incluye gestión de inventario, análisis de ventas, seguimiento de pedidos y múltiples opciones de personalización para adaptarse a las necesidades específicas de cada negocio.',
      url: 'https://mesura-pearl.vercel.app/'
    },
    {
      id: 4,
      name: 'Harmon-Ia',
      img: [HarmonHome, HarmonSearch],
      description:
        'Harmon-Ia es un Reproductor y Creador de musica online que busca principalmente ser un banco de musica para su posterior escucha de sus usuarios pero tambien busca integrar tecnologias de Inteligencia Artificial para la creacion de musica basada en APIs de IA-Audio-Generator esta nueva implementacion estara disponible en la proxima version...',
      url: 'https://harmon-ia.vercel.app/'
    },
    {
      id: 5,
      name: 'Nexus App',
      img: [NexusLanding, NexusHome, NexusDetail, NexusFrom],
      description:
        'Nexus es una aplicación que consume la API de <a href="https://rawg.io/">Rawg.io</a>, la cual contiene más de 500.000 juegos de todas las consolas. Esta aplicación permite ver sus especificaciones y detalles. Además, Nexus provee una base de datos para agregar juegos a una biblioteca propia...',
      url: 'https://nexus-pi-app.vercel.app/'
    },
    {
      id: 6,
      name: 'Bait App',
      img: [
        BaitLanding1,
        BaitLanding2,
        BaitHome,
        BaitLocal,
        BaitIncrip,
        BaitReview,
        BaitReviewList
      ],
      description:
        'Bait es una aplicación desarrollada para una empresa argentina que busca posicionarse en el mercado nacional como una app de recomendación y reseñas de locales gastronómicos. Fui responsable del frontend de esta app, dándole una apariencia y uso rápido y sencillo. Cabe aclarar que este enlace es demostrativo y no es el enlace de uso comercial de la app...',
      url: 'https://bait-one.vercel.app/'
    },
    {
      id: 7,
      name: 'Weather App',
      img: [WeatherApp],
      description:
        'Weather App es una web que te permite conocer el clima de cualquier ciudad en el mundo. Esto se logra gracias a la API de <a href="https://openweathermap.org/">openweathermap.org</a>, la cual nos brinda esta información en tiempo real...',
      url: 'https://weather-app-wine-rho.vercel.app/'
    },
    {
      id: 8,
      name: 'Gif Creator',
      img: [GifGen],
      description:
        'Gif Generator te permite generar gifs según la palabra clave de búsqueda. Esto se logra gracias a la API de <a href="https://giphy.com/">giphy.com</a>, que cuenta con una gran variedad de gifs en su base de datos...',
      url: 'https://gif-creator.vercel.app/'
    },
    {
      id: 9,
      name: '4Game',
      img: [Game],
      description:
        '4Game es el popular juego de la tabla donde los jugadores deberán tratar de encadenar 4 fichas del mismo color para ganar. Está diseñado para alternar los turnos y actualmente funciona sin conexión a internet. Espero actualizarlo pronto para que se pueda jugar en línea...',
      url: 'https://game4-rho.vercel.app/'
    }
  ]
};

// STUDIES----------------------------------------------------------------

export const Studies_ES = {
  Title: 'Estudios',
  Studies: [
    {
      degree: 'Bootcamp Soy Henry - Desarrollo Web Full Stack',
      date: 'OCT/08/2022 - DIC/23/2022',
      description:
        'Durante mi tiempo en el Bootcamp Soy Henry, aprendí mucho en poco tiempo. La mejor enseñanza que recibí fue aprender rápidamente y con ganas de seguir aprendiendo. Además, complementé mi aprendizaje profesional con lo que recibí aquí y me siento capaz de lograr cualquier objetivo en programación.'
    },
    {
      degree: 'Universidad de La Guajira - Ingeniería de Sistemas',
      date: 'ENE/23/2018 - Actualidad',
      description:
        'En mis estudios universitarios fue donde comencé a trazar mi camino como programador. Aprendí lógica de programación, análisis de requisitos, tipos de desarrollo y lenguajes de programación de tipado fuerte y débil. En general, adquirí las bases para ser un programador completo. Sin embargo, después de 5 años no he podido terminar mi carrera profesional debido a problemas económicos.'
    },
    {
      degree: 'Politécnico del Caribe - Educación Secundaria',
      date: 'ENE/28/2016 - DIC/13/2017',
      description:
        'En mis estudios de secundaria, aprendí trabajo en equipo, valores necesarios para la vida, compañerismo y siempre sobresalí en matemáticas. Fue allí donde descubrí que una carrera relacionada con la lógica era ideal para mí.'
    }
  ]
};

// CONTACT----------------------------------------------------------------

export const Contact_ES = {
  Title: 'Contáctame',
  Text: 'Será un placer proporcionar mis servicios para contribuir a la evolución de tu empresa',
  InputEmail: 'Correo electrónico',
  RegexEmail: 'Ingresa un correo electrónico válido',
  GoodEmail: 'Correo electrónico correcto',
  BadEmail: 'Por favor, ingresa un correo electrónico válido',
  EmailMessage: 'Mensaje',
  MessagePlaceholder: 'Ingresa tu mensaje'
};

// ERROR----------------------------------------------------------------

export const Error1_ES = {
  Title: 'Upss!',
  Text: 'Algo salio mal, asegurate de llenar los campos y vuelve a intentarlo',
  Botton: 'Entendido'
};

export const Error2_ES = {
  Title: '¿No se envia el e-mail?',
  Text: 'Comunicate conmigo por mis redes sociales.',
  Botton: 'Entendido'
};

// SUCCESS----------------------------------------------------------------

export const Success_ES = {
  Title: '¡Enviado exitosamente!',
  Text: 'Gracias por escribirme, te responderé muy pronto.',
  Ad: '¿Quieres saber más sobre mí? Echa un vistazo a mis redes sociales...',
  Button: 'Aceptar'
};

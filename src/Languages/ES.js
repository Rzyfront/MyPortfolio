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
    "¡Hola! Soy un apasionado desarrollador web <span>full stack</span> con un enfoque en la creatividad. Descubro e implemento nuevas bibliotecas de <span>JavaScript</span> y <span>React</span> en mis proyectos para sorprender y reducir los tiempos de desarrollo. Con una dedicación a los diseños <span>minimalistas</span>, combino la simplicidad con detalles destacados. Creo aplicaciones web funcionales y atractivas que superan las expectativas. Tengo experiencia en tecnologías backend como Express, Sequelize y <span>Postgresql</span>. ¡Llevaré tus proyectos al <span className='nextlv'>siguiente nivel</span>!"
};

// PROJECTS----------------------------------------------------------------

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
export const Projects_ES = {
  Title: 'Proyectos',
  Projects: [
    {
      id: 1,
      name: 'Nexus App',
      img: [NexusLanding, NexusHome, NexusDetail, NexusFrom],
      description:
        'Nexus es una aplicación que consume la API de <a href="https://rawg.io/">Rawg.io</a>, la cual contiene más de 500.000 juegos de todas las consolas. Esta aplicación permite ver sus especificaciones y detalles. Además, Nexus provee una base de datos para agregar juegos a una biblioteca propia...',
      url: 'https://nexus-pi-app.vercel.app/'
    },
    {
      id: 2,
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
      id: 3,
      name: 'Weather App',
      img: [WeatherApp],
      description:
        'Weather App es una web que te permite conocer el clima de cualquier ciudad en el mundo. Esto se logra gracias a la API de <a href="https://openweathermap.org/">openweathermap.org</a>, la cual nos brinda esta información en tiempo real...',
      url: 'https://weather-app-wine-rho.vercel.app/'
    },
    {
      id: 4,
      name: 'Gif Creator',
      img: [GifGen],
      description:
        'Gif Generator te permite generar gifs según la palabra clave de búsqueda. Esto se logra gracias a la API de <a href="https://giphy.com/">giphy.com</a>, que cuenta con una gran variedad de gifs en su base de datos...',
      url: 'https://git-creator.vercel.app/'
    },
    {
      id: 5,
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
      date: 'ENE/12/2023 - MAY/08/2023',
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

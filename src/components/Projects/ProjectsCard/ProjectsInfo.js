// NEXUS IMG
import NexusLanding from '../../../assets/NexusApp/NexusLanding.jpg';
import NexusHome from '../../../assets/NexusApp/NexusHome.jpg';
import NexusDetail from '../../../assets/NexusApp/NexusDetail.jpg';
import NexusFrom from '../../../assets/NexusApp/NexusForm.jpg';
// BAIT IMG
import BaitLanding1 from '../../../assets/BaitApp/BaitLading1img.jpg';
import BaitLanding2 from '../../../assets/BaitApp/BaitLading2img.jpg';
import BaitHome from '../../../assets/BaitApp/BaitHomeimg.jpg';
import BaitLocal from '../../../assets/BaitApp/BaitLocalimg.jpg';
import BaitIncrip from '../../../assets/BaitApp/BaitInscriptionimg.jpg';
import BaitReview from '../../../assets/BaitApp/BaitReviewFormlimg.jpg';
import BaitReviewList from '../../../assets/BaitApp/BaitReviewListlimg.jpg';
// WEATHER APP
import WeatherApp from '../../../assets/WeatherApp/WeatherAppImg.jpg';
// Gif Generator
import GifGen from '../../../assets/GifCreator/GifCreator.jpg';
// 4Game
import Game from '../../../assets/Game4/Game4Img.jpg';
export const Info = [
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
];

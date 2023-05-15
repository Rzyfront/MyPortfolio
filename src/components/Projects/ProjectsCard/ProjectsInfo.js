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
      'Nexus is an application that consumes the API from <a href="https://rawg.io/">Rawg.io</a>, which contains over 500,000 games from all consoles. This application allows you to view their specifications and details. Additionally, Nexus provides a database to add games to your own library...',
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
      'Bait is an application developed for an Argentinian company that aims to position itself in the national market as an app for recommending and reviewing gastronomic establishments. I was responsible for the frontend of this app, giving it a fast and user-friendly interface. Please note that this link is for demonstration purposes and not the commercial link for the app...',
    url: 'https://bait-one.vercel.app/'
  },
  {
    id: 3,
    name: 'Weather App',
    img: [WeatherApp],
    description:
      'Weather App is a website that allows you to check the weather of any city in the world. This is made possible thanks to the API from <a href="https://openweathermap.org/">openweathermap.org</a>, which provides us with real-time weather information...',
    url: 'https://weather-app-wine-rho.vercel.app/'
  },
  {
    id: 4,
    name: 'Gif Creator',
    img: [GifGen],
    description:
      'Gif Generator allows you to generate gifs based on your search keyword. This is achieved thanks to the API from <a href="https://giphy.com/">giphy.com</a>, which offers a wide variety of gifs in its database...',
    url: 'https://gif-creator.vercel.app/'
  },
  {
    id: 5,
    name: '4Game',
    img: [Game],
    description:
      '4Game is the popular board game where players try to connect 4 tokens of the same color to win. It is designed to take turns and currently works offline. I hope to update it soon to enable online play...',
    url: 'https://game4-rho.vercel.app/'
  }
];

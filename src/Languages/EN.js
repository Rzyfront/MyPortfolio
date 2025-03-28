// NAVBAR-----------------------------------------------------------------

export const Navbar_EN = {
  Home: 'Home',
  About: 'About',
  Projects: 'Projects',
  Studies: 'Studies',
  Skills: 'Skills',
  WorkExperience: 'Work Experience',
  ContactMe: 'Contact me'
};

// HOME--------------------------------------------------------------------

export const Home_EN = {
  Title: "I<span>'</span>m Rafael",
  Subtitle: '<span>Full Stack</span> Developer',
  Button: 'Know me'
};

// ABOUT ME----------------------------------------------------------------

export const About_EN = {
  Title: 'About me',
  About:
    "<span>Full Stack</span> Programmer with 3 years of experience, I am a <span>DevOps</span> Web Developer with expertise in <span>Javascript</span> development using frameworks such as <span>Vue.js</span>, <span>Reactjs</span> and CSS frameworks like <span>Tailwind css</span> and <span>Bootstrap</span>. I also possess strong skills with full stack programming tools like <span>Laravel</span> framework in Php and <span>Next</span> in Javascript, as well as extensive knowledge in creating, updating, and maintaining <span>APIs</span> and <span>RESTful APIs</span> with development tools like <span>Node.js</span>, <span>Php</span> or <span>Python</span>, along with managing relational databases such as <span>MYSQL</span>, <span>PostgreSQL</span>, <span>Oracle</span>, <span>MS SQL Server</span> and version control tools like <span>GIT</span>. Throughout my career, I have also been responsible for deployments using <span>HTTP</span> and <span>WS</span> protocols on web services like <span>AWS</span>, <span>Vercel</span>, and <span>Cloudflare</span>, demonstrating my ability to efficiently manage the complete lifecycle of web application development."
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

export const Projects_EN = {
  Title: 'Projects',
  Projects: [
    {
      id: 0,
      name: 'IsiClinic',
      img: [IsiClinicDashboard],
      description:
        'IsiClinic is a comprehensive platform for medical clinic management that allows administration of patients, appointments, medical records, and billing in one place. This system facilitates the daily work of medical and administrative staff, improving efficiency and patient care.',
      url: 'https://isi.clinic/'
    },
    {
      id: 1,
      name: 'NeoNet',
      img: [NeoNetHome],
      description:
        'NeoNet is an electronic payment services platform that facilitates secure and efficient transactions. The system offers multiple payment options, automatic reconciliation, and detailed reports, allowing businesses and users to manage their financial operations in an agile and reliable way.',
      url: 'https://neonet.com.gt/'
    },
    {
      id: 2,
      name: 'El Roble',
      img: [ElRobleHome],
      description:
        'El Roble is a leading insurance company in Guatemala that offers a wide range of coverage, from life and health insurance to protection for vehicles, homes, and businesses. Their digital platform allows users to quote, contract, and manage their policies efficiently and transparently.',
      url: 'https://www.elroble.com/'
    },
    {
      id: 3,
      name: 'Mesura',
      img: [MesuraDashboard],
      description:
        'Mesura is a complete e-commerce platform that not only facilitates online sales but also offers advanced tools for personalized store management. The system includes inventory management, sales analysis, order tracking, and multiple customization options to adapt to the specific needs of each business.',
      url: 'https://mesura-pearl.vercel.app/'
    },
    {
      id: 4,
      name: 'Harmon-Ia',
      img: [HarmonHome, HarmonSearch],
      description:
        'Harmon-Ia is an online music player and creator that aims to be a music repository for its users to listen to. It also seeks to integrate Artificial Intelligence technologies for music creation, based on AI-Audio-Generator APIs. This new implementation will be available in the next version...',
      url: 'https://harmon-ia.vercel.app/'
    },
    {
      id: 5,
      name: 'Nexus App',
      img: [NexusLanding, NexusHome, NexusDetail, NexusFrom],
      description:
        'Nexus is an application that consumes the API from <a href="https://rawg.io/">Rawg.io</a>, which contains over 500,000 games from all consoles. This application allows you to view their specifications and details. Additionally, Nexus provides a database to add games to your own library...',
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
        'Bait is an application developed for an Argentinian company that aims to position itself in the national market as an app for recommending and reviewing gastronomic establishments. I was responsible for the frontend of this app, giving it a fast and user-friendly interface. Please note that this link is for demonstration purposes and not the commercial link for the app...',
      url: 'https://bait-one.vercel.app/'
    },
    {
      id: 7,
      name: 'Weather App',
      img: [WeatherApp],
      description:
        'Weather App is a website that allows you to check the weather of any city in the world. This is made possible thanks to the API from <a href="https://openweathermap.org/">openweathermap.org</a>, which provides us with real-time weather information...',
      url: 'https://weather-app-wine-rho.vercel.app/'
    },
    {
      id: 8,
      name: 'Gif Creator',
      img: [GifGen],
      description:
        'Gif Generator allows you to generate gifs based on your search keyword. This is achieved thanks to the API from <a href="https://giphy.com/">giphy.com</a>, which offers a wide variety of gifs in its database...',
      url: 'https://gif-creator.vercel.app/'
    },
    {
      id: 9,
      name: '4Game',
      img: [Game],
      description:
        '4Game is the popular board game where players try to connect 4 tokens of the same color to win. It is designed to take turns and currently works offline. I hope to update it soon to enable online play...',
      url: 'https://game4-rho.vercel.app/'
    }
  ]
};

// STUDIES----------------------------------------------------------------

export const Studies_EN = {
  Title: 'Studies',
  Studies: [
    {
      degree: 'BootCamp Soy Henry - Full Stack Web Developer',
      date: 'OCT/08/2022 - DIC/23/2022',
      description:
        'During my time at the Bootcamp I am Henry I learned a lot in a short time, the best teaching I have is to learn quickly and with the desire to learn more, but also, I complement my professional learning with what I received here and I feel capable of achieving any goal in programming.'
    },
    {
      degree: 'Universidad de La Guajira - Systems Engineering',
      date: 'JAN/23/2018 - Currently',
      description:
        'In my professional studies it was where I began to trace my path as a programmer, I learned programming logic, requirements analysis, types of development, strong and weakly typed programming languages. In general I acquired the bases to be a complete programmer, however after 5 years I have not been able to finish my professional career due to economic problems.'
    },
    {
      degree: 'Politecnico del Caribe - High School',
      date: 'JAN/28/2016 - DIC/13/2017',
      description:
        "In my high school studies, I learned teamwork, necessary values for life, fellowship, and I always excelled in mathematics, that's where I discovered that a career related to logic was ideal for me."
    }
  ]
};

// CONTACT----------------------------------------------------------------

export const Contact_EN = {
  Title: 'Contact me',
  Text: 'It will be a pleasure to provide my services to contribute to the evolution of your company',
  InputEmail: 'E-mail',
  RegexEmail: 'Enter a valid e-mail',
  GoodEmail: 'Correct e-mail',
  BadEmail: 'Please enter a valid e-mail',
  EmailMessage: 'Message',
  MessagePlaceholder: 'Enter your message'
};

// ERROR----------------------------------------------------------------

export const Error1_EN = {
  Title: 'Upss!',
  Text: 'Something went wrong, make sure to fill in the fields and try again',
  Botton: 'Understood'
};

export const Error2_EN = {
  Title: 'The e-mail is not sent?',
  Text: 'Contact me through my social networks.',
  Botton: 'Ok'
};

// SUCCESS----------------------------------------------------------------

export const Success_EN = {
  Title: 'Sent successfully!',
  Text: 'Thank you for writing to me, I will be answering you very soon.',
  Ad: 'Do you want to know more about me? look at my social media...',
  Botton: 'Ok'
};

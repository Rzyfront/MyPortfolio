import React from 'react'
import './AboutMe.css'
import Img from '../../assets/ImgHenry.svg'

function AboutMe() {
  return (
    <div className="Container-AboutMe" id='AboutMe'>
    <div className="Info-AboutMe">
        <div className="AboutInfo">
        <h2 className="Title-AboutMe">About me</h2>
        <p className="Text-AboutMe">
            Hello! I'm a passionate <span>full stack</span> web developer with a focus on creativity. I discover and implement new <span>JavaScript</span> and <span>React</span> libraries in my projects to amaze and reduce costs of time. With a dedication to <span>minimalist</span> <span>designs</span>, I combine simplicity with standout details. I create functional and attractive web applications that exceed expectations. I have <span>expertise</span> in backend technologies such as Express, Sequelize, and <span>Postgresql</span>. I will take your projects to the <span className="nextlv">next level</span>!
        </p>
    </div>

    <div className="AboutImg">
        <img src={Img} alt="Rafael Martinez"  className="Img-About"/>
    </div>
    </div>

    </div>
  )
}

export default AboutMe
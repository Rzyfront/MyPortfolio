import React from 'react';
import './AboutMe.css';
import Img from '../../assets/ImgHenry.svg';
import { About_EN } from '../../Languages/EN';
import { About_ES } from '../../Languages/ES';
import { useSelector } from 'react-redux';

function AboutMe() {
  const {Languages} = useSelector(state=>state)
  return (
    <div className="Container-AboutMe" id='AboutMe'>
      <div className="Info-AboutMe">
        <div className="AboutInfo">
          <h2 className="Title-AboutMe">{Languages === 'EN' ? About_EN.Title : About_ES.Title}</h2>
          <p dangerouslySetInnerHTML={{ __html: Languages === 'EN' ? About_EN.About : About_ES.About }} className="Text-AboutMe"></p>
        </div>
        <div className="AboutImg">
          <img src={Img} alt="Rafael Martinez" className="Img-About" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

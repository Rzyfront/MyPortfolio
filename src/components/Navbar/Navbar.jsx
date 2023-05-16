import React, { useEffect } from "react";
import logo from "../../assets/Rz_Logo.svg";
import style from "./Navbar.module.css";
import { Navbar_EN } from "../../Languages/EN"; 
import { Navbar_ES } from "../../Languages/ES"; 
import { useDispatch, useSelector } from "react-redux";
import { ChangeLanguage } from "../../Redux/actions";

function Navbar() {
const {Languages} = useSelector(state=>state)
const dispatch = useDispatch();

const { Home, About, Projects, Studies,Skills, WorkExperience, ContactMe } = Languages === 'EN' ? Navbar_EN : Navbar_ES;


  const handleLanguageChange = (language) => {
    dispatch(ChangeLanguage(language));
  };

  return (
    <div className={style.Navbar}>
      
        <h1 className={style.Name}>Rafael Martinez</h1>
    
      <div className={style.Options}>
        <a href='#Home' className={style.Links}>
          <span className={style.Noselect}>{Home}</span>
          <div className={style.Circle}></div>
        </a>
        <a href='#AboutMe' className={style.Links}>
          <span className={style.Noselect}>{About}</span>
          <div className={style.Circle}></div>
        </a>
        <a href='#Projects' className={style.Links}>
          <span className={style.Noselect}>{Projects}</span>
          <div className={style.Circle}></div>
        </a>
        <a href='#Studies' className={style.Links}>
          <span className={style.Noselect}>{Studies}</span>
          <div className={style.Circle}></div>
        </a>
         <a href='#Skills' className={style.Links}>
          <span className={style.Noselect}>{Skills}</span>
          <div className={style.Circle}></div>
        </a>
         {/* <a href='#WExp' className={style.Links}>
          <span className={style.Noselect}>{WorkExperience}</span>
          <div className={style.Circle}></div>
        </a> */}
        <a href='#Contact' className={style.Links}>
          <span className={style.Noselect}>{ContactMe}</span>
          <div className={style.Circle}></div>
        </a>
      </div>
        <div className={style.Select_L}>
        <img width="96" height="96" src="https://img.icons8.com/emoji/96/united-states-emoji.png" alt="united-states-emoji" 
          className={style.EN_L}
          onClick={() => handleLanguageChange('EN')}
        />
        <img width="96" height="96" src="https://img.icons8.com/emoji/96/spain-emoji.png" alt="spain-emoji"
          className={style.ES_L}
          onClick={() => handleLanguageChange('ES')}
        />
        </div>
    </div>
  );
}

export default Navbar;

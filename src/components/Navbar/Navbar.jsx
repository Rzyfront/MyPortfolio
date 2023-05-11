import React from "react";
import logo from "../../assets/Rz_Logo.svg";

import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.Navbar}>
      
        <h1 className={style.Name}>Rafael Martinez</h1>
    
      <div className={style.Options}>
        <a className={style.Links}>
          <span className={style.Noselect}>Home</span>
          <div className={style.Circle}></div>
        </a>
        <a className={style.Links}>
          <span className={style.Noselect}>About me</span>
          <div className={style.Circle}></div>
        </a>
        <a className={style.Links}>
          <span className={style.Noselect}>Proyects</span>
          <div className={style.Circle}></div>
        </a>
        <a className={style.Links}>
          <span className={style.Noselect}>Studies</span>
          <div className={style.Circle}></div>
        </a>
         <a className={style.Links}>
          <span className={style.Noselect}>Work experience</span>
          <div className={style.Circle}></div>
        </a>
        <a className={style.Links}>
          <span className={style.Noselect}>Contact me</span>
          <div className={style.Circle}></div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import { useSelector } from "react-redux";
import { Navbar_EN } from "../../../Languages/EN"; 
import { Navbar_ES } from "../../../Languages/ES";
import style from '../Navbar.module.css'

function NavbarOptions() {

const {Languages} = useSelector(state=>state)
    
const { Home, About, Projects, Studies,Skills, WorkExperience, ContactMe } = Languages === 'EN' ? Navbar_EN : Navbar_ES;
  return (
    <>
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
    </>
  )
}

export default NavbarOptions
import React, { useState } from "react";
import style from "./Navbar.module.css"; 
import { useDispatch } from "react-redux";
import { ChangeLanguage } from "../../Redux/actions";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import {ImMenu3,ImMenu4} from 'react-icons/im';
function Navbar() {
const [Toogle , setToogle]= useState(false);

const dispatch = useDispatch();



  const handleLanguageChange = (language) => {
    dispatch(ChangeLanguage(language));
  };

  const handleToogle = () => {
    if (Toogle) {
      setToogle(false);
    }else{
      setToogle(true);
    }

  }

  return (
    <div className={style.Navbar}>
      
        <h1 className={style.Name}>Rafael Martinez</h1>
    
      <div className={style.Options}>
        <NavbarOptions/>
      </div>
      <div className={style.ToggleLinks}>
        {Toogle ? <ImMenu4 className={style.Ico} onClick={handleToogle}/> : <ImMenu3 className={style.Ico} onClick={handleToogle}/>}
        
          {Toogle&&
          <div className={style.ShowOptions}>
          <NavbarOptions/>
          </div>
          }
        
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

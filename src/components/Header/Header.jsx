import {useEffect, useRef} from 'react'
import style from './Header.module.css'
import Typed from 'typed.js';
import { Home_EN } from '../../Languages/EN';
import { Home_ES } from '../../Languages/ES';
import { useSelector } from 'react-redux';
function Header() {
    const tl = useRef(null);
    const tx = useRef(null);
    const {Languages} = useSelector(state=>state)

    useEffect(() => {
    const title = new Typed(tl.current, {
      strings: Languages=== 'EN' ? [Home_EN.Title] : [Home_ES.Title],
      typeSpeed: 120,
      cursorChar: '_',
        shuffle: true,
        smartBackspace: false,

    });

    const text = new Typed(tx.current, {
      strings: Languages=== 'EN' ? [Home_EN.Subtitle] : [Home_ES.Subtitle],
      typeSpeed: 0,
        shuffle: true,
        cursorChar: '',
        smartBackspace: false,

    });


    return () => {
      // Destroy Typed instance during cleanup to stop animation
      title.destroy();
      text.destroy();
    };
  }, [Languages]);
  return (
    <div id='Home' className={style.Container}>

        <div className={style.Card}>
            <div className={style.Titlediv}>
                <h1 ref={tl} className={style.Title}></h1>
            </div>
        
        <p ref={tx} className={style.Text}></p>

        <a href='#AboutMe' className={style.Btn}>
            <span className={style.Noselect}>{ Languages=== 'EN' ? Home_EN.Button : Home_ES.Button}</span>
            <div className={style.Circle}></div>
        </a>
        </div>
    </div>
  )
}

export default Header
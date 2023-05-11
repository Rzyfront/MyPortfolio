import {useEffect, useRef} from 'react'
import style from './Header.module.css'
import Typed from 'typed.js';
function Header() {
    const tl = useRef(null);
    const tx = useRef(null);

    useEffect(() => {
    const title = new Typed(tl.current, {
      strings: ["I'm <span>Rafael</span>"],
      typeSpeed: 120,
      cursorChar: '_',
        shuffle: true,
        smartBackspace: false,

    });

    const text = new Typed(tx.current, {
      strings: [" <span>Full Stack</span> developer"],
      typeSpeed: 0,
        shuffle: true,
        cursorChar: '',
        smartBackspace: false,

    });


    return () => {
      // Destroy Typed instance during cleanup to stop animation
      title.destroy();
    };
  }, []);
  return (
    <div className={style.Container}>

        <div className={style.Card}>
            <div className={style.Titlediv}>
                <h1 ref={tl} className={style.Title}></h1>
            </div>
        
        <p ref={tx} className={style.Text}></p>

        <div className={style.Btn}>
            <span className={style.Noselect}>Know me</span>
            <div className={style.Circle}></div>
        </div>
        </div>
    </div>
  )
}

export default Header
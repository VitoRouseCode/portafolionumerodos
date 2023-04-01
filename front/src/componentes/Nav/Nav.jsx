import style from '../Nav/Nav.module.css'
import { Link } from 'react-router-dom';

const Nav =()=>{
    return(
        <div className={style.navBox}>
            <ul className={style.lista}>
                <Link className={style.link} to={'/'}><li className={style.items}>Home</li></Link> 
                <Link className={style.link} to={'/About'}><li className={style.items}>About</li></Link>
                <Link className={style.link} to={'/TechnicalSkills'}><li className={style.items}>Technical Skills</li></Link>
               
                <Link className={style.link} to={'/SoftSkills'}><li className={style.items}>Soft Skills</li></Link>
                <Link className={style.link} to={'/Academic'}><li className={style.items}>Academic Training</li></Link>
                <Link className={style.link} to={'/Trabajos'}><li className={style.items}>Challenges Accomplished</li></Link>

            </ul>

        </div>




    )
}

export default Nav;
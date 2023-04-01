import { useEffect, useState } from 'react';
import style from '../academico/Academic.module.css';
import LogoAcademic from '../logosAcademia/LogoAcademic';
import logoAlura from '../../imagenes/logos/aluraLatanOracle.jpg';
import logoHenry from '../../imagenes/logos/logohenry.jpg';
import logoiu from '../../imagenes/logos/iudigital.png';
import flecha from '../../imagenes/flecha-animada-negra.gif'
import Resumen from '../resumen/Resumen';
import Video from '../video/Video';
import { iud,henry,alura } from './resumenes';

const Academic =()=>{
    const [loading,setLoading]=useState(false)
    const [state,setState]=useState(true)

    const tape = "https://www.youtube.com/embed/qoMCDbGAy98?controls=0";
    const alto= "515";
    const ancho="760";

   useEffect(()=>{
    setTimeout(()=>{
        setLoading(true)
    },5000)
   },[])

   const handleClick = () => {
    if(state===true){
        window.scrollBy({
            top: 0,
            left: 1200,
            behavior: 'smooth'
          });
        setState(false)
       
    }if(state===false){
        window.scrollBy({
            top: 0,
            left: -1200,
            behavior: 'smooth'
          });
        setState(true)
        
    }
    
  };

    return(
        <>
        
         {loading?<div className={style.hoja}>
            <div className={style.cuadro}>
                <div className={style.cuadro1}>
                <LogoAcademic img={logoiu}/>
                <LogoAcademic img={logoHenry}/>
                <LogoAcademic img={logoAlura}/>
                </div>
                <div className={style.resumen}>
                <Resumen text={iud}/>
                <Resumen text={henry} />
                <Resumen text={alura}/>
                </div>
            </div>
            {state?<img className={style.flecha} src={flecha} onClick={handleClick} />:<><img className={style.flecha2} src={flecha} onClick={handleClick}/></>}
            <div className={style.cuadro}>
                <div className={style.cuadro1}>
                
                <LogoAcademic img={logoHenry}/>
                
                </div>
                <div className={style.resumen}>
                    <Video video={tape} alto={alto} ancho={ancho}/>
                </div>
            </div>
            

        </div>:<div className={style.hoja2}><div className={style.cargando}></div></div>}
        </>
       
    )
}

export default Academic;
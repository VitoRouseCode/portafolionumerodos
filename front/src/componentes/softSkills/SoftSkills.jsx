import style from '../softSkills/SoftSkills.module.css';
import Cards from '../Cards/Cards';
import { trabajoEquipo,TrabE,analitica,anali,resolucion,resol } from './softSkill';
import foto from '../../imagenes/Trabajoequipo.jpg';
import fotoa from '../../imagenes/rompe.jpg';
import fotoe from '../../imagenes/escala.png';

const SoftSkills =()=>{
    return(
        <div className={style.hoja}>
            <div className={style.cajadeCards}>
            <Cards text={trabajoEquipo} img={foto} titulo={TrabE}/>
            <Cards text={analitica} img={fotoa} titulo={anali}/>
            <Cards text={resolucion} img={fotoe} titulo={resol}/>
         
            </div>
            
        </div>


    )
}

export default SoftSkills;
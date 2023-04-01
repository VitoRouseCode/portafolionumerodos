import style from '../logosAcademia/LogoAcademic.module.css';

const LogoAcademic=({img})=>{
    return(
        <div className={style.cajaLogo}>
            <img className={style.logo} src={img}/>
        </div>
    )
}

export default LogoAcademic;
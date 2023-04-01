import style from '../video/Video.module.css';
const Video=({video,alto,ancho})=>{
    return(
        <div className={style.video}>
        <iframe width={ancho} height={alto} 
        src={video} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export default Video;
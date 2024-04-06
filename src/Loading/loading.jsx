import LoadingIcon from "../assets/LoadingIcon.svg";
import style from "./index.module.scss";


export const LoadingPage =()=>{
    return(
        <div className={style.loadingBox} >
            <img src={LoadingIcon} alt="carregando" />
        </div>
    )
}
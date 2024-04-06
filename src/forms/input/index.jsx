import { forwardRef } from "react";
import styles from "./index.module.scss"

export const StandardInput = forwardRef(({error,label, ...rest},ref)=>{
    return (
        <div className={styles.container} >
            <label className="font three c2">{label}</label>
            <input className="input ref font three c2"  ref={ref} {...rest}></input>
            {error ? <p className="font three c2" >{error.message}</p> : null}
        </div>
    )
})
import { Link } from "react-router-dom"
import { RegisterForm } from "../../forms/register/register.index"
import style from "./index.module.scss"

export const RegisterPage = () =>{
    return(
        <div className="container">
            <header className={style.header} >
                <h1 className="font one c3 " >Kenzie Hub</h1>
                <Link className={style.btn} to="/">Voltar</Link>
            </header>
            <div>
                <RegisterForm />
            </div>
        </div>
    )
}

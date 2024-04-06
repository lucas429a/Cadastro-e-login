import { Link, useNavigate } from "react-router-dom"
import style from "./index.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/Usercontext"
import { TechnologiesList } from "../../TechList"

export const DashboardPage = ()=>{
    const {user ,Logout} = useContext(UserContext)

    return(
        <div className={style.container} >
            <header className={style.header} >
                <h1 className="font two c2" >kenzie Hub</h1>
                <Link className="button" onClick={()=>Logout()} to="/">voltar</Link>
            </header>
            <main>
                <div className={style.header} >
                    <p className="font two c1" >Olá</p>
                    <p className="font two c1"> {user.name}</p>
                    <p className="font three c2" >{user.course_module}</p>
                </div>
                <div >
                    <TechnologiesList />
                </div>
            </main>
        </div>
    )
}
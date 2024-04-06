import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { loginSchema } from "./loginshema";
import { Link, useNavigate } from "react-router-dom";
import { StandardInput } from "../input";
import style from "./index.module.scss"
import { UserContext } from "../../providers/Usercontext";


export const LoginForm = ()=>{
    const {register , handleSubmit, formState : {errors}, reset } = useForm({resolver:zodResolver(loginSchema)})

    const {userLogin, loading, setLoading} = useContext(UserContext)

    const submit = (formData)=>{
        userLogin(formData,setLoading,reset)
    }

    return(
        <div className={style.container} >
            <form onSubmit={handleSubmit(submit)}>
                <div className={style.header} >
                    <h2 className="font two c1" >Login</h2>
                </div>
                <StandardInput placeholder="Digite seu email" label="email" type ="email" {...register("email")} error={errors.email} />
                <StandardInput placeholder="Digite sua senha" label="senha" type ="password" {...register("password")} error={errors.password} />
                <div>
                    <button className="btn b1" type="submit" >{loading ? "Entrando" : "Entrar"}</button>
                    <div className={style.text}>
                        <p className="font three c2">Ainda não possui uma conta?</p>
                    </div>
                    <Link className="btn b1" to="/register">Cadastre-se</Link>
                </div>
            </form>
        </div>
    )
}
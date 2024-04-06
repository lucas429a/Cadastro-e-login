import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schemaregister";
import { StandardInput } from "../input";
import styles from "./index.module.scss"
import { useContext} from "react";
import { UserContext } from "../../providers/Usercontext";

export const RegisterForm = ()=>{
    const { userRegister,loading,setloading } = useContext(UserContext)

    const {register,handleSubmit , formState:{errors} } = useForm({resolver:zodResolver(registerSchema)})

    const submit = async (formdata) =>{   
        await userRegister(formdata,loading,setloading)
    }

    return(
        <div>
            <form className={styles.inputs_cc} onSubmit={handleSubmit(submit)} >
                <div className={styles.header} >
                    <h2 className="font one c1" >Crie sua conta</h2>
                    <p className="font three c2" >Rapido e gratis,vamos nessa!</p>
                </div>
                <StandardInput className="input reg font three c2 " placeholder="Digite o seu nome" label="Nome" type="text" {...register("name")} error={errors.name} />
                <StandardInput className="input reg font three c2 " placeholder="Digite o seu email" label="Email" type="email" {...register("email")} error={errors.email} />
                <StandardInput className="input reg font three c2 " placeholder="Digite sua senha" label="senha" type="password" {...register("password")} error={errors.password} />
                <StandardInput className="input reg font three c2 " placeholder="Digite sua senha novamente" label="confirmar senha" type="password" {...register("confirmPassword")} error={errors.confirmPassword} />
                <StandardInput className="input reg font three c2 " placeholder="Fale sobre você" label="bio" type="text" {...register("bio")} error={errors.bio} />
                <StandardInput className="input reg font three c2 " placeholder="Opções de contato" label="contato" type="text" {...register("contact")} error={errors.contact} />
                <label  className="font three c2"> selecione o modulo</label>
                <select className="input reg font three c2" name="course_module" {...register("course_module")}>
                <option value="">Selecione um módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <button className="btn b3 font four c1" >Cadastrar</button>
            </form>
        </div>
    )
}

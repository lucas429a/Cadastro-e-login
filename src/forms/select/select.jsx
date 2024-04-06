import { forwardRef } from "react"

export const StandartSelect =forwardRef (({error,value},ref)=>{
    return(
        <div  >
            <select name="course_module" {...register("course_module")} value="" >
                <option value="">Selecione um módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
        )
})
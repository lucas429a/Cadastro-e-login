import { useContext } from "react"
import { TechContext, TechProvider } from "../providers/Techcontext"
import { TechCard } from "./tech.card"

export const TechnologiesList = () => {

    const {techList} = useContext(TechContext)

    return (
        <div>
            <div>
                <h1>tecnologias</h1>
                <button>+</button>
            </div>
            <ul>
                {techList.map(tech =>{
                    <TechCard key={tech.id} tech={tech}/>
                })}
            </ul>
        </div>
    )
}
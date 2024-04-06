import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./Usercontext";
import { api } from "../services";

export const TechContext = createContext({})

export const TechProvider = ({children}) =>{
    const {user} = useContext(UserContext)

    const [techList,setTechList] = useState([])
    const [editingTechList,setEditingTechList] = useState([])


    useEffect(()=>{
        const getTechs = async()=>{
            try {
                const {data} = await api.get("users")
                setTechList(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTechs()
    },[])

    const createTech = async(formdata)=>{
        try {
            const token = localStorage.getItem("@TOKEN")

            const newTech = {
                title: user.techs.title,
                status: user.techs.status,
            }

            const {data} = api.post("users/techs",newTech,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
            })

            setTechList([...techList,data])
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech= async (deletingId)=>{
        try {
            const token = localStorage.getItem("@TOKEN")

            await api.delete(`users/techs/${deletingId}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techList.filter(tech => tech.id !== deletingId)
            setTechList(newTechList)
        } catch (error) {
            console.log(error)
        }
    }

    // const editTech = async(formdata)=>{
    //     try {
    //         const token = localStorage.getItem("@TOKEN")

    //         const {data} = await api.
    //     } catch (error) {
            
    //     }
    // }
    return (
        <TechContext.Provider value={{createTech,deleteTech,setTechList,techList}} >
            {children}
        </TechContext.Provider>
    )
}


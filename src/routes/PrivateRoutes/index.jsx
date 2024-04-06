import { useContext } from "react"
import { UserContext } from "../../providers/Usercontext"
import { Navigate, Outlet } from "react-router-dom"
import { TechProvider } from "../../providers/Techcontext"


export const PrivateRoutes = ()=>{
    const {user} = useContext(UserContext)

    return user? <TechProvider><Outlet/></TechProvider> : <Navigate to="/" />
}
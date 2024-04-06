
import { Route, Routes, useNavigate } from "react-router-dom"
import { UserLoginPage } from "../pages/Loginpage"
import { RegisterPage } from "../pages/registerPage/register"
import { DashboardPage } from "../pages/dashboard/dashboard"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = ()=>{


    return(
        <>
            <Routes >
                <Route path="/" element={<UserLoginPage/>}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<PrivateRoutes/>}>
                    <Route path="/dashboard" element={<DashboardPage />}/>
                </Route>
            </Routes >
        </>
    )
}
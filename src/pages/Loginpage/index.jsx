import { LoginForm } from "../../forms/login"

export const UserLoginPage =({setUser})=>{
    return(
        <div className="container">
            <h2 className="font one c2" >Kenzie Hub</h2>
            <LoginForm setUser={setUser} />
        </div>
    )
}
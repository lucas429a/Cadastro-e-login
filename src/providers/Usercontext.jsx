import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";
import { toast } from "react-toastify";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const getUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (token) {
            getUser()
        }
    }, [])

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true)
            const { data } = await api.post("sessions", formData)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token);
            reset();
            navigate("/dashboard");
        } catch (error) {
            toast.error(response.error);
        }finally{
            setLoading(false)
        }
    }

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            const response = await api.post("users", formData)
            response
            toast.success("Cadastro realizado com sucesso!")
            navigate("/")
            
        } catch (error) {
            console.log(error)
            if (error.response?.data === "Email already exists") {
                toast.error("Usuário já cadastrado");
            }
        } finally {
            setLoading(false)
        }
    }

    const Logout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    return (
        <UserContext.Provider value={{ loading,setLoading, user, userLogin, userRegister, Logout }}>
            {children}
        </UserContext.Provider>
    )
}
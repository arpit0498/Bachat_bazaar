import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    const tokenInLocalStorage = localStorage.getItem("token")
    const [user, setUser] = useState(userInLocalStorage?.user)
    const [token, setToken] = useState(tokenInLocalStorage?.token)
    const navigate = useNavigate();

    const signInHandler = async (email, password) => {
        try {
            const response = await axios.post(
                "/api/auth/login",
                {
                    email: email,
                    password: password
                }
            )
            if (response.status === 200) {
                localStorage.setItem("token", response.data.encodedToken)
                localStorage.setItem("user", JSON.stringify({ user: response.data.foundUser }))
                setToken(response.data.encodedToken)
                setUser(response.data.foundUser)
                // toast.success(`Hi, ${user.firstName}!`, {
                //     icon: "👋",
                // });
                toast.success(`Hi, Welcome towards Your First journey to become fit & Healthy `, {
                    icon: "👋",
                });
                navigate("/product")

            }
        }

        catch (error) {
            console.log(error)
        }
    }

    const signUpHandler = async (userDetails) => {
        const { firstName, lastName, email, password } = userDetails
        try {
            const response = await axios.post(
                "/api/auth/signup",
                {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                }
            )
            if (response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken)
                localStorage.setItem("user", JSON.stringify({ user: response.data.createdUser }))
                setToken(response.data.encodedToken)
                setUser(response.data.createdUser)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const value = { signInHandler, signUpHandler, user, setUser, token, setToken }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
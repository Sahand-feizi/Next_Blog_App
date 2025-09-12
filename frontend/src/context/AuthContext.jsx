'use client'

import { getUserApi, logoutUserApi, signinUserApi, signupUserApi } from "@/services/authServies";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import  { createContext, useReducer, useContext, useEffect } from "react";

const AuthContext = createContext()

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    error: ''
}

function authReducer(state, { type, payload }) {
    switch (type) {
        case 'loading':
            return {
                ...state,
                isLoading: true
            }
        case 'rejected':
            return {
                error: payload,
                isLoading: false,
                user: null,
                isAuthenticated: false
            }
        case 'signup':
            return {
                isLoading: false,
                user: payload,
                isAuthenticated: true,
                error: ''
            }
        case 'signin':
            return {
                isLoading: false,
                user: payload,
                isAuthenticated: true,
                error: ''
            }
        case 'logout':
            return {
                isLoading: false,
                user: null,
                isAuthenticated: false,
                error: ''
            }
        case 'user/loaded':
            return {
                isLoading: false,
                user: payload,
                isAuthenticated: true,
                error: ''
            }
    }
}

export default function AuthProvider({ children }) {
    const [{ isLoading, isAuthenticated, error, user }, dispatch] = useReducer(authReducer, initialState)
    const router = useRouter()

    const signup = async (data) => {
        dispatch({ type: 'loading' })
        try {
            const { user, message } = await signupUserApi(data)
            dispatch({ type: 'signup', payload: user })
            toast.success(message)
            router.replace('/profile')
        } catch (err) {
            const errMsg = err?.response?.data?.message;
            dispatch({ type: 'rejected', payload: errMsg })
            toast.error(errMsg)
        }
    }

    const signin = async (data) => {
        dispatch({ type: 'loading' })
        try {
            const { user, message } = await signinUserApi(data)
            dispatch({ type: 'signin', payload: user })
            toast.success(message)
            router.replace('/profile')
        } catch (err) {
            const errMsg = err?.response?.data?.message;
            dispatch({ type: 'rejected', payload: errMsg })
            toast.error(errMsg)
        }
    }

    const logout = async () => {
        dispatch({ type: 'loading' })
        try {
            await logoutUserApi()
            dispatch({ type: 'logout' })
            toast.success('شما با موفقیت خارج شدید')
            router.replace('/signin')
        } catch (err) {
            const errMsg = err?.response?.data?.message;
            dispatch({ type: 'rejected', payload: errMsg })
            toast.error(errMsg)
        }
    }

    const getUser = async () => {
        dispatch({ type: 'loading' })
        try {
            const { user } = await getUserApi()
            dispatch({ type: 'user/loaded', payload: user })
        } catch (err) {
            const errMsg = err?.response?.data?.message;
            dispatch({ type: 'rejected', payload: errMsg })
            toast.error(errMsg)
        }
    }

    useEffect(()=> {
        async function fetchData(){
            await getUser()
        }

        fetchData()
    },[])

    return (
        <AuthContext.Provider value={{ isLoading, isAuthenticated, error, user, signup, signin, logout, getUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context == undefined)
        throw new Error('the context has got called in out of the provider')
    return context
}

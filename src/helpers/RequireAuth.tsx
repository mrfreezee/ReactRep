import { ReactNode } from "react"
import { useAuthContext } from "./AuthContext"
import { JsxElement } from "typescript"
import { Navigate } from "react-router-dom"

type Props = {
    children: ReactNode
}

export const RequierAuth = ({children}: Props) =>{
    const {state} = useAuthContext()

    if(!state.isLogined){

        //перенаправление 

        return (
            <Navigate to='/signin'/>
        )
    }

    return(
        <>
        {children}
        </>
    )
}

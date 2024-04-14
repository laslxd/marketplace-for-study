import { useRouter } from "next/router"
import { useAuth } from "../../../hooks/useAuth"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    const {user} = useAuth()

    const {replace} = useRouter()
    
    useEffect(() =>{
        if(user){
            console.log(user)
            replace('/')

        }
    }, [user])
}
import { errorCatch } from "@/api/api.helper"
import { UserService } from "@/service/user.service"
import { IFullUser, IUser } from "@/types/user.interface"
import { useQuery } from "@tanstack/react-query"
import { error } from "console"
import { useAuth } from "./useAuth"

export const useProfile = () => {
//     const {data} = useQuery(['get profile'], async ()=> {
//         const response = await UserService.getProfile()
//         return response.data
//     },{
//         select:(data) => data
//     }
//    )
    
    const {user} = useAuth()

    const { data } = useQuery({
        queryKey: ['get profile'],
        queryFn:  async ()=> {
                    const response = await UserService.getProfile()
                    return response.data
                },
        select:(data)=>data, 
        
        enabled: !!user
         
    })
    return {profile: data }
}
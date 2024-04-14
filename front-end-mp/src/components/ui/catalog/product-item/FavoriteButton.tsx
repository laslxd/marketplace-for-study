import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { UserService } from "@/service/user.service"
import { IFullUser, IUser } from "@/types/user.interface"
import { useMutationState, useQuery, useQueryClient } from "@tanstack/react-query"
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { AxiosResponse } from "axios";




const FavoriteButton: FC<{productId: number}> = ({
    productId}) => { 
        const {user} = useAuth()

        
        const {profile} = useProfile()
        
        const queryClient = useQueryClient()
        
        const {mutate} = useMutation({
            mutationFn: () => UserService.toggleFavorite(productId),
            mutationKey: ['toggle favorite'],
            onSuccess: profile =>{
                queryClient.invalidateQueries({
                    queryKey: ['get profile'],
                    
                })
                } 
        })
        
        console.log({user})
        if(!profile){
            return null
        }
        
        // const isExists = true
        const isExists = profile.favorites.some(favorite =>
            favorite.id == productId)

        return( 
            <div>
                <button
                 onClick={() => mutate()} className='text-primary'>
                    {isExists ? <AiFillHeart size={50} /> : <AiOutlineHeart size={50}/>}
                </button>
            </div>
        )
    }

    export default FavoriteButton
import axios from "axios";
import { errorCatch, getContentType } from "./api.helper";
import { getAccessToken, removeFromStorage } from "@/service/auth/auth.helper";
import { error } from "console";
import { AuthService } from "@/service/auth/auth.service";


const axiosOption = {
    baseURL: process.env.SERVER_URL,
    headers: getContentType()
}

export const axiosClassic =  axios.create(axiosOption)

export const instance =  axios.create(axiosOption)


instance.interceptors.request.use( config => {
    const accessToken =getAccessToken()

    if(config && config.headers && accessToken) 
        config.headers.Authorization = `Bearer ${accessToken}`
    
    
    return config
})

instance.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if(
            (error?.response?.status == 401 ||
                errorCatch(error) == 'jwt expired' ||
                errorCatch(error) == 'jwt must be provider') &&
                error.config &&
                !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try{
                await AuthService.getNewTokens()
                return instance.request(originalRequest)
            } catch (error) {
                if(errorCatch(error) == 'jwt expired')
                removeFromStorage()
            }
        }

        throw error
    }
)


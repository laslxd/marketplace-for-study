import { FC, useState } from "react";
import Meta from '@/ui/Meta'
import Button from "@/ui/button/Button";
import Heading from "@/ui/Heding";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import config from "../../../../tailwind.config";
import { IEmailPassword } from "@/store/user/user.interface";
import Field from "@/ui/input/Field";
import { validEmail } from "./valid-email";
import { useAuthRedirect } from "@/screens/auth/useAuthRedirect";


const Auth: FC = () => {
    useAuthRedirect()
    const {isLoading} = useAuth()
    const {login, register} = useActions()
    const [type, setType] = useState<'login' | 'register'> ('login')
    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        if(type == 'login') login(data)
         else register(data)

        reset()
    }

    return <Meta title='Вход'>
        
        <section className='flex h-screen'>
        
        <form onSubmit={handleSubmit(onSubmit)}
         className='rounded-lg bg-white shadow-sm p-8 m-auto'>
            <Heading className='capitalize text-center mb-4'>{type}</Heading>
           
           
           
            <Field {...formRegister('email', {
                required: 'Email обязателен',
                pattern: {
                    value: validEmail,
                    message: 'Введите правильный Email'
                }
            })}
            placeholder='Email'
            error={errors.email?.message}
            />
            <Field {...formRegister('password', {
                required: 'Пароль обязателен',
                minLength: {
                    value: 6,
                    message: 'Пароль должен быть не менее 6 символов'
                }
            })}
            type='password'
            placeholder='Пароль'
            error={errors.password?.message}
            />
            <Button type='submit' variant = 'orange'>Авторизоваться</Button>{''}

            <div>
            <button
            type='button'
            className='inline-block  mt-3 text-sm'
             onClick={() => setType(type == 'login' ? 'register' : 'login')}>
            {(type == 'login' ? 'Register' : 'Login')}
            </button>
            </div>
        </form>
        </section>
    </Meta>
}

export default Auth
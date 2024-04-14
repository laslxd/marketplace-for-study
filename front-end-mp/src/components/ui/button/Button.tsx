import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";
import cn from "clsx"
import config from "../../../../tailwind.config";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'orange' | 'white'
    size?: 'sm' | 'md' | 'lg'
}


const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    variant,
    size = 'md',
     ...rest}) => {
    return <button {...rest} className={cn(
        'rounded-lg font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out',
         { 
        'text-white bg-primary': variant == 'orange',
        'text-primary bg-white': variant == 'white',
        'px-5 py-2 text-sm': size == 'sm'
    }, className)}>{children}</button>
}

export default Button
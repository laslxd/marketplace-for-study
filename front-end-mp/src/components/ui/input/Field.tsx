import { FC, forwardRef } from "react";
import { IField } from "./field.interface";

import config from "../../../../tailwind.config";
import cn from 'clsx'


const Field = forwardRef<HTMLInputElement, IField>(
    ({placeholder, error, className, type = 'text',
    style, Icon,  ...rest}, ref) => {
    return (<div className={cn('mb-4', className)} style={style}>
        <label>
            <span className='mb-1 block'>
                {Icon && <Icon className='mr-3'/>}
                {placeholder}</span>
            <input ref={ref} type={type} 
            placeholder={placeholder}
            className={cn('px-4 py-2 w-full outline-none border border-gray focus.border-primary transition-all placeholder: rounded-lg ',{
                'border-red': !!error
                
            })} {...rest}/>
        </label>
        {error && <div className='text-red nt-1 text-sm '>{error}</div>}
    </div>
    )
}
)

Field.displayName = 'Field'

export default Field
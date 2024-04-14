import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { CategoryService } from "@/service/category.service";
import Loader from "@/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, } from "next/router";
import { FC } from "react";
import cn from "clsx";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";

const Sidebar: FC = () => {
    const {data, isLoading} = useQuery(
        {
            queryKey:['get categories'], 
            queryFn: () => CategoryService.getAll(),
            select:(data)=>data
        }
    )

    const {asPath} = useRouter()
    
    const {user} = useAuth()
    const {logout} = useActions() 


    return (
        <aside className=' bg-secondary flex flex-col justify-between'
        style={{height: 'calc(100vh - 91px)'}}
        >
            <div>
                {isLoading ? (
                    <Loader/>   
                ) : data ? (
                <>
                <div className='text-xl text-white mt-4 mb-6 ml-6'>
                    Категории:
                </div>
                <ul>
                    {data.data.map(category => (
                        <li key={category.id}>
                            <Link 
                            className={cn('block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
                             asPath == `/category/${category.slug}` ? 'text-primary' : 'text-white')}
                            href={`/category/${category.slug}`}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                </>
                ) : (
                    <div> Категории отсутствуют</div>
                )}
            </div>

            <div className='items-end'> 
            <button
                className='text-white flex items-center ml-10 mb-10 item'
                >
                    <FiUsers />
                    <Link href={'/about'} className='ml-2'>О нас</Link>
                </button>

            <button
                className='text-white flex items-center ml-10 mb-10 item'
                >
                    <IoIosContact />
                    <Link href={'/contacts'} className='ml-2'>Контакты</Link>
                </button>
            
            {!!user &&(
                <button
                className='text-white flex items-center ml-10 mb-10'
                onClick={() => logout()}>
                    <FiLogOut/>
                    <Link href={'/auth'} className='ml-2'>Выход</Link>
                </button>
            )}
            </div>

        </aside>
    )
}

export default Sidebar
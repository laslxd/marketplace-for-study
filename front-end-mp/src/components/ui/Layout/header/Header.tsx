import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import HeaderCart from "../cart/cart-item/HeaderCart";
import HeaderProfile from "./HeaderProfile";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useProfile } from "@/hooks/useProfile";

const Header: FC = () => {

    const {profile} = useProfile()
    console.log(profile)
    if(profile?.email === 'admin@gmail.com'){
        console.log('Работает')
    }
    return (
        <header className="bg-secondary w-full py-6 px-6 grid" 
        style={{
            gridTemplateColumns: '1fr 3fr 1.2fr'
        }}
        >
            <Link href='/'>
                <h1 className='text-4xl text-primary font-semibold'>PlanetMarket</h1>
            </Link>
            <Search/>
            <div className='flex items-center justify-end gap-10'>
                {
                    profile?.email === 'admin@gmail.com' && <div>
                        <Link className="text-white transition-colors hover:text-gray" href={'/admin'}>Админ панель</Link>
                    </div>
                }
                <Link href='/favorites' className='text-white'>
                    <AiOutlineHeart size={28}/>
                </Link>
                <HeaderCart/>
                <HeaderProfile/>
            </div>
        </header>
    )
    }
export default Header
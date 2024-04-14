import Link from 'next/link'
import React, { FC } from 'react'
import { BsTelegram } from "react-icons/bs";

const Footer:FC = () => {
  return (
    <header className="bg-secondary w-full py-6 px-6 grid" 
        style={{
            gridTemplateColumns: '1fr 3fr 1.2fr'
        }}
        >
           <div>+7 (777) 777 77 77</div>
           <div>PlanetMarket@gmail.com</div>
           <Link href='https://web.telegram.org/k/#@laslxd'> <BsTelegram /></Link>
        </header>
  )
}

export default Footer
import Button from "@/ui/button/Button";
import { FC, useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchPage from "../../../../../pages/q";
import Link from "next/link";

const Search: FC = () => {

    const [search, setsearch] = useState<string>('')

    return (
        <div className='flex max-h-9'> 
            <input onChange={e=>{
                setsearch(e.target.value)
                
            }} className='rounded-l w-80 outline-none' type="text" />
            <Link href={`q/?term=${search}`} className="bg-primary rounded-r "><IoSearch size={35}/></Link>
            {/* <SearchPage/> */}
            
        </div>
    )
}

export default Search
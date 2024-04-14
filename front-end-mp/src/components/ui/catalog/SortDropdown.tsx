import { EnumProductSort } from "@/service/product/product.types";
// import {  } from "@reduxjs/toolkit";
import { FC, SetStateAction ,Dispatch} from "react";

interface ISortDropdown {
    sortType: EnumProductSort,
    setSortType: Dispatch<SetStateAction<EnumProductSort>>
    
}

const SortDropdown: FC<ISortDropdown> = ({setSortType, sortType}) => {
    return(
        <div className='text-right mb-5'>
            <select value={sortType} 
            onChange={e => setSortType(e.target.value as any)}
            className='appearance-none  py-1 px-2 bg-white border-gray'
            >
                {(
                    Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
                ).map(key => {
                    return(
                        <option
                        key={key}
                        onChange={()=>setSortType(EnumProductSort[key])}
                        value={EnumProductSort[key]}
                        >
                            {EnumProductSort[key]}
                        </option>
                    ) })
                }
            </select>
        </div>
    )
}

export default SortDropdown
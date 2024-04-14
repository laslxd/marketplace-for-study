import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import { FC, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import Loader from "@/ui/Loader";
import Heading from "../Heding";
import SortDropdown from "./SortDropdown";
import Button from "../button/Button";
import { EnumProductSort, TypeProductData } from "@/service/product/product.types";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/service/product/product.service";

interface ICatalogPagination {
    data: TypePaginationProducts
    title?: string
    
}

const CatalogPagination: FC<ICatalogPagination> = ({
    data,
    title
    }) => {
        const [page, setPage] = useState(1)

        const [sortType, setSortType] = 
        useState<EnumProductSort> (EnumProductSort.NEWEST)

        const {data: response, isLoading} = useQuery(
            {
                queryKey:['products', sortType , page], 
                queryFn: () => ProductService.getAll({
                    page,
                    perPage: 4,
                    sort: sortType
                }),
                initialData: data
                
                
            }
        )

        console.log(sortType)
    return (
        <section>
            {title && <Heading className='mb-5'>{title}</Heading>}
            <SortDropdown sortType={sortType} setSortType={setSortType}/>
           {response.products.length ? (
            <>
            <div className='grid grid-cols-4 gap-10 '>
                {response.products.map(product => (
                    <ProductItem key={product.id} product={product}/>

                ))}
                </div>
                <div className='text-center mt-16'>
                {Array.from({length: response.length / 4}).map((_, index)=>{
                    const pageNumber = index + 1
                    return (
                        <Button 
                        key={pageNumber}
                        size='sm' 
                        variant={page == pageNumber ? 'orange' : 'white'}
                        onClick=
                {() => setPage(page + 1)}>{pageNumber}</Button>
                    )
                })}
                
                    </div>
                </>
           ) : (
            <div>Товар отсутствует</div>
           )}

       </section>
    )
}

export default CatalogPagination
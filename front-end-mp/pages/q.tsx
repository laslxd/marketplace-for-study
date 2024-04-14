import { ProductService } from "@/service/product/product.service";
import Layout from "@/ui/Layout/Layout";
import Meta from "@/ui/Meta";
import Catalog from "@/ui/catalog/Catalog";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SearchPage: NextPage = () => {
    const {query} = useRouter()
    
    
    const {data} = useQuery({
        queryKey: ['search products', query.term],
        queryFn: () => ProductService.getAll({
            searchTerm: query.term as string
        })
    }
    )
    console.log({123123:query.term})

    return (
        <Meta title='Поиск'>
            <Layout>
                <Catalog 
                    products={data?.products || []}
                    title={`Поиск по запросу "${query.term || ''}"`} 
                />
            </Layout>
        </Meta>
    )
}

export default SearchPage
import Meta from "@/ui/Meta";
import { FC } from "react";
import Heading from "@/ui/Heding";
import Catalog from "@/ui/catalog/Catalog";
import { TypePaginationProducts, TypeProducts } from "@/types/product.interface";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";
import Layout from "@/ui/Layout/Layout";
import CatalogPagination from "@/ui/catalog/CatalogPagination";

const Home: FC<TypePaginationProducts> = ({products, length}) => {

    const {user} = useAuth()
    const {logout} = useActions()

    return <Meta title='Главная'>
        <Layout>
        <CatalogPagination title="Новые товары" 
        data={{products, length}}/>
        </Layout>
    </Meta>
}

export default Home


import { ProductService } from "@/service/product/product.service";
import { IProduct } from "@/types/product.interface";
import Heading from "@/ui/Heding";
import { useQuery } from "@tanstack/react-query";
import ProductReviewsCount from "./ProductReviewsCount";
import ProductInformation from "../product-information/ProductInformation";
import SimilarProducts from "./SimilarProducts";

interface IProductPage {
    initialProduct: IProduct
    similarProducts: IProduct[]
    slug?: string
 }

 export default function Product({
    initialProduct,
    similarProducts,
    slug = ''
 }: IProductPage) {
    const { data: product } = useQuery({
        queryKey: ['get product', initialProduct.id ],
        queryFn:  () => ProductService.getBySlug(slug),
        initialData: initialProduct,
        enabled: !!slug
    }
    )

    return (
        <>
            <Heading className='mb-1'>{product.name}</Heading>
            <ProductReviewsCount product={product}/>
            <div 
            className='grid gap-12 mt-6'
            style={{
                gridTemplateColumns: '1fr 1fr 1fr'
            }}
            >
            <div className='opacity-80 font-light'>
                
                <div className='font-semibold mb-1'>Описание:</div>
                {product.description}
            </div>
            <ProductInformation product={product}/>
            </div>
            <SimilarProducts similarProducts={similarProducts}/>
        </>
    )

 }
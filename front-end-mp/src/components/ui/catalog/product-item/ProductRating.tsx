import { ProductService } from "@/service/product/product.service";
import { ReviewService } from "@/service/review.service";
import { IProduct, IProductDetails } from "@/types/product.interface";
import { IReview } from "@/types/review.interface";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Rating } from "react-simple-star-rating";

interface IProductRating {
    product: IProduct
    isText?: boolean
}

const ProductRating: FC<{product: IProduct}> = ({product}) => {
     
    // const { data: rating } = useQuery({
    //     queryKey: ['get product rating'],
    //     queryFn:  async ()=> {
    //                 const response = await ReviewService.getAverageByProduct(product.id)
                    
    //                 // console.log({response: response.data})
    //                 return response.data
    //             },
    //     select:(data)=>data
    // })

    // if(!rating) return null

   const [rating, setRating] = useState<number>(
        Math.round(product.reviews.reduce((acc, review) =>  acc + review.rating, 0) / 
        product.reviews.length
        ) || 0
    ) 
    // console.log({rating})
    return(
        <div className='mb-2'>
            {!!product.reviews.length && 
            <span className='mr-1 '>
                <Rating
                    readonly
                    initialValue={rating}
                    SVGstyle={{
                        display: 'inline-block'
                    }}
                    size={25}
                    allowFraction
                    transition
                />
                <span style={{
                    color: '#FFBC0D'
                }}
                    className='text-sm ml-1'
                >{rating}
                </span>
            </span>}

                <span className='text-xs'>(Oтзывов:{product.reviews.length})</span> 
            
        </div>
    )
}

export default ProductRating
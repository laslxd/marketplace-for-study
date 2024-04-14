import { IProduct } from '@/types/product.interface'
import ProductRating from '@/ui/catalog/product-item/ProductRating'
import Link from 'next/link'
import React, { FC } from 'react'

interface IProductReviews{
  product: IProduct
}

export default function ProductReviewsCount({product}: IProductReviews) {
  const reviewLength = product.reviews.length

  if(!reviewLength) return null


  return (
    <div>
      <ProductRating product={product} />
      
    </div>
  )
}




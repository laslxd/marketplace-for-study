import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import React, { FC } from 'react'
import AddToCartline from './AddToCartInline'
import { FaLock } from 'react-icons/fa';
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton';
import AddToCartInline from './AddToCartInline';

interface IProductInformation {
    product: IProduct
}


export default function ProductInformation({product}: IProductInformation) {
  
    return (
    <div className='bg-white rounded-lg shadow-md p-6 relative h-max'>
        <div className='text-3xl font-semibold'>
            {convertPrice(product.price)}
        </div>
        <div className='mt-2'>
            Доставка бесплатно!
        </div>
        <span className='opacity-50 mt-1 text-sm block'>Налог может быть начислен при покупке</span>
        <div className='mt-4 text-sm'>
            <span className='opacity-50 mr-1'>www</span>
        </div>
        <AddToCartInline product={product}/>
        <p className='flex items-center mt-2 opacity-40 text-sm'>
            <FaLock className='mr-2'/> Безопасная покупка
        </p>
        <div className='absolute top-6 right-6'>
            <FavoriteButton productId={product.id} />
        </div>
    </div>
  )
}

import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri'

import { IProduct } from "@/types/product.interface";
import { FC } from "react";

const AddToCartButton: FC<{product: IProduct}> = ({
    product}) => { 

        const { addToCart, removeFromCart } = useActions()
        const {items} = useCart()

        const currentElement = items.find(
            cartItem => cartItem.product.id == product.id
        )
        

        return( 
            <div>
                <button
                 className='text-secondary '
                 onClick={() =>{
                    console.log(currentElement)
                    currentElement
                    ? removeFromCart({ id: currentElement.id})
                    : addToCart({
                        product,
                        quantity: 1,
                        price: product.price
                        })
                
                 } 
                    }
                >
                    {currentElement ? <RiShoppingCartFill size={50} /> : <RiShoppingCartLine size={50}/>}
                </button>
            </div>
        )
    }

    export default AddToCartButton
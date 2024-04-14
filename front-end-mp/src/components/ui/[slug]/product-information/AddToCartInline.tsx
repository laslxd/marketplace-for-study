import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri'

import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import Button from "@/ui/button/Button";

const AddToCartInline: FC<{product: IProduct}> = ({
    product}) => { 

        const { addToCart, removeFromCart } = useActions()
        const {items} = useCart()

        const currentElement = items.find(
            cartItem => cartItem.product.id == product.id
        )
        

        return( 
            <div>
                <Button
                 variant='orange'
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
                    {currentElement ? 'Удалить из корзины' : 'Добавить в корзину'}
                </Button>
            </div>
        )
    }

    export default AddToCartInline
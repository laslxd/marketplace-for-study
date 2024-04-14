import { ICartItem } from "@/types/cart.interface";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { FC } from "react";
import CartActions from "./CartActions";

const CartItem: FC<{item: ICartItem}> =({item}) => {
    return (
        <div className=''>
            <Image
            src={item.product.images[0]}
            width={100}
            height={100}
            alt={item.product.name}
            />
            <div>
                <div className=''>{item.product.name}</div>
                <div className=''>{convertPrice(item.product.price)}</div>

                <CartActions item={item}/>
            </div>
        </div>
    )
}

export default CartItem
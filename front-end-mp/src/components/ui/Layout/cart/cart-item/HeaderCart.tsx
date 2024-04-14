import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";
import SquareButton from "@/ui/button/SquareButton";
import { useRouter } from "next/router";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import cn from "clsx";
import CartItem from "./cart-actions/Cartitem";
import { convertPrice } from "@/utils/convertPrice";
import Button from "@/ui/button/Button";
import styles from './cart.module.scss'
import { OrderService } from "@/service/order.service";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useActions } from "@/hooks/useActions";



const HeaderCart: FC = () => {
    const {isShow, setIsShow, ref} = useOutside(false)

    const {items, total} = useCart()

    const{reset} = useActions()

    const {push} = useRouter()

    const {mutate} = useMutation({
        mutationFn: () => OrderService.place({items: items.map(item =>({
            price: item.price,
            quantity: item.quantity,
            productId: item.product.id
            }))
        }),
        mutationKey: ['create order and payment'],
        onSuccess: ({data}) => {
            push(data.confirmation.confirmation_url).then(() => reset())
        } 
    })

    return (
        <div className='relative' ref={ref}>
            <SquareButton
                Icon={RiShoppingCartLine}
                onClick={() => {
                    setIsShow(!isShow)
                }}
                number={items.length} 
                /> 

            <div className={cn(
                'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
                isShow ? 'open-menu' : 'close-menu'
            )}>
                <div className='font-normal text-lg mb-5'>
                    Моя корзина
                </div>

                <div className={styles.item}>
                    {items.length? (
                        items.map(item => <CartItem item={item} key={item.id}/>
                        )
                    ) : (
                        <div className='font-light'>Корзина пуста</div>
                    ) }
                </div>
                
      
      {
        items.length&&
        <>
        <div className={styles.footer}>
            <div>Итого:</div>
            <div>{convertPrice(total)}</div>
        </div>

        <div className='text-center'>
                <Button variant='white' size='sm' className='btn-link mt-5 mb-2' onClick={() => mutate()}>
                    Оформить заказ
                </Button>
        </div>
    </>
      }
            

            </div>
        </div>
    )
}

export default HeaderCart
import { instance } from "@/api/api.interceptor"
import { ICartItem } from "@/types/cart.interface"
import { IOrder } from "@/types/order.interface"

const ORDERS = 'orders'

enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIRVERED'
  }

type TypeData = {
    status?: EnumOrderStatus
    items: {
        quantity: number
        price: number
        productId: number
    }[]
}


export const OrderService = {
    async getAll() {
        const {data} = await instance<IOrder[]>({
            url: ORDERS,
            method: 'GET'
        })
        return await data
    }, 

    async place(data: TypeData) {
        return instance<{confirmation: {confirmation_url: string}}> ({
            url: ORDERS,
            method: 'POST',
            data
        })
    }
}




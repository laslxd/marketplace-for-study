import { instance } from "@/api/api.interceptor"
import { IPaymentResponse } from "@/types/payment.interface"

import { IReview } from "@/types/review.interface"

const PAYMENT = 'payment'


export const PaymentService = {
    
async createPayment(amount: number) {
    return instance.post<IPaymentResponse>(PAYMENT, {
        amount
    })
}
    
}


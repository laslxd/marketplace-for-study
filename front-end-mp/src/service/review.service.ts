import { axiosClassic, instance } from "@/api/api.interceptor"

import { IReview } from "@/types/review.interface"

const REVIEWS = 'reviews'

type TypeData = {
    rating: number
    text: string
}

export const ReviewService = {
    async getAll() {
        return axiosClassic<IReview[]>({
            url: REVIEWS,
            method: 'GET'
        })
    },

    async getAverageByProduct(productId: string | number) {
        console.log(axiosClassic<number>({
            url: `${REVIEWS}/average-by-product/${productId}`,
            method: 'GET'
        }))
        return axiosClassic<number>({
            url: `${REVIEWS}/average-by-product/${productId}`,
            method: 'GET'
        })
    },

    async getById(id: string | number) {
        return instance<IReview>({
            url: `${REVIEWS}/${id}`,
            method: 'GET'
        })
    },

    async getBySlug(slug: string ) {
        return instance<IReview>({
            url: `${REVIEWS}/by-slug/${slug}`,
            method: 'GET'
        })
    },

    async create() {
        return instance<IReview>({
            url: REVIEWS,
            method: 'POST'
        })
    },

    async update(id: string|number, name: string) {
        return instance<IReview>({
            url: `${REVIEWS}/${id}`,
            method: 'PUT',
            data: {name}
        })
    },

    async delete(id: string|number) {
        return axiosClassic<IReview>({
            url: `${REVIEWS}/${id}`,
            method: 'DELETE',
            
        })
    },
    
    async leave(productId: string|number, data: TypeData) {
        return instance<IReview>({
            url: `${REVIEWS}/leave/${productId}`,
            method: 'POST',
            data
        })
    }

    
}


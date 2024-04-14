import { PrismaClient, Product } from '@prisma/client';
import * as dotenv from 'dotenv';
import { fa, faker, fakerRU } from '@faker-js/faker';

dotenv.config();
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
    const products: Product[] = []

    for( let i=0; i < quantity; i++) {
        const productName = fakerRU.commerce.productName()
        const categoryName = fakerRU.commerce.department()

        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: faker.helpers.slugify(productName).toLowerCase(),
                description: fakerRU.commerce.productDescription(),
                price: +faker.commerce.price(199, 199999, 0),
                images: Array.from( {length: faker.datatype.number({min:2, max:6}) }).map(() => faker.image.imageUrl(500,500)),
                category: {
                    create: {
                        name: categoryName,
                        slug: faker.helpers.slugify(categoryName).toLowerCase()
                    }
                },
                reviews: {
                    create: [
                        {
                            rating: faker.datatype.number({min:1, max:5}),
                            text: fakerRU.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 3
                                }
                            }
                        },
                        {
                            rating: faker.datatype.number({min:1, max:5}),
                            text: fakerRU.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 3
                                }
                            }
                        }

                    ]
                }
            }
        })
        products.push(product)
    }

    console.log(`Created ${products.length} products` )
}


async function main() {
    console.log('start seeding....')
    await createProducts(10)
}

main()
.catch(e => console.error(e))
.finally(async() => {
    await prisma.$disconnect()
})
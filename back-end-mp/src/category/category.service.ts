import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'argon2';
import { Prisma } from '@prisma/client';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './category.dto';
import { generateSlug } from 'src/utils/generate-slug';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}


    async byId (id: number) {
        const category = await this.prisma.category.findUnique({where: {
            id
        },
        select : returnCategoryObject
    })

    if(!category) {
        throw new NotFoundException('Категория не найденa')
    }

    return category
    }

    async bySlug (slug: string) {
        const category = await this.prisma.category.findUnique({where: {
            slug
        },
        select : returnCategoryObject
    })

    if(!category) {
        throw new NotFoundException('Категория не найденa')
    }

    return category
    }

    async getAll(){
        return this.prisma.category.findMany({
            select: returnCategoryObject
        })
    }

    async create() {
        return this.prisma.category.create({
            data: {
                name: '',
                slug: ''
            }
        })
    }
 
    async update(id: number, dto: CategoryDto) {
    
        return this.prisma.category.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                slug: generateSlug(dto.name)
            }

        })
    }

    
    async delete(id: number) {
    
        return this.prisma.category.delete({
            where: {
                id
            }
        })
    }
    
}

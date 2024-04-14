import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/prisma.service';
import { CategoryService } from 'src/category/category.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService],
  
})
export class OrderModule {}

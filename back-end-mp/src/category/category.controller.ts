import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('')
  async asdgetAll() {
    return this.categoryService.getAll()
  }
  
  @Get('profile')
  async getAll() {
    return this.categoryService.getAll()
  }
  
  
  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id: number) {
    return this.categoryService.byId(+id)
  }

  // @Auth()
  @HttpCode(200)
  @Auth('admin')
  @Post()
  async create() {
    return this.categoryService.create()
  }

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @HttpCode(200)
  @Put(':id')
  async update( @Param('id') id: string, @Body() dto: CategoryDto) {
    return this.categoryService.update(+id, dto)
  }
  
  
  @HttpCode(200)
  @Auth('admin')
  @Delete(':id')
  async delete(
  @Param('id') id: string) {
    return this.categoryService.delete(+id)
  }
}

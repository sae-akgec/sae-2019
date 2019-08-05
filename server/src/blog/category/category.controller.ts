import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/blog/categories')
@ApiUseTags('Blog Endpoints')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    // add a category
    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async addCategory(@Res() res, @Body() createCategoryDTO: CreateCategoryDTO) {
        const category = await this.categoryService.addCategory(createCategoryDTO);
        return res.status(HttpStatus.OK).json({
            message: "Category has been created successfully",
            category
        })
    }

    // Retrieve categorys list
    @Get()
    async getAllCategory(@Res() res) {
        const categorys = await this.categoryService.getAllCategory();
        return res.status(HttpStatus.OK).json(categorys);
    }

    // Fetch a particular category using ID
    @Get(':categoryID')
    async getCategory(@Res() res, @Param('categoryID') categoryID) {
        const category = await this.categoryService.getCategory(categoryID);
        if (!category) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    @Put(':categoryID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updateCategory(@Res() res, @Param('categoryID') categoryID, @Body() createCategoryDTO: CreateCategoryDTO) {
        const category = await this.categoryService.updateCategory(categoryID, createCategoryDTO);
        if (!category) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Category has been successfully updated',
            category
        });
    }

    // Delete a category
    @Delete(':categoryID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteCategory(@Res() res, @Param('categoryID') categoryID) {
        const category = await this.categoryService.deleteCategory(categoryID);
        if (!category) throw new NotFoundException('Category does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Category has been deleted',
            category
        })
    }
}
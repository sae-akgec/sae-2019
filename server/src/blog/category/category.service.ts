import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interface/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }
    // fetch all categorys
    async getAllCategory(): Promise<Category[]> {
        const categorys = await this.categoryModel.find().exec();
        return categorys;
    }
    // Get a single category
    async getCategory(categoryID): Promise<Category> {
        const category = await this.categoryModel.findById(categoryID).exec().catch(err =>{
            throw new BadRequestException(err);
        });;
        return category;
    }
    // post a single category
    async addCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const newCategory = await this.categoryModel(createCategoryDTO);
        return newCategory.save();
    }
    // Edit category details
    async updateCategory(categoryID, createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const updatedCategory = await this.categoryModel
            .findByIdAndUpdate(categoryID, createCategoryDTO, { new: true }).catch(err =>{
                throw new BadRequestException(err);
            });
        return updatedCategory;
    }
    // Delete a category
    async deleteCategory(categoryID): Promise<any> {
        const deletedCategory = await this.categoryModel.findByIdAndRemove(categoryID);
        return deletedCategory;
    }
}
import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post/schema/post.schema';
import { CategorySchema } from './category/schema/category.schema';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Category', schema: CategorySchema }
    
    ])
  ],
  controllers: [PostController, CategoryController],
  providers: [PostService, CategoryService]
})
export class BlogModule { }
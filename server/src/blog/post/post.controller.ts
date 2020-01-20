import { Controller, Get, Res, Req, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards, ValidationPipe, BadRequestException } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtPayload } from 'src/auth/interface/jwt-payload.interface';
import { CategoryService } from '../category/category.service';
import { User } from '../../user/inteface/user.interface';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Controller('api/blog/posts')
@ApiTags('Blog Endpoints')
export class PostController {
    constructor(private postService: PostService, private categoryService: CategoryService) { }

    // add a post
    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async addPost(@Req() req, @Res() res, @Body(new ValidationPipe()) createPostDTO: CreatePostDTO) {
        const user: User = req.user;
        const category = await this.categoryService.getCategory(createPostDTO.category_id);
        if (!category) {
            throw new BadRequestException("Catgeory id provided not found");

        }
        const post = await this.postService.addPost(createPostDTO, user, category);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            post
        })
    }

    // Retrieve posts list
    @Get()
    async getAllPost(@Res() res, @Query('active') active: boolean,  @Query('month') month: string, @Query('year') year: string, @Query('category') category: string) {
        let query = {'is_active': active || true};
        if (category) query['category_id'] = category;
        if (month && year) 
        query['created_at'] = { 
            '$gte': new Date(`${month}/02/${year}`), 
            '$lte': new Date(`${parseInt(month) + 1}/01/${year}`) 
        };

        
        const posts = await this.postService.getAllPost(query);
        return res.status(HttpStatus.OK).json(posts);
    }

    // Fetch a particular post using ID
    @Get(':postID')
    async getPost(@Res() res, @Param('postID') postID) {
        const post = await this.postService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);
    }

    @Put(':postID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updatePost(@Res() res, @Param('postID') postID, @Body() createPostDTO: CreatePostDTO) {
        const post = await this.postService.updatePost(postID, createPostDTO);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post
        });
    }

    // Delete a post
    @Delete(':postID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deletePost(@Res() res, @Param('postID') postID) {
        const post = await this.postService.deletePost(postID);
        if (!post) throw new NotFoundException('Post does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted',
            post
        })
    }

    // add a post
    @Post(":id/comments")
    async addComment(@Res() res, @Param('id') postId: String, @Body(new ValidationPipe()) createCommentDTO: CreateCommentDTO) {
        const post = await this.postService.getPost(postId);
        const updatePost = await this.postService.addComment(createCommentDTO, post)
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            updatePost
        })
    }
}
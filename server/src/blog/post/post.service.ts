import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interface/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';
import { Category } from '../category/interface/category.interface';
import { User } from '../../user/inteface/user.interface';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { Comment } from "./interface/comment.interface";

@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }
    // fetch all posts
    async getAllPost(query:any): Promise<Post[]> {
        const posts = await this.postModel.find(query).exec();
        return posts;
    }
    // Get a single post
    async getPost(postID): Promise<Post> {
        const post = await this.postModel.findOne({'slug': postID}).exec().catch(err =>{
            throw new NotFoundException(err);
        });;
        return post;
    }
    // post a single post
    async addPost(createPostDTO: CreatePostDTO, user:User, category:Category): Promise<Post> {
        createPostDTO["category_name"] = category.title;
        createPostDTO["author_name"] = user.first_name + " " + user.last_name;
        createPostDTO["author_id"] = user['_id'];
        createPostDTO["comments"] = [];
        const newPost = await this.postModel(createPostDTO)
        return newPost.save().catch(err =>{
            throw new BadRequestException(err);
        });
    }
    // Edit post details
    async updatePost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const updatedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return updatedPost;
    }
    // Delete a post
    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel.findByIdAndRemove(postID);
        return deletedPost;
    }

    async addComment(commentDto:CreateCommentDTO, post:Model<Post>): Promise<Post>{
        const comment: Comment = {
            name: commentDto.name,
            email: commentDto.email,
            subject: commentDto.subject,
            description: commentDto.description,
            created_at: new Date()
        };
        post.comments.push(comment);
        const updatePost = await post.save(post);
        return updatePost;
    }
}
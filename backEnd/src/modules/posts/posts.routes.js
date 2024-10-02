
import { Router } from "express";
import { addPost, deletePost, getAllPosts, updatePost } from "./posts.controller.js";

const postRouter = Router();


postRouter.post('/',addPost);
postRouter.get('/',getAllPosts);
postRouter.put('/',updatePost)
postRouter.delete('/',deletePost)
    

export default postRouter
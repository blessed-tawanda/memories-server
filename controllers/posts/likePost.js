import Post from '../../models/Post.js';
import response from '../../helpers/response.js';
import logger from '../../logger.js';
import mongoose from 'mongoose';

export default async (req, res) => {
  const { id } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(response(false, `POST NOT FOUND`));
  }

  try {
    let post = await Post.findById(id);
    post.likeCount += 1
    post = await post.save();
    res.status(200).json(response(true, `POST LIKED.`, post.toJSON()));
  } catch (error) {
    logger.error(`Exception trying to like post ${error}`);
    res.status(500).json(response(false, 'FAILED TO LIKE POST.'))
  }

}
import mongoose from 'mongoose';
import response from '../../helpers/response.js';
import { Post } from '../../models/index.js';

export default async (req, res) => {
  const { id: _id } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json(response(false, `POST NOT FOUND`));
  }

  await Post.findByIdAndRemove(_id);

  res.status(200).json(response(true, `POST DELETED`));
}
import mongoose from "mongoose";
import { response } from "../../helpers/index.js";
import { Post } from "../../models/index.js";

export default async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json(response(false, `POST NOT FOUND`));
  }

  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });

  res.status(200).json(response(true, 'POST UPDDATED.', updatedPost));
}
import { Post } from "../../models/index.js";
import logger from "../../logger.js";
import { response } from "../../helpers/index.js";


export default (req, res) => {
  const post = req.body;

  const newPost = new Post(post);
  
  try {
    await newPost.save();
    logger.info(`New post added`);
    res.status(201).json(response(true, `POST CREATED.`))
  } catch (error) {
    logger.error(`Exception adding new post ${error}`);
    res.status(500).json(response(false, `FAILED TO CREATE POST.`))
  }
}
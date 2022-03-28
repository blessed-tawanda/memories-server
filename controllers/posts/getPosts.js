import { response } from "../../helpers/index.js";
import logger from "../../logger.js";
import { Post } from "../../models/index.js"

export default async (req, res) => {

  try {
    const posts = await Post.find();
    logger.info(`Posts found.`);
    res.status(200).json(response(true, "POSTS FOUND.", posts));
  } catch (error) {
    logger.error(`Exception getting posts ${error}`);
    res.status(500).json(response(false, "FAILED TO GET POSTS."));
  }
}
import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('post', PostSchema);

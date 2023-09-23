import mongoose, { Document, Types } from 'mongoose'
import { IComment, commentSchema } from './comment.js'

export interface IPost extends Document {
  title: string
  text: string
  tags: string[]
  comments: IComment[]
  viewsCount: number
  author: Types.ObjectId
  imageUrl: string
  timestamp: string
}

const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    imageUrl: {
      type: String,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
)

export default mongoose.model('Post', postSchema)

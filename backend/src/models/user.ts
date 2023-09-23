import mongoose, { Types } from 'mongoose'

interface IUser {
  fullName: string
  email: string
  passwordHash: string
  avatarImg: string
  posts: Types.ObjectId
  timestamp: string
  about: string
}

const userSchema = new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarImg: {
      type: String,
    },
    about: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)

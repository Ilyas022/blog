import { fetchPost } from './slices/postSlice.ts'
import { fetchPosts, deletePost, addComment, addPost, editPost } from './slices/postsSlice.ts'

import { fetchUser } from './slices/profileSlice.ts'
import userSlice, { loginUser, signupUser, getMe } from './slices/userSlice.ts'

const rootActions = {
  ...userSlice.actions,
  addPost,
  addComment,
  editPost,
  loginUser,
  signupUser,
  getMe,
  fetchPosts,
  deletePost,
  fetchUser,
  fetchPost,
}

export default rootActions

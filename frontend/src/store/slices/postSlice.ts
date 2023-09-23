import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../models/posts'
import { axiosInstance } from '../../utils/axios'

interface IInitialState {
  post: IPost
  status: 'idle' | 'loading' | 'fulfiled' | 'failed' | 'comented'
  error: string | null
}

const initialState: IInitialState = {
  post: {
    _id: '',
    title: '',
    text: '',
    imageUrl: '',
    createdAt: '',
    comments: [],
    tags: [],
    author: {
      _id: '',
      fullName: '',
      avatarImg: '',
    },
    viewsCount: 0,
  },
  status: 'idle',
  error: null,
}

export const fetchPost = createAsyncThunk('post/fetchPosts', async (id: string) => {
  const res = await axiosInstance.get(`/posts/${id}`)
  return res.data
})

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (comment: { id: string; text: string }) => {
    const res = await axiosInstance.post(`/comment/${comment.id}`, { text: comment.text })
    return res.data
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        state.post = action.payload
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(addComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = 'comented'
        state.post = action.payload
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  },
})

export default postSlice

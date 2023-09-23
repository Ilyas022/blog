import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { IPost } from '../../models/posts'
import { RootState } from '..'
import { axiosInstance } from '../../utils/axios'

const postsAdapter = createEntityAdapter<IPost>({
  selectId: (e) => e._id,
})

const initialState = postsAdapter.getInitialState<{
  status: 'idle' | 'loading' | 'fulfiled' | 'loaded' | 'failed' | 'edited' | 'deleted' | 'added'
  error: string | null
}>({
  status: 'idle',
  error: null,
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axiosInstance.get('/posts')
  return res.data
})

export const addPost = createAsyncThunk('posts/addPost', async (post: FormData) => {
  const res = await axiosInstance.post('/posts', post)
  return res.data
})

export const editPost = createAsyncThunk(
  'posts/editPost',
  async (post: { id: string; data: FormData }) => {
    const res = await axiosInstance.patch(`/posts/${post.id}`, post.data)
    return res.data
  }
)

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (comment: { id: string; text: string }) => {
    const res = await axiosInstance.post(`/comment/${comment.id}`, { text: comment.text })
    return res.data
  }
)

export const deletePost = createAsyncThunk('posts/deletePost', async (id: string) => {
  const res = await axiosInstance.delete(`/posts/${id}`)
  return res.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        postsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(addPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'added'
        postsAdapter.removeOne(state, action.payload.postId)
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(editPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.status = 'edited'
        postsAdapter.removeOne(state, action.payload.postId)
      })
      .addCase(editPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'deleted'
        postsAdapter.removeOne(state, action.payload.postId)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  },
})

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(
  (state: RootState) => state.posts
)

export const selectPostsByPopularity = createSelector([selectAllPosts], (posts) =>
  [...posts].sort((a, b) => b.viewsCount - a.viewsCount)
)

export default postsSlice

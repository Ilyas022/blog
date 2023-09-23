import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../utils/axios'

export const fetchPosts = createAsyncThunk('profile/posts', async (id: string) => {
  const res = await axiosInstance.get(`posts/user/${id}`)
  return res.data
})

export const fetchUser = createAsyncThunk('profile/user', async (id: string) => {
  const res = await axiosInstance.get(`users/${id}`)
  return res.data
})

interface IInitialState {
  error: null | string
  status: 'idle' | 'loading' | 'fulfiled' | 'failed'
  user: {
    email: string
    fullName: string
    id: string
    avatarImg: string
    about: string
    token: string
    posts: {
      author: string
      _id: string
      title: string
      text: string
      imageUrl: string
      viewsCount: number
      createdAt: string
      comments: []
      tags: []
    }[]
  }
}

const initialState: IInitialState = {
  error: null,
  status: 'idle',
  user: {
    email: '',
    fullName: '',
    about: '',
    id: '',
    token: '',
    avatarImg: '',
    posts: [],
  },
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  },
})

export default profileSlice

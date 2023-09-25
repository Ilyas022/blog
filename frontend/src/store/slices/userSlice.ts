import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../utils/axios'

const saveToken = (token: string) => localStorage.setItem('token', token)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string }) => {
    const res = await axiosInstance.post('auth/signin', params)
    const token = res.data.token
    if (token) {
      saveToken(token)
    }
    return res.data
  }
)

export const signupUser = createAsyncThunk('/auth/signup', async (params: FormData) => {
  const res = await axiosInstance.post('auth/signup', params)
  const token = res.data.token
  if (token) {
    saveToken(token)
  }
  return res.data
})

export const getMe = createAsyncThunk('/auth/me', async () => {
  const res = await axiosInstance.get('auth/me')
  return res.data
})

interface IInitialState {
  error: null | string
  isLoged: boolean
  status: 'idle' | 'loading' | 'fulfiled' | 'failed'
  user: { email: string; fullName: string; id: string; token: string; avatarImg: string } | null
}

const initialState: IInitialState = {
  error: null,
  status: 'idle',
  isLoged: false,
  user: {
    email: '',
    fullName: '',
    id: '',
    token: '',
    avatarImg: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.isLoged = false
      state.user = { email: '', fullName: '', id: '', token: '', avatarImg: '' }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        state.user = action.payload
        state.isLoged = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        state.user = action.payload
        state.isLoged = true
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(getMe.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = 'fulfiled'
        state.user = action.payload
        state.isLoged = true
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  },
})

export default userSlice

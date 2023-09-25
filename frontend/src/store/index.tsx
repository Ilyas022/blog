import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice'
import userSlice from './slices/userSlice'
import profileSlice from './slices/profileSlice'
import postSlice from './slices/postSlice'

const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postsSlice.reducer,
  post: postSlice.reducer,
  profile: profileSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PostPage from './pages/PostPage'
import Homepage from './pages/HomePage'
import UserPage from './pages/UserPage'
import React, { useEffect } from 'react'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import AddPostPage from './pages/AddPostPage'
import UsersPage from './pages/UsersPage'
import { useActions } from './store/hooks/useActions'

const App: React.FC = (): JSX.Element => {
  const { getMe } = useActions()

  useEffect(() => {
    getMe()
  }, [getMe])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/edit/:id" element={<AddPostPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
      </Route>
    </Routes>
  )
}

export default App

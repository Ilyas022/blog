import React from 'react'
import { useNavigate } from 'react-router-dom'
import TimeAgo from './TimeAgo'
import CommentsNViews from './CommentsNViews'
import { useActions } from '../store/hooks/useActions'
import { useTypedSelector } from '../store/hooks/useTypedSelector'

interface IUserPostItem {
  post: {
    _id: string
    title: string
    text: string
    imageUrl: string
    viewsCount: number
    createdAt: string
    comments: []
    tags: []
    author: string
  }
}

const UserPostItem: React.FC<IUserPostItem> = ({ post }: IUserPostItem): JSX.Element => {
  const navigate = useNavigate()
  const { deletePost } = useActions()
  const userId = useTypedSelector((state) => state.user.user.id)
  const canEdit = userId === post.author

  return (
    <div
      key={post._id}
      className="relative group shadow-md border rounded border-gray-200 border-solid p-5 flex flex-col"
    >
      {canEdit ? (
        <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-black/80 to-slate-700/70 rounded text-white">
          <div className="translate-y-5 bg-main/30 rounded-lg group-hover:translate-y-0 transition duration-300 absolute top-3 right-3">
            <button
              onClick={() => navigate(`/posts/edit/${post._id}`)}
              className="p-2 transition duration-300 rounded-full hover:bg-main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                deletePost(post._id)
              }}
              className="p-2 transition duration-300 rounded-full hover:bg-main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => navigate(`/posts/${post._id}`)}
            className="bg-main/70 hover:bg-main duration-300 w-1/2 p-2 rounded-xl"
          >
            showPost
          </button>
        </div>
      ) : null}
      {post.imageUrl ? (
        <div className="w-full h-40 overflow-hidden mb-4">
          <img
            src={post.imageUrl}
            alt="post image"
            className="w-full h-full group-hover:scale-110 duration-300"
          />
        </div>
      ) : null}
      <div className="text-2xl font-bold mb-3 hover:text-blue-600">{post.title}</div>

      <TimeAgo timestamp={post.createdAt} />

      {post.tags.length ? (
        <div className="flex gap-3 mb-4">
          {post.tags.map((tag, index, arr) => (
            <button key={index} className="text-sm opacity-60 tracking-wide">
              {arr[index + 1] ? `${tag},` : tag}
            </button>
          ))}
        </div>
      ) : null}

      <CommentsNViews className="mt-auto" comments={post.comments.length} views={post.viewsCount} />
    </div>
  )
}

export default UserPostItem

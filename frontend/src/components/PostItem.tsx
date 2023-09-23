import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useActions } from '../store/hooks/useActions'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import PostItemEdits from './PostItemEdits'
import CommentsNViews from './CommentsNViews'
import TimeAgo from './TimeAgo'
import { IPost } from '../models/posts'

interface IPostItem {
  post: IPost
}

export const PostItem: React.FC<IPostItem> = React.memo(({ post }: IPostItem): JSX.Element => {
  const { deletePost } = useActions()
  const userId = useTypedSelector((state) => state.user.user.id)

  const navigate = useNavigate()

  const canEdit = userId === post.author._id

  return (
    <div className="group shadow-md relative rounded-md overflow-hidden bg-white border-transparent border-2 border-solid hover:border-main transition duration-300">
      {canEdit ? (
        <PostItemEdits
          onEdit={() => navigate(`/posts/edit/${post._id}`)}
          onRemove={() => deletePost(post._id)}
        />
      ) : null}
      {post.imageUrl ? (
        <img src={post.imageUrl} alt="post image" className="w-full h-80 mb-4 object-cover" />
      ) : null}

      <div className="flex gap-6 p-5">
        <img
          src={
            post.author.avatarImg
              ? post.author.avatarImg
              : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
          }
          alt="user image"
          className="mt-1 w-8 h-8 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-medium">
            {post.author.fullName ? post.author.fullName : 'user name'}
          </div>
          <TimeAgo timestamp={post.createdAt} />

          <Link
            to={`/posts/${post._id}`}
            className="text-2xl inline-block font-bold mb-3 hover:text-blue-600"
          >
            {post.title}
          </Link>

          {post.tags.length ? (
            <div className="flex gap-3 mb-4">
              {post.tags.map((tag, index, arr) => (
                <button key={index} className="text-sm opacity-60 tracking-wide">
                  #{arr[index + 1] ? `${tag},` : tag}
                </button>
              ))}
            </div>
          ) : null}

          <CommentsNViews comments={post.comments.length} views={post.viewsCount} />
        </div>
      </div>
    </div>
  )
})

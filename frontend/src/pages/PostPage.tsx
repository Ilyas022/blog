import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsSkeleton from '../components/PostsSkeleton'
import TimeAgo from '../components/TimeAgo'
import { useActions } from '../store/hooks/useActions'
import { useTypedSelector } from '../store/hooks/useTypedSelector'

const PostPage: React.FC = (): JSX.Element => {
  const { id } = useParams()
  const [comment, setComment] = useState<string>('')
  const { fetchPost, addComment } = useActions()
  const { post, status } = useTypedSelector((state) => state.post)

  useEffect(() => {
    if (id) {
      fetchPost(id)
    }
  }, [id, fetchPost])

  if (status === 'loading') {
    return (
      <main>
        <div className="max-w-5xl mx-auto">
          <PostsSkeleton />
        </div>
      </main>
    )
  }

  if (status === 'failed') {
    return (
      <main>
        <div className="max-w-5xl mx-auto">
          <div>Something went wrong</div>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main>
        <div className="max-w-6xl p-4 mx-auto">no such post</div>
      </main>
    )
  }
  return (
    <main>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white mb-8">
          {post?.imageUrl ? (
            <img src={post.imageUrl} alt="post image" className="w-full h-80 mb-4 object-cover" />
          ) : null}

          <div className="flex gap-6 p-5">
            <img
              src={
                post?.author.avatarImg
                  ? post?.author.avatarImg
                  : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
              }
              alt="user image"
              className="mt-1 w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium">
                {post?.author.fullName ? post?.author.fullName : 'user name'}
              </div>
              <TimeAgo timestamp={post.createdAt} />
              <h1 className="text-3xl font-bold mb-3">{post?.title}</h1>
              {post && post.tags.length > 0 ? (
                <div className="flex gap-3 mb-5">
                  {post.tags.map((tag, index, arr) => (
                    <div key={index} className="text-sm opacity-60 tracking-wide">
                      {arr[index + 1] ? `${tag},` : tag}
                    </div>
                  ))}
                </div>
              ) : null}
              <ReactMarkdown className="MD mb-5" children={post.text} />
              <div>
                <div className="flex gap-5 text-sm">
                  <div className="flex items-center gap-2 opacity-50">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <span>{post?.viewsCount}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-50">
                    <span>
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
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        />
                      </svg>
                    </span>
                    <span>{post.comments.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-white">
          <h2 className="mb-3 font-semibold text-2xl">Comments</h2>
          {post.comments.length > 0
            ? post.comments.map((comment) => (
                <div key={comment._id} className="flex gap-5 mb-3">
                  <img
                    className="mt-1 w-8 h-8 rounded-full object-cover"
                    src={
                      comment.author.avatarImg
                        ? comment.author.avatarImg
                        : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                    }
                    alt=""
                  />
                  <div>
                    <div className="text-sm font-medium">{comment.author.fullName}</div>
                    <TimeAgo timestamp={comment.createdAt} />
                    <div className="text-xl">{comment.text}</div>
                  </div>
                </div>
              ))
            : null}

          <textarea
            className="h-32 transition-opacity duration-500 w-full p-2 border border-solid rounded-md overflow-auto border-gray-400 resize-none"
            value={comment}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
            placeholder="Add comment text"
          ></textarea>
          <div>
            <button
              className="p-3 mr-5 border-main border border-solid rounded hover:bg-main hover:text-white transition-colors duration-200 text-main cursor-pointer"
              onClick={() => {
                addComment({ id: id ? id : '', text: comment })
                setComment('')
              }}
            >
              Add comment
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PostPage

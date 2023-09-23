import { useEffect, useState } from 'react'
import { PostItem } from '../components/PostItem'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import Tags from '../components/Tags'
import Comments from '../components/Comments'
import PostsSkeleton from '../components/PostsSkeleton'
import { useActions } from '../store/hooks/useActions'
import { selectAllPosts, selectPostsByPopularity } from '../store/slices/postsSlice'
import { IComment } from '../models/posts'

const Homepage: React.FC = (): JSX.Element => {
  const { fetchPosts } = useActions()
  const [activeTab, setActiveTab] = useState<'new' | 'popular'>('new')
  const { status } = useTypedSelector((state) => state.posts)
  const posts = useTypedSelector((state) =>
    activeTab === 'new' ? selectAllPosts(state) : selectPostsByPopularity(state)
  )

  const postsLoading = status === 'loading'
  const postsFailed = status === 'failed'

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const tags: string[] = []
  posts.map((post) =>
    post.tags.map((tag) => {
      if (tags.length > 4) return
      !tags.includes(tag) && tags.push(tag)
    })
  )

  const comments: IComment[] = []
  posts.map((post) =>
    post.comments.map((comment) => {
      if (comments.length > 4) return
      !comments.includes(comment) && comments.push(comment)
    })
  )

  return (
    <main>
      <div className="max-w-5xl p-2 mx-auto">
        <div className="mb-5">
          <button
            className={`${
              activeTab === 'new' ? 'border-b-main' : null
            } p-3 border-2 border-solid border-transparent`}
            onClick={() => setActiveTab('new')}
          >
            New
          </button>
          <button
            className={`${
              activeTab === 'popular' ? 'border-b-main' : null
            } p-3 border-2 border-solid border-transparent`}
            onClick={() => setActiveTab('popular')}
          >
            Popular
          </button>
        </div>
        <div className="flex gap-5">
          {postsFailed ? (
            <div className="basis-2/3">Somwthing went wrong with posts</div>
          ) : (
            <div className="flex flex-col basis-2/3 gap-5">
              {postsLoading ? (
                [
                  Array(5)
                    .fill(null)
                    .map((item, index) => (item = <PostsSkeleton key={index} />)),
                ]
              ) : posts.length ? (
                posts.map((post) => {
                  return <PostItem key={post._id} post={post} />
                })
              ) : (
                <div>There are no posts</div>
              )}
            </div>
          )}
          <div className="flex flex-col gap-5 basis-1/3">
            <Tags tags={tags} />
            <Comments comments={comments} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage

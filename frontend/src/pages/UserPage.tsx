import { useEffect } from 'react'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { useParams } from 'react-router-dom'
import { useActions } from '../store/hooks/useActions'
import UserPostItem from '../components/UserPostItem'
import UserSkeleton from '../components/ProfileSkeleton'

const UserPage: React.FC = (): JSX.Element => {
  const { id } = useParams()
  const {
    user: { avatarImg, email, fullName, posts, about },
    status: userStatus,
  } = useTypedSelector((state) => state.profile)
  const { status } = useTypedSelector((state) => state.posts)
  const { fetchUser } = useActions()

  useEffect(() => {
    if (
      (id && status === 'fulfiled') ||
      (id && status === 'idle') ||
      (id && status === 'deleted')
    ) {
      fetchUser(id)
    }
  }, [fetchUser, id, status])
  if (status === 'loading' || userStatus === 'loading') {
    return (
      <main>
        <div className="max-w-5xl mx-auto">
          <UserSkeleton />
        </div>
      </main>
    )
  }
  console.log(status)

  if (userStatus === 'failed') {
    return (
      <main>
        <div className="max-w-5xl mx-auto">There is no such user</div>
      </main>
    )
  }

  return (
    <main>
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-16 p-8 mb-10 bg-white">
          <img
            className="h-40 w-40 rounded-full object-cover"
            src={
              avatarImg
                ? avatarImg
                : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
            }
            alt=""
          />
          <div>
            <div className="font-medium text-3xl mb-1">{fullName}</div>
            <div className="mb-5">{email}</div>
            {about ? <div>{about}</div> : null}
          </div>
        </div>
        <div className="p-8 bg-white">
          <div className="text-2xl font-semibold mb-4">Posts</div>
          <div className="grid grid-cols-3 gap-4">
            {posts.length
              ? posts.map((post) => {
                  return <UserPostItem key={post._id} post={post} />
                })
              : 'There are no posts'}
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserPage

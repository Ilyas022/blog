import { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { useNavigate } from 'react-router-dom'

const UsersPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<
    { _id: string; avatarImg: string; fullName: string; email: string; about: string }[]
  >([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await axiosInstance.get('/users')
        setUsers(data.data)
      } catch (error) {}
    }
    getUsers()
  }, [])

  if (!users.length) {
    return (
      <main>
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-md flex flex-col gap-5">
          There are no users
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-md flex flex-col gap-5">
        {users.map((user) => {
          return (
            <button
              onClick={() => navigate(`/user/${user._id}`)}
              key={user._id}
              className="flex gap-16 p-8 shadow-lg bg-white cursor-pointer text-left"
            >
              <img
                className="h-40 w-40 rounded-full object-cover"
                src={
                  user.avatarImg
                    ? user.avatarImg
                    : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                }
                alt=""
              />
              <div>
                <div className="font-medium text-3xl mb-1">{user.fullName}</div>
                <div className="mb-5">{user.email}</div>
                {user.about ? <div>{user.about}</div> : null}
              </div>
            </button>
          )
        })}
      </div>
    </main>
  )
}

export default UsersPage

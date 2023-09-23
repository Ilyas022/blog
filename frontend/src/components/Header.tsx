import { Link } from 'react-router-dom'
import HeaderLink from '../widgets/HeaderLink'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { useActions } from '../store/hooks/useActions'

const Header: React.FC = (): JSX.Element => {
  const {
    isLoged,
    user: { id },
  } = useTypedSelector((state) => state.user)
  const { logOutUser } = useActions()

  return (
    <header className="mb-5 border-b-2 border-solid border-gray-200 bg-white">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-4">
        <div className="flex items-center gap-5">
          <HeaderLink to="/" text="Home" />
          {isLoged ? <HeaderLink to={`/user/${id}`} text="Me" /> : null}
          <HeaderLink to="/users" text="Users" />
        </div>
        {isLoged ? (
          <div className="flex gap-3">
            <Link
              className="p-2 border-[1px] border-solid border-main rounded-[4px] text-main"
              to="/add-post"
            >
              Create post
            </Link>
            <button
              className="py-2 px-4 border-[1px] border-solid border-[] rounded-[4px] text-white bg-main"
              onClick={() => logOutUser()}
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              className="p-2 border-[1px] border-solid border-main rounded-[4px] text-main"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="py-2 px-4 border-[1px] border-solid border-[] rounded-[4px] text-white bg-main"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

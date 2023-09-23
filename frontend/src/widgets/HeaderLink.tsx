import { Link, useLocation } from 'react-router-dom'

interface IHeaderLink {
  to: string
  text: string
}

const HeaderLink: React.FC<IHeaderLink> = ({ text, to }: IHeaderLink): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Link
      className={
        pathname === to
          ? 'text-lg font-medium text-main'
          : 'text-lg font-medium hover:text-main duration-300'
      }
      to={to}
    >
      {text}
    </Link>
  )
}

export default HeaderLink

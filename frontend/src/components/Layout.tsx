import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout

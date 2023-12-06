import { FC, Suspense } from "react"
import { Link, Outlet } from 'react-router-dom'
import Auth from "../component/auth/Auth"

const Nav: FC = () => {
   return (
      <>
         <Auth />
         <ul>
            <li><Link to={'/'}>Главная</Link></li>
            <li><Link to={'/character'}>Герои</Link></li>
            <li><Link to={'/location'}>Локации</Link></li>
            <li><Link to={'/episode'}>Эпизоды</Link></li>
         </ul>
         <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
         </Suspense>
      </>
   )
}

export default Nav
import { FC } from "react"
import { Link, Outlet } from 'react-router-dom'
import Auth from "../component/Auth"

const Nav: FC = () => {

   return (
      <>
         <Auth />
         <ul>
            <li><Link to={'/'}>Главная</Link></li>
            <li><Link to={'/characters'}>Герои</Link></li>
            <li><Link to={'/location'}>Локации</Link></li>
            <li><Link to={'/episode'}>Эпизоды</Link></li>
         </ul>
         <Outlet />
      </>
   )
}

export default Nav
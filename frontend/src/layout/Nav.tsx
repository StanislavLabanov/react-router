import { FC } from "react"
import { Link } from 'react-router-dom'

const Nav: FC = () => {
   return (
      <ul>
         <li><Link to={'/'}>Главная</Link></li>
         <li><Link to={'/characters'}>Герои</Link></li>
         <li><Link to={'/location'}>Локации</Link></li>
         <li><Link to={'/episode'}>Эпизоды</Link></li>
      </ul>
   )
}

export default Nav
import { FC } from "react"
import { useAuth } from "../context/lib"
import { Link, useNavigate } from "react-router-dom"

const Auth: FC = () => {
   const value = useAuth()
   const navigate = useNavigate()

   if (!value?.user) {
      return <h1><Link to={'/login'}>Зарегистрироваться</Link></h1>
   }
   return (
      <>
         <h1>Здравствуйте! {value.user}</h1>
         <button onClick={() => value.singOut(() => navigate('/'))}>Sing out</button>
      </>
   )
}

export default Auth
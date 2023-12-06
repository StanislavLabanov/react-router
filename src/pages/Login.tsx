import { FC, FormEvent } from "react"
import { useAuth } from "../context/lib"
import { useLocation, useNavigate } from "react-router-dom"

export const Login: FC = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const value = useAuth()

   const from = location.state?.from || '/'

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const username = new FormData(e.currentTarget).get('username')
      username && value?.singIn(username.toString(), () => navigate(from, { replace: true }))
   }

   return (
      <form onSubmit={onSubmit}>
         <label>User name: <input type="text" name="username" /></label>
         <button type="submit">Login</button>
      </form>
   )
}
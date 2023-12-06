import { FC, useTransition } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/lib"
import styles from './Auth.module.css'

const Auth: FC = () => {
   const value = useAuth()
   const navigate = useNavigate()
   const [isPending, startTransition] = useTransition()

   if (!value?.user) {
      return isPending ? <h3>Loading...</h3> : <h2 className={styles.h2} onClick={() => startTransition(() => navigate('/login'))}>Зарегистрироваться</h2>
   }
   return (
      <>
         <h1>Здравствуйте! {value.user}</h1>
         <button onClick={() => value.singOut(() => navigate('/'))}>Sing out</button>
      </>
   )
}

export default Auth